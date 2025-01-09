export const config = {
  runtime: "edge", // this is optional.
};

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // const users = [
  //   { id: 1, username: "user1", password: "pass1" },
  //   { id: 2, username: "user2", password: "pass2" },
  //   { id: 3, username: "admin", password: "adminpass" },
  // ];
  const users = JSON.parse(import.meta.env.USERS);
  console.log(users);
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

    response.headers.set(
      "Set-Cookie",
      `authUser=valid-user; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=${180 * 24 * 60 * 60}`
    );

    return response;
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }
}
