import type { Sql } from "postgres";

export async function up(sql: Sql) {
    await sql`
        CREATE TABLE posts
        (
            id       serial PRIMARY KEY,
            club     integer NOT NULL REFERENCES clubs,
            title    text NOT NULL,
            content  text NOT NULL,
            created  timestamp NOT NULL
        )
    `;
}

export async function down(sql: Sql) {
    await sql`
        DROP TABLE posts
    `;
}
