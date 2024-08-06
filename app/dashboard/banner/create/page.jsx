'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { UploadDropzone } from '@/lib/uploadthing';
import SubmitButton from '@/app/components/dashboard/SubmitButton';

import { createBanner } from '@/app/actions';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { bannerSchema } from '@/lib/zodSchemas';
import { useFormState } from 'react-dom';
import Image from 'next/image';

export default function BannerRoute() {
  const [image, setImage] = useState([]);
  const [lastResult, action] = useFormState(createBanner, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft />
          </Link>
        </Button>
        <h1>New Product</h1>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Create Banner</CardTitle>
          <CardDescription>
            Create a banner to promote your products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Label>Banner Name</Label>
              <Input
                type="text"
                key={fields.title.key}
                name={fields.title.name}
                defaultValue={fields.title.initialValue}
                placeholder="Enter Banner name here "
              />
              <p className="text-red-500 text-sm">{fields.title.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Image</Label>
              <input
                type="hidden"
                key={fields.imageString.key}
                name={fields.imageString.name}
                defaultValue={fields.imageString.initialValue}
                value={image || '/placeholder.jpg'}
              />
              {image == undefined ? (
                <>
                  <Image
                    value={image || '/placeholder.jpg'}
                    width={200}
                    height={180}
                    alt="Product Image"
                    className="w-[100px] h-[100px] object-cover border rounded-lg p-5"
                  />
                </>
              ) : (
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    const uploadImage = res[0].url;
                    setImage(uploadImage);
                    console.log(res, 'Upload Completed');
                  }}
                  onUploadError={() => {
                    alert('Something went Wrong in Banner ');
                  }}
                  endpoint="bannerImageRoute"
                />
              )}

              <p className="text-red-500 text-sm">
                {fields.imageString.errors}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-start justify-start border-t p-4">
          <SubmitButton text={'Create'} />
        </CardFooter>
      </Card>
    </form>
  );
}
