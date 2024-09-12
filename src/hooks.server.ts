import type { Handle } from "@sveltejs/kit";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { verifyToken } from "$lib/server/auth";

import db from "$lib/server/db";
import { eq } from "$lib/server/db/query";
import { rowExists } from "$lib/server/db/helper";
import { users } from "$lib/server/db/schema";

// execute migrations on start.
migrate(db, { migrationsFolder: "migrations" });

export const handle: Handle = async ({ event, resolve }) => {
    // if the user has a token...
    const rawToken = event.cookies.get("token");
    if (rawToken !== undefined) {
        // if it's valid...
        const token = verifyToken(rawToken);
        if (token) {
            // if the user exists...
            const userExists = rowExists(users, eq(users.id, token.id));
            if (userExists) {
                // authorize them :)
                event.locals.user = {
                    id: token.id,
                };
            }
        }
    }

    return resolve(event);
};
