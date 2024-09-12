import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

import { ClubVisibility } from "$lib/db/types";
import { and, eq, ne, or } from "$lib/server/db/query";
import { clubs } from "$lib/server/db/schema";
import db from "$lib/server/db";

export const load: PageServerLoad = async ({ locals: { user }, params }) => {
    const clubId = parseInt(params.id);
    if (isNaN(clubId)) error(404, "Not Found");

    const club = db.query.clubs
        .findFirst({
            columns: {
                id: true,
                name: true,
                description: true,
                visibility: true,
                createdAt: true,
            },
            where: and(
                eq(clubs.id, clubId),
                or(
                    // either the club is not private
                    ne(clubs.visibility, ClubVisibility.PRIVATE),
                    // or the user is logged in and owns it.
                    user ? eq(clubs.owner, user.id) : undefined,
                ),
            ),
            with: {
                owner: {
                    columns: {
                        id: true,
                        name: true,
                    },
                },
                posts: {
                    columns: {
                        id: true,
                        title: true,
                        content: true,
                        createdAt: true,
                    },
                },
            },
        })
        .sync();
    if (!club) error(404, "Not Found");

    return {
        ...club,
        createdAt: new Date(club.createdAt),
        posts: club.posts.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
        })),
    };
};
