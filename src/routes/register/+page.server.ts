import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import {
    signToken,
    tokenCookieMaxAge,
    tokenCookieSettings,
} from "$lib/server/auth";
import { Error } from "$lib/types/error";
import bcrypt from "bcrypt";

import db from "$lib/server/db";
import { users } from "$lib/server/db/schema";
import { eq } from "$lib/server/db/query";
import { rowExists } from "$lib/server/db/helper";

export const load: PageServerLoad = ({ locals: { user } }) => {
    if (user) redirect(303, "/");
    return {};
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const confirmPassword = data.get("confirmPassword");
        const remember = data.get("remember");

        const sfail = (status: number, error: Error) => fail(status, { name, email, error });

        // validate form
        if (!name) return sfail(400, Error.name_missing);
        if (typeof name !== "string") return sfail(400, Error.name_invalid);
        if (name.length > 64) return sfail(400, Error.name_long); // TODO: determine suitable max length

        if (!email) return sfail(400, Error.email_missing);
        if (typeof email !== "string") return sfail(400, Error.email_invalid); // TODO: check if email is valid
        if (email.length > 254) return sfail(400, Error.email_long);

        if (!password) return sfail(400, Error.password_missing);
        if (typeof password !== "string") return sfail(400, Error.password_invalid);
        if (password.length < 8) return sfail(400, Error.password_short);
        if (password.length > 72) return sfail(400, Error.password_long);

        if (!confirmPassword) return sfail(400, Error.confirmPassword_missing);
        if (typeof confirmPassword !== "string") return sfail(400, Error.confirmPassword_invalid);

        if (password !== confirmPassword) return sfail(400, Error.password_confirm);

        // check if email is already registered
        const alreadyRegistered = rowExists(users, eq(users.email, email));
        if (alreadyRegistered) return sfail(400, Error.email_taken);

        // register user
        const passwordHash = await bcrypt.hash(password, 12);
        const { id: userId } = db
            .insert(users)
            .values({
                name,
                email,
                password: passwordHash,
                createdAt: Date.now(),
            })
            .returning({
                id: users.id,
            })
            .get();

        // generate token and log the user in
        const token = signToken(userId);
        cookies.set("token", token, {
            ...tokenCookieSettings,
            ...(remember ? { maxAge: tokenCookieMaxAge } : {}),
        });

        return { success: true };
    },
};
