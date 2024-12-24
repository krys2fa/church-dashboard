import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // Basic validation (dummy implementation)
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Simulate saving user (you can connect to a database here)
  return NextResponse.json({ message: "User registered successfully" });
}
