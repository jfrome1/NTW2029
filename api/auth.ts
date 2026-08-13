import { signUser } from "../lib/auth-cookie";

export const config = {
  runtime: "edge",
};

const COOKIE_MAX_AGE = 90 * 24 * 60 * 60;

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const secret = process.env.AUTH_SECRET;
  const cookieName = process.env.PUBLIC_COOKIE_NAME;
  if (!secret || !cookieName) {
    return new Response(
      JSON.stringify({
        message: "Server is not configured for login",
        success: false,
      }),
      { status: 500 }
    );
  }

  const users = JSON.parse(process.env.USERS as string);
  const user = users.find(
    (u: { username: string; password: string }) =>
      u.username === username && u.password === password
  );

  if (user) {
    const sig = await signUser(user.id, user.username, secret);
    const cookieValue = encodeURIComponent(
      JSON.stringify({ id: user.id, username: user.username, sig })
    );

    return new Response(
      JSON.stringify({
        message: "Login successful",
        success: true,
        user: { id: user.id, name: user.username },
      }),
      {
        status: 200,
        headers: {
          // The server sets this cookie so the browser never sees the signing
          // secret. It is intentionally not HttpOnly: DateAnalyticsComponent.astro
          // reads the cookie in the browser to identify the student for PostHog,
          // and HttpOnly would silently break that attribution.
          "Set-Cookie": `${cookieName}=${cookieValue}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure`,
        },
      }
    );
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }
}
