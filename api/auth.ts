export const config = {
  runtime: "edge",
};

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const users = JSON.parse(process.env.USERS as string);
  const user = users.find(
    (u: { username: string; password: string }) =>
      u.username === username && u.password === password
  );

  if (user) {
    const response = new Response(
      JSON.stringify({
        message: "Login successful",
        success: true,
        user: { id: user.id, name: user.username },
      }),
      {
        status: 200,
      }
    );

    // response.headers.set(
    //   "Set-Cookie",
    //   `authUser=${encodeURIComponent(JSON.stringify({ username: user.username, id: user.id }))}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=${180 * 24 * 60 * 60}`
    // );

    return response;
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }
}
