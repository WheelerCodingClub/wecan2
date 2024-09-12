import type { JwtPayload } from "jsonwebtoken";
import { env } from "$env/dynamic/private";
import jwt from "jsonwebtoken";

export function signToken(userId: number): string {
    return jwt.sign({ id: userId }, env.WECAN_SECRET!);
}

export function verifyToken(token: string): { id: number; } | null {
    try {
        const { id } = jwt.verify(token, env.WECAN_SECRET!) as JwtPayload;
        return { id };
    } catch {
        return null;
    }
}

// 1 week
export const tokenCookieMaxAge = 1000 * 60 * 60 * 24 * 7;

export const tokenCookieSettings = {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: import.meta.env.PROD,
} as const;
