import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
  name: z.string(),
  provider: z.enum(["GOOGLE", "FACEBOOK", "TWITTER"]),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, username, password, name, provider } =
      userSchema.parse(body);

    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      return new NextResponse("User with this email already exists", {
        status: 409,
      });
    }

    const existingUserByUsername = await db.user.findUnique({
      where: { username },
    });
    if (existingUserByUsername) {
      return new NextResponse("User with this username already exists", {
        status: 409,
      });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        name,
        provider, // Include provider here
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User created" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid input", { status: 400 });
    }
    console.error("Error creating user:", error);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
