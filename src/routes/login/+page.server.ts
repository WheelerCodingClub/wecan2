import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { signToken, tokenCookieMaxAge, tokenCookieSettings } from "$lib/server/auth";
import { Error } from "./error";
import bcrypt from "bcrypt";
import sql from "$lib/server/db";

export const load: PageServerLoad = ({ locals: { user } }) => {
    if (user) redirect(303, "/");
    return {};
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const email = data.get("email");
        const password = data.get("password");
        const remember = data.get("remember");

        const sfail = (status: number, error: Error)=> fail(status, { email, error });

        // validate form
        if (!email) return sfail(400, Error.email_missing);
        if (typeof email !== "string") return sfail(400, Error.email_invalid);

        if (!password) return sfail(400, Error.password_missing);
        if (typeof password !== "string") return sfail(400, Error.password_invalid);

        // retrieve information and check if user exists
        const [{ id: userId, password: passwordHash }] = await sql`
            SELECT id, password FROM users WHERE email = ${email}
        `;
        if (!passwordHash) return sfail(401, Error.unauthorized);

        // check if password matches
        const matches = await bcrypt.compare(password, passwordHash);
        if (!matches) return sfail(401, Error.unauthorized);
    
        // generate token and log the user in
        const token = signToken(userId);
        cookies.set("token", token, {
            ...tokenCookieSettings,
            ...(remember ? { maxAge: tokenCookieMaxAge } : {}),
        });

        return { success: true };
    },
};
