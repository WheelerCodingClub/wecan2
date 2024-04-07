import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = ({ locals: { user } }) => {
    if (user) redirect(303, "/");
    return {};
};

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const email = data.get("email");
        if (!email) return fail(400, { email, missing: true });

        const password = data.get("password");
        if (!password) return fail(400, { email, missing: true });

        // TODO: registration

        return { success: true };
    },
};
