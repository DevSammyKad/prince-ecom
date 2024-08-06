import EditForm from '@/app/components/dashboard/EditForm';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

async function getData(productId) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}
export default async function EditRoute({ params }) {
  const data = await getData(params.id);

  if (!data) {
    return notFound();
  }

  return <EditForm data={data} />;
}
