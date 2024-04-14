import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import sql from "$lib/server/db";

export const load: PageServerLoad = async ({ locals: { user } }) => {
    if (!user) error(403, "Forbidden");

    const [{ name, email, created }]: [
        {
            name: string;
            email: string;
            created: string;
        },
    ] = await sql`
        SELECT name, email, created FROM users WHERE id = ${user.id}
    `;

    return {
        id: user.id,
        name,
        email,
        created,
    };
};
