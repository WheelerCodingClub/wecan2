// load the .env file
import "dotenv/config";

import type { Handle } from "@sveltejs/kit";
import sql from "$lib/server/db";
import { verifyToken } from "$lib/server/auth";

export const handle: Handle = async ({ event, resolve }) => {
    // if the user has a token...
    const token = event.cookies.get("token");
    if (token !== undefined) {
        // if it's valid...
        const result = verifyToken(token);
        if (result.valid) {
            // if the user exists...
            const [{ exists }]: [{ exists: boolean }] = await sql`
                SELECT EXISTS (SELECT 1 FROM users WHERE id = ${result.id})
            `;
            if (exists) {
                // authorize them :)
                event.locals.user = {
                    id: result.id
                };
            }
        }
    }

    return resolve(event);
};
