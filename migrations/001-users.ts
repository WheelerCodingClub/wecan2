import type { Sql } from "postgres";

export async function up(sql: Sql) {
    await sql`
        CREATE TABLE users
        (
            id       serial PRIMARY KEY,
            name     text NOT NULL,
            email    varchar(254) UNIQUE NOT NULL,
            password varchar(60) NOT NULL,
            created  timestamp NOT NULL
        )
    `;
}

export async function down(sql: Sql) {
    await sql`
        DROP TABLE users
    `;
}
