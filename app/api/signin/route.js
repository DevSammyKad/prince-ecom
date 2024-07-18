import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new NextResponse("Invalid email or password", { status: 401 });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return new NextResponse("Invalid email or password", { status: 401 });
    }

    return NextResponse.json(
      { user, message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid input", { status: 400 });
    }
    console.error("Error logging in:", error);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
