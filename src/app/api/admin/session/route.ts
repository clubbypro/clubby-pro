import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_COOKIE_OPTIONS,
  createSessionToken,
  getAdminPassword,
  isValidSessionToken,
  passwordMatches,
} from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  return NextResponse.json({ authenticated: isValidSessionToken(token) });
}

export async function POST(request: NextRequest) {
  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const expected = getAdminPassword();
  if (!expected || !password || !passwordMatches(password, expected)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    ADMIN_SESSION_COOKIE,
    createSessionToken(expected),
    ADMIN_SESSION_COOKIE_OPTIONS
  );
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    ...ADMIN_SESSION_COOKIE_OPTIONS,
    maxAge: 0,
  });
  return response;
}
