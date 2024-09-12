import type { SQL, Subquery } from "drizzle-orm";
import type { SQLiteTable } from "drizzle-orm/sqlite-core";
import type { SQLiteViewBase } from "drizzle-orm/sqlite-core/view-base";
import db from ".";
import { sql } from "./query";

// https://github.com/drizzle-team/drizzle-orm/issues/1689
export const rowExists = <
    TFrom extends SQLiteTable | Subquery | SQLiteViewBase | SQL,
>(
    from: TFrom,
    where?: SQL,
) => {
    const { result } =  db.get<{ result: 0 | 1 }>(
        sql`select exists (select 1 from ${from} ${where ? sql`where ${where}` : undefined}) as result`,
    );
    return !!result;
};
