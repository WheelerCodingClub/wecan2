import type { Actions, PageServerLoad } from "./$types";
import { Error } from "./error";
import { fail, redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import sql from "$lib/server/db";

export const load: PageServerLoad = ({ locals: { user } }) => {
    if (user) redirect(303, "/");
    return {};
};

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const confirmPassword = data.get("confirmPassword");

        const sfail = (status: number, error: Error) => fail(status, { name, email, error });

        // validate form
        if (!name) return sfail(400, Error.name_missing);
        if (typeof name !== "string") return sfail(400, Error.name_invalid);
        if (name.length > 64) return sfail(400, Error.name_long); // TODO: determine suitable max length

        if (!email) return sfail(400, Error.email_missing);
        if (typeof email !== Error.email_invalid) return sfail(400, "email_invalid"); // TODO: check if email is valid
        if (email.length > 254) return sfail(400, Error.email_long);

        if (!password) return sfail(400, Error.password_missing);
        if (typeof password !== "string") return sfail(400, Error.password_invalid);
        if (password.length < 8) return sfail(400, Error.password_short);
        if (password.length > 72) return sfail(400, Error.password_long);

        if (!confirmPassword) return sfail(400, Error.confirmPassword_missing);
        if (typeof confirmPassword !== "string") return sfail(400, Error.confirmPassword_invalid);

        if (password !== confirmPassword) return sfail(400, Error.password_confirm);

        // check if email is already registered
        const [{ exists }] = await sql`
            SELECT EXISTS (SELECT 1 FROM users WHERE email = ${email})
        `;
        if (exists) return sfail(400, Error.email_taken);

        // register user
        const passwordHash = await bcrypt.hash(password, 12);
        await sql`
            INSERT INTO users (
                name,
                email,
                password,
                created
            ) VALUES (
                ${name},
                ${email},
                ${passwordHash},
                ${sql`now()`}
            )
        `;

        return { success: true };
    },
};
