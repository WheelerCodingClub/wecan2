import type { RequestHandler } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import { tokenCookieSettings } from "$lib/server/auth";

export const GET: RequestHandler = ({ cookies }) => {
    // log the user out
    cookies.delete("token", { path: tokenCookieSettings.path });

    redirect(303, "/");
};
