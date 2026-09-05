import { createHash, createHmac, timingSafeEqual } from "crypto";

export const ADMIN_SESSION_COOKIE = "clubby_admin_session";

export const ADMIN_SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};

export function getAdminPassword(): string | undefined {
  const value = process.env.ADMIN_PASSWORD;
  return value ? value : undefined;
}

function sha256(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

export function passwordMatches(provided: string, expected: string): boolean {
  return timingSafeEqual(sha256(provided), sha256(expected));
}

export function createSessionToken(secret: string): string {
  return createHmac("sha256", secret).update("clubby-admin-session").digest("hex");
}

export function isValidSessionToken(token: string | undefined): boolean {
  const secret = getAdminPassword();
  if (!secret || !token) return false;
  const expected = createSessionToken(secret);
  const provided = Buffer.from(token);
  const valid = Buffer.from(expected);
  if (provided.length !== valid.length) return false;
  return timingSafeEqual(provided, valid);
}
