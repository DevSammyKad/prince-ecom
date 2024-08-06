import { Button } from '@/components/ui/button';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import prisma from '@/lib/db';

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}

export default async function BannerRoute() {
  const data = await getData();
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/banner/create">
            <PlusCircle /> Add Banner
          </Link>
        </Button>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Create Banner</CardTitle>
          <CardDescription>
            Create a banner to promote your products
          </CardDescription>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-semibold">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover w-16 h-16"
                        height={64}
                        src={item.imageString}
                        width={64}
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {/* <DropdownMenuItem>
                          <Link href={`/dashboard/products/${item.id}`}>
                            Edit
                          </Link>{' '}
                        </DropdownMenuItem> */}
                          <DropdownMenuItem>
                            <Link href={`/dashboard/banner/${item.id}/delete`}>
                              Delete
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
}
