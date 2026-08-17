import "server-only";
import { createNeonAuth } from "@neondatabase/auth/next/server";

// Reads NEON_AUTH_BASE_URL (Neon console → Auth → Configuration tab) and
// NEON_AUTH_COOKIE_SECRET (any random 32+ char string, e.g. `openssl rand
// -base64 32`). Left unset, the app still builds and the public site still
// works — only sign-in is unavailable. Neon Auth was already enabled for
// this project; only these two values are missing until you copy them in.
const baseUrl = process.env.NEON_AUTH_BASE_URL;
const cookieSecret = process.env.NEON_AUTH_COOKIE_SECRET;

export const auth =
  baseUrl && cookieSecret && cookieSecret.length >= 32
    ? createNeonAuth({
        baseUrl,
        cookies: { secret: cookieSecret },
        // Temporary: surfaces the exact rejected origin / trustedOrigins
        // list in Vercel's function logs while diagnosing "Invalid
        // origin" on sign-up. Dial back to the default ('warn') once
        // resolved.
        logLevel: "debug",
      })
    : null;
