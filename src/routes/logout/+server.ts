import type { RequestHandler } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = (event) => {
    // TODO: logging out
    redirect(303, "/");
};
