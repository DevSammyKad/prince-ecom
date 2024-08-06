import prisma from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
      console.error('User not found or missing ID');
      return new NextResponse('User not found', { status: 404 });
    }

    console.log('Retrieved user:', user);

    let dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    console.log('Database user:', dbUser);

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? '',
          lastName: user.family_name ?? '',
          email: user.email ?? '',
          profileImage:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });

      console.log('Created new user:', dbUser);
    }

    // return new NextResponse(JSON.stringify(dbUser), { status: 200 });
    return NextResponse.redirect('http://localhost:3000');
  } catch (error) {
    console.error('Error during GET:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
