// Shared HMAC helper for the login cookie. Imported by the root `middleware.ts`
// (Vercel Edge Middleware) and by `api/auth.ts` (Edge Function). Both run in the
// Edge runtime, where Web Crypto is available, so this needs no dependency.
//
// Two implementation choices are deliberate:
//
// 1. The signature covers the string `${id}:${username}` rather than a
//    re-serialized JSON object. The signer builds the object and the verifier
//    parses whatever arrived, so the two would have to agree on JSON key order
//    for a JSON-based signature to match. A plain concatenation has no such
//    failure mode.
//
// 2. The signature is hex, not base64. The cookie readers in `login.astro`,
//    `DateAnalyticsComponent.astro`, and `SocialIcons.astro` all extract the
//    value with `.split("=")[1]`, so any base64 padding character would truncate
//    the cookie and every login would fail. Hex contains no "=", "+", or "/".

const encoder = new TextEncoder();

export async function signUser(
  id: string | number,
  username: string,
  secret: string,
): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(`${id}:${username}`),
  );
  return Array.from(new Uint8Array(mac))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

// Compares in constant time so that a rejected signature does not reveal how many
// leading characters were correct.
export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let difference = 0;
  for (let i = 0; i < a.length; i++) {
    difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return difference === 0;
}
