import { next, rewrite } from "@vercel/edge";
import { signUser, timingSafeEqual } from "./lib/auth-cookie";

export const config = {
  matcher: ["/((?!api).*)", "/"],
};

export default async function middleware(request: Request) {
  const { pathname } = new URL(request.url);
  if (pathname === "/login") {
    return next();
  }

  const toLogin = () => rewrite(new URL("/login", request.url));

  const COOKIE_NAME = process.env.PUBLIC_COOKIE_NAME;
  const secret = process.env.AUTH_SECRET;
  // A missing secret fails closed. Admitting the request instead would restore the
  // unsigned-cookie bypass that this verification exists to close.
  if (!COOKIE_NAME || !secret) {
    return toLogin();
  }

  const cookies = request.headers.get("cookie");

  const getCookie = (cookieName: string, cookieHeader: string | null) => {
    if (!cookieHeader) return null;
    const cookie = cookieHeader
      .split("; ")
      .find((cookie) => cookie.startsWith(`${cookieName}=`));
    return cookie ? cookie.split("=")[1] : null;
  };

  const userCookie = getCookie(COOKIE_NAME, cookies);
  if (!userCookie) {
    return toLogin();
  }

  try {
    const user = JSON.parse(decodeURIComponent(userCookie));
    if (!user?.id || !user?.username || typeof user?.sig !== "string") {
      return toLogin();
    }
    // The cookie is readable and editable in the browser, so its contents prove
    // nothing on their own. Only the signature does, because producing one
    // requires AUTH_SECRET, which never leaves the server.
    const expected = await signUser(user.id, user.username, secret);
    if (!timingSafeEqual(expected, user.sig)) {
      return toLogin();
    }
    return next();
  } catch (error) {
    return toLogin();
  }
}
