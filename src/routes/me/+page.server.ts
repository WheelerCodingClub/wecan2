import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

import db from "$lib/server/db";
import { eq } from "$lib/server/db/query";
import { users } from "$lib/server/db/schema";

export const load: PageServerLoad = async ({ locals: { user } }) => {
    if (!user) error(403, "Forbidden");

    const { name, email, createdAt } = db.query.users
        .findFirst({
            columns: {
                name: true,
                email: true,
                createdAt: true,
            },
            where: eq(users.id, user.id),
        })
        .sync()!;

    return {
        id: user.id,
        name,
        email,
        createdAt: new Date(createdAt),
    };
};
