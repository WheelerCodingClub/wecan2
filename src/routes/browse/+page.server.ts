import type { PageServerLoad } from "./$types";
import sql from "$lib/server/db";

export const load: PageServerLoad = async ({ locals: { user } }) => {
    const clubs: {
        id: number;
        name: string;
        description: string;
    }[] = await sql`
        SELECT
            id,
            name,
            description
        FROM
            clubs
        WHERE
            visibility = 'public'
            ${user ? sql`OR owner = ${user.id}` : sql``}
        ORDER BY
            name
    `;

    return {
        clubs,
    };
};
