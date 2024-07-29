import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const orders = await db.order.findMany({
      include: {
        user: true,
        product: true,
      },
    });

    return new Response(JSON.stringify(orders), {
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
