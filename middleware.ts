import { next, rewrite } from "@vercel/edge";
import { signUser, timingSafeEqual } from "./lib/auth-cookie";

export const config = {
  matcher: ["/((?!api).*)", "/"],
};

function readCookie(cookieName: string, cookieHeader: string | null) {
  if (!cookieHeader) return null;
  const cookie = cookieHeader
    .split("; ")
    .find((entry) => entry.startsWith(`${cookieName}=`));
  return cookie ? cookie.split("=")[1] : null;
}

async function isSignatureValid(rawCookie: string, secret: string) {
  try {
    const user = JSON.parse(decodeURIComponent(rawCookie));
    if (!user?.id || !user?.username || typeof user?.sig !== "string") {
      return false;
    }
    // The cookie is readable and editable in the browser, so its contents prove
    // nothing on their own. Only the signature does, because producing one
    // requires AUTH_SECRET, which never leaves the server.
    const expected = await signUser(user.id, user.username, secret);
    return timingSafeEqual(expected, user.sig);
  } catch (error) {
    return false;
  }
}

export default async function middleware(request: Request) {
  const { pathname } = new URL(request.url);
  const isLoginPage = pathname === "/login";
  const loginUrl = new URL("/login", request.url);

  const COOKIE_NAME = process.env.PUBLIC_COOKIE_NAME;
  const secret = process.env.AUTH_SECRET;
  // A missing secret fails closed. Admitting the request instead would restore the
  // unsigned-cookie bypass that this verification exists to close.
  if (!COOKIE_NAME || !secret) {
    return isLoginPage ? next() : rewrite(loginUrl);
  }

  // Expiring a rejected cookie matters for more than tidiness. The login page
  // decides whether to greet a returning user by reading the cookie's fields, and
  // it cannot check a signature, so a cookie left in place would make that page
  // offer "Go to the site" to someone the gate has just turned away.
  const clearCookie = {
    "Set-Cookie": `${COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax; Secure`,
  };

  const rawCookie = readCookie(COOKIE_NAME, request.headers.get("cookie"));
  const valid = rawCookie ? await isSignatureValid(rawCookie, secret) : false;

  if (isLoginPage) {
    return rawCookie && !valid ? next({ headers: clearCookie }) : next();
  }

  if (valid) {
    return next();
  }

  return rewrite(loginUrl, rawCookie ? { headers: clearCookie } : undefined);
}
