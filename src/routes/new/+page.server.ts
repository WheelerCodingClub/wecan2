import type { Actions, PageServerLoad } from "./$types";
import { error, fail, redirect } from "@sveltejs/kit";

import { ClubVisibility } from "$lib/db/types";
import { clubs } from "$lib/server/db/schema";
import db from "$lib/server/db";

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
        const { id: clubId } = db
            .insert(clubs)
            .values({
                owner: user.id,
                name,
                description,
                visibility: ClubVisibility.PUBLIC,
                createdAt: Date.now(),
            })
            .returning({
                id: clubs.id,
            })
            .get();

        redirect(303, `/view/${clubId}`);
    },
};
