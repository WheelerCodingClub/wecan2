import type { Sql } from "postgres";

const tables = ["users", "clubs", "posts"];

export async function up(sql: Sql) {
    for (const name of tables) {
        const table = sql.unsafe(name);
        const sequence = sql.unsafe(`${name}_id_seq`);

        // get the last generated id
        const [{ id }]: [{ id: number | null }] = await sql`
            SELECT MAX(id) as id FROM ${table}
        `;

        // drop the old sequence
        await sql`
            ALTER TABLE ${table}
                ALTER COLUMN id DROP DEFAULT
        `;
        await sql`
            DROP SEQUENCE ${sequence}
        `;

        // create the sequence and set its last value
        await sql`
            ALTER TABLE ${table}
                ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
        `;
        if (id != null) {
            await sql`
                SELECT setval(pg_get_serial_sequence('${table}', 'id'), ${id})
            `;
        }
    }
}

export async function down(sql: Sql) {
    for (const name of tables) {
        const table = sql.unsafe(name);
        const sequence = sql.unsafe(`${name}_id_seq`);

        // get the last generated id
        const [{ id }]: [{ id: number | null }] = await sql`
            SELECT MAX(id) as id FROM ${table}
        `;

        // drop the old sequence
        await sql`
            ALTER TABLE ${table}
                ALTER COLUMN id DROP IDENTITY
        `;

        // create the sequence and set its last value
        await sql`
            CREATE SEQUENCE ${sequence}
                AS integer
                OWNED BY ${table}.id
        `;
        await sql`
            ALTER TABLE ${table}
                ALTER COLUMN id SET DEFAULT nextval('${sequence}')
        `;
        if (id != null) {
            await sql`
                SELECT setval('${sequence}', ${id})
            `;
        }
    }
}
