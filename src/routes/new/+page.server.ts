import type { Actions, PageServerLoad } from "./$types";
import { error, fail, redirect } from "@sveltejs/kit";
import sql from "$lib/server/db";

export const load: PageServerLoad = ({ locals: { user } }) => {
    if (!user) error(403, "Forbidden");
    return {};
};

export const actions: Actions = {
    default: async ({ locals: { user }, request }) => {
        if (!user) error(403, "Forbidden");

        const data = await request.formData();

        const name = data.get("name");
        const description = data.get("description");

        const sfail = (status: number) => fail(status, { name, description });

        // validate form
        if (!name) return sfail(400);
        if (typeof name !== "string") return sfail(400);
        // TODO: club name length limit

        if (typeof description !== "string") return sfail(400);
        // TODO: club description length limit

        // create club
        const [{ id: clubId }]: [{ id: number }] = await sql`
            INSERT INTO clubs (
                owner,
                name,
                description,
                visibility,
                created
            ) VALUES (
                ${user.id},
                ${name},
                ${description},
                'public',
                now()
            ) RETURNING id
        `;

        redirect(303, `/view/${clubId}`);
    },
};
