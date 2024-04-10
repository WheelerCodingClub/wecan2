import type { JwtPayload } from "jsonwebtoken";
import { env } from "node:process";
import jwt from "jsonwebtoken";

export function signToken(userId: number): string {
    return jwt.sign({ id: userId }, env.AUTH_SECRET as string);
}

export function verifyToken(token: string): { valid: true; id: number; } | { valid: false; } {
    try {
        const { id } = jwt.verify(token, env.AUTH_SECRET as string) as JwtPayload;
        return {
            valid: true,
            id,
        };
    } catch {
        return {
            valid: false,
        };
    }
}

export const tokenCookieSettings = {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    path: "/",
    sameSite: "lax",
    secure: import.meta.env.PROD,
} as const;