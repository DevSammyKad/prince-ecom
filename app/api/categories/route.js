import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const categories = await db.category.findMany({
      include: {
        products: true,
      },
    });

    return new Response(JSON.stringify(categories), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", {
      status: 500,
    });
  }
}
