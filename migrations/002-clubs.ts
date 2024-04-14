import type { Sql } from "postgres";

export async function up(sql: Sql) {
    await sql`
        CREATE TYPE club_visibility AS ENUM ('public', 'hidden', 'private')
    `;
    await sql`
        CREATE TABLE clubs
        (
            id          serial PRIMARY KEY,
            owner       integer NOT NULL REFERENCES users,
            name        text NOT NULL,
            description text NOT NULL,
            visibility  club_visibility NOT NULL,
            created     timestamp NOT NULL
        )
    `;
}

export async function down(sql: Sql) {
    await sql`
        DROP TABLE clubs
    `;
    await sql`
        DROP TYPE club_visibility
    `;
}
