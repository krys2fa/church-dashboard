import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simulate user verification (replace with real logic)
  if (email === "admin@example.com" && password === "admin123") {
    const res = NextResponse.json({ message: "Login successful" });
    res.cookies.set("token", "fake-jwt-token", { httpOnly: true });
    return res;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
