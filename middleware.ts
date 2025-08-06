import { next, rewrite } from "@vercel/edge";

export const config = {
  matcher: ["/((?!api).*)", "/"],
};

export default async function middleware(request: Request) {
  const { pathname } = new URL(request.url);
  if (pathname === "/login") {
    return next();
  }

  const COOKIE_NAME = "authUser";
  const cookies = request.headers.get("cookie");

  const userAgent = request.headers.get("user-agent") || "";
  const isBrave = userAgent.includes("Brave");

  console.log("User Agent:", userAgent);

  const getCookie = (cookieName: string, cookieHeader: string | null) => {
    if (!cookieHeader) return null;
    const cookie = cookieHeader
      .split("; ")
      .find((cookie) => cookie.startsWith(`${cookieName}=`));
    return cookie ? cookie.split("=")[1] : null;
  };

  const userCookie = getCookie(COOKIE_NAME, cookies);
  if (userCookie) {
    try {
      const user = JSON.parse(decodeURIComponent(userCookie));
      if (user.id) {
        return next();
      } else {
        return rewrite(new URL("/login", request.url));
      }
    } catch (error) {
      return rewrite(new URL("/login", request.url));
    }
  } else {
    return rewrite(new URL("/login", request.url));
  }
}
