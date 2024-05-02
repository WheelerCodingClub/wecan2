import type { ClubVisibility } from "$lib/server/db";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import sql from "$lib/server/db";

export const load: PageServerLoad = async ({ locals: { user }, params }) => {
    const clubId = parseInt(params.id);
    if (isNaN(clubId)) error(404, "Not Found");

    const [club]: [
        {
            id: number;
            owner: number;
            name: string;
            description: string;
            visibility: ClubVisibility;
            created: string;
        }?,
    ] = await sql`
        SELECT
            id,
            owner,
            name,
            description,
            visibility,
            created
        FROM
            clubs
        WHERE
            id = ${clubId}
            AND (visibility != 'private'
                ${user ? sql`OR owner = ${user.id}` : sql``})
    `;
    if (!club) error(404, "Not Found");

    const [owner]: [{ name: string }] = await sql`
        SELECT name FROM users WHERE id = ${club.owner}
    `;

    const posts: {
        id: number;
        title: string;
        content: string;
        created: string;
    }[] = await sql`
        SELECT
            id,
            title,
            content,
            created
        FROM
            posts
        WHERE
            club = ${club.id}
    `;

    return {
        club,
        owner,
        posts,
    };
};
