import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals: { user } }) => {
    return {
        user,
    };
};
