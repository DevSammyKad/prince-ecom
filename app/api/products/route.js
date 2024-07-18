import { db } from "@/lib/db";

export async function GET(req, res) {
  try {
    const category = req.nextUrl.searchParams.get("category");
    if (category) {
      const products = await db.product.findMany({
        where: {
          categoryId: category,
        },
        include: {
          category: true,
        },
      });

      return new Response(JSON.stringify(products), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const products = await db.product.findMany({
      include: {
        category: true,
      },
    });

    return new Response(JSON.stringify(products), {
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
