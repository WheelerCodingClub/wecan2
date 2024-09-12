import * as schema from "./schema";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { env } from "$env/dynamic/private";

const sqlite = new Database(env.WECAN_DATABASE);
const db = drizzle(sqlite, { schema });

export default db;
