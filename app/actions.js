'use server';
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from '@/lib/zodSchemas';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import prisma from '@/lib/db';

export async function createProduct(pervState, formData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== 'princeglow.india@gmail.com') {
    return redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim())
  );
  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
      isFeatured: submission.value.isFeatured,
      category: submission.value.category,
    },
  });

  redirect('/dashboard/products');
}
