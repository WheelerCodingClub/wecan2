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

        const email = data.get("email");
        const password = data.get("password");

        const sfail = (status: number, error: Error) => fail(status, { email, error });

        if (!email) return sfail(400, "email_missing");
        if (typeof email !== "string") return sfail(400, "email_invalid");

        if (!password) return sfail(400, "password_missing");
        if (typeof password !== "string") return sfail(400, "password_invalid");

        // TODO: check if email is registered and password matches
        // return sfail(403, "unauthorized");

        // TODO: logging in

        return { success: true };
    },
};
