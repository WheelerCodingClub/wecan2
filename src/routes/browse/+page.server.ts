import type { PageServerLoad } from "./$types";

import { eq, or } from "$lib/server/db/query";
import { ClubVisibility } from "$lib/db/types";
import { clubs } from "$lib/server/db/schema";
import db from "$lib/server/db";

export const load: PageServerLoad = async ({ locals: { user } }) => {
    const result = db.query.clubs
        .findMany({
            columns: {
                id: true,
                name: true,
                description: true,
            },
            where: or(
                // the club is public
                eq(clubs.id, ClubVisibility.PUBLIC),
                // or the user is its owner.
                user ? eq(clubs.owner, user.id) : undefined,
            ),
        })
        .sync();

    return {
        clubs: result,
    };
};
