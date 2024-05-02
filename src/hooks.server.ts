// load the .env file
import "dotenv/config";

import type { Handle } from "@sveltejs/kit";
import sql from "$lib/server/db";
import { verifyToken } from "$lib/server/auth";

export const handle: Handle = async ({ event, resolve }) => {
    // if the user has a token...
    const rawToken = event.cookies.get("token");
    if (rawToken !== undefined) {
        // if it's valid...
        const token = verifyToken(rawToken);
        if (token) {
            // if the user exists...
            const [{ exists }]: [{ exists: boolean }] = await sql`
                SELECT EXISTS (SELECT 1 FROM users WHERE id = ${token.id})
            `;
            if (exists) {
                // authorize them :)
                event.locals.user = {
                    id: token.id,
                };
            }
        }
    }

    return resolve(event);
};
