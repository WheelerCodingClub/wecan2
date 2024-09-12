import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import type { ClubVisibility } from "$lib/db/types";
import { relations } from "drizzle-orm";

export const users = sqliteTable("users", {
    id: integer("id").primaryKey({
        autoIncrement: true,
    }),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    createdAt: integer("created_at").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
    clubs: many(clubs),
}));

export const clubs = sqliteTable("clubs", {
    id: integer("id").primaryKey({
        autoIncrement: true,
    }),
    owner: integer("owner")
        .notNull()
        .references(() => users.id, {
            onUpdate: "cascade",
            onDelete: "restrict",
        }),
    name: text("name").notNull(),
    description: text("description").notNull(),
    visibility: integer("visibility").notNull().$type<ClubVisibility>(),
    createdAt: integer("created_at").notNull(),
});

export const clubsRelations = relations(clubs, ({ one, many }) => ({
    owner: one(users, {
        fields: [clubs.owner],
        references: [users.id],
    }),
    posts: many(posts),
}));

export const posts = sqliteTable("posts", {
    id: integer("id").primaryKey({
        autoIncrement: true,
    }),
    club: integer("club")
        .notNull()
        .references(() => clubs.id, {
            onUpdate: "cascade",
            onDelete: "restrict",
        }),
    title: text("title").notNull(),
    content: text("content").notNull(),
    createdAt: integer("created_at").notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
    club: one(clubs, {
        fields: [posts.club],
        references: [clubs.id],
    }),
}));
