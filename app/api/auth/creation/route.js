import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';

export default async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error('Something went wrong on Creation');
  }

  const dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (dbUser) {
    return {
      status: 200,
      body: {
        message: 'User already exists',
      },
    };
  }

  await db.user.create({
    data: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  return {
    status: 200,
    body: {
      message: 'User created successfully',
    },
  };
}
