import postgres from "postgres";

export type ClubVisibility = "public" | "hidden" | "private";

const sql = postgres();

export default sql;
