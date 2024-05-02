import type { Actions, PageServerLoad } from "./$types";
import { error, fail, redirect } from "@sveltejs/kit";
import sql from "$lib/server/db";

export const load: PageServerLoad = ({ locals: { user } }) => {
    if (!user) error(403, "Forbidden");
    return {};
};

export const actions: Actions = {
    default: async ({ locals: { user }, params, request }) => {
        const clubId = parseInt(params.id);
        if (isNaN(clubId)) error(404, "Not Found");

        // user must be logged in
        if (!user) error(403, "Forbidden");

        // to post, the club must exist, and the user must be its owner
        const [{ exists: userOwnsClub }]: [{ exists: boolean }] = await sql`
            SELECT EXISTS (
                SELECT 1 FROM clubs
                WHERE
                    id = ${clubId}
                    AND owner = ${user.id}
            )
        `;
        if (!userOwnsClub) error(403, "Forbidden");

        const data = await request.formData();

        const title = data.get("title");
        const content = data.get("content");

        const sfail = (status: number) => fail(status, { title, content });

        // validate form
        if (!title) return sfail(400);
        if (typeof title !== "string") return sfail(400);
        // TODO: post title length limit

        if (typeof content !== "string") return sfail(400);
        // TODO: post content length limit

        // create post
        const [{ id: postId }]: [{ id: number }] = await sql`
            INSERT INTO posts (
                club,
                title,
                content,
                created
            ) VALUES (
                ${clubId},
                ${title},
                ${content},
                now()
            ) RETURNING id
        `;

        redirect(303, `/view/${clubId}`);
    },
};
