import type { Actions, PageServerLoad } from "./$types";
import type { Error } from "./error";
import { fail, redirect } from "@sveltejs/kit";

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

        if (!name) return sfail(400, "name_missing");
        if (typeof name !== "string") return sfail(400, "name_invalid");
        if (name.length > 64) return sfail(400, "name_long"); // TODO: determine suitable max length

        if (!email) return sfail(400, "email_missing");
        if (typeof email !== "string") return sfail(400, "email_invalid"); // TODO: check if email is valid
        if (email.length > 128) return sfail(400, "email_long"); // TODO: determine suitable max length

        if (!password) return sfail(400, "password_missing");
        if (typeof password !== "string") return sfail(400, "password_invalid");
        if (password.length < 8) return sfail(400, "password_short");
        if (password.length > 72) return sfail(400, "password_long");

        if (!confirmPassword) return sfail(400, "confirmPassword_missing");
        if (typeof confirmPassword !== "string") return sfail(400, "confirmPassword_invalid");

        if (password !== confirmPassword) return sfail(400, "password_confirm");

        // TODO: check if email is already registered
        // return sfail(400, "email_taken");

        // TODO: registration

        return { success: true };
    },
};
