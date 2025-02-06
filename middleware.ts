import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|login).*)"],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Allow access to login page without checks
  if (pathname === "/login") {
    return NextResponse.next();
  }

  const COOKIE_NAME = "authUser";
  const cookies = request.headers.get("cookie");

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
        return NextResponse.next();
      }
      // Redirect to login if user ID is missing
      return NextResponse.redirect(new URL("/login", request.url));
    } catch (error) {
      console.error("Error parsing cookie:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    // Redirect to login if no auth cookie
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
