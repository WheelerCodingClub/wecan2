// load the .env file
import "dotenv/config";

import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = null;
    return resolve(event);
};
