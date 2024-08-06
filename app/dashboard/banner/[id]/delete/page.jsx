import { deleteBanner } from '@/app/actions';
import SubmitButton from '@/app/components/dashboard/SubmitButton';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';

export default function DeleteBanner({ params }) {
  return (
    <div className="h-[80vh] flex justify-center items-center w-full">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutely sure ?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete this
            Banner and all data from server.
          </CardDescription>
          <CardFooter className="justify-end flex gap-3 items-center">
            <Button variant="outline" className="">
              <Link href="/dashboard/banner">Cancel</Link>
            </Button>
            <form action={deleteBanner}>
              <input type="hidden" name="bannerId" value={params.id} />
              <SubmitButton text={'Delete Banner'} variant="destructive" />
            </form>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
