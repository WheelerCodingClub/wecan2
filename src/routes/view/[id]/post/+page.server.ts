import type { Actions, PageServerLoad } from "./$types";
import { error, fail, redirect } from "@sveltejs/kit";

import { and, eq } from "$lib/server/db/query";
import { clubs, posts } from "$lib/server/db/schema";
import db from "$lib/server/db";
import { rowExists } from "$lib/server/db/helper";

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

        const clubExistsAndUserOwnsIt = rowExists(
            clubs,
            and(
                // the club must exist
                eq(clubs.id, clubId),
                // and the user must be its owner.
                eq(clubs.owner, user.id)
            ),
        );
        if (!clubExistsAndUserOwnsIt) error(403, "Forbidden");

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
        const { id: postId } = db
            .insert(posts)
            .values({
                club: clubId,
                title,
                content,
                createdAt: Date.now(),
            })
            .returning({
                id: posts.id,
            })
            .get();

        redirect(303, `/view/${clubId}`);
    },
};
