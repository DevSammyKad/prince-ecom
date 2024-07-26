'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';
import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UploadDropzone } from '@/lib/uploadthing';

const ProductCreateRoute = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              Lipsum dolor sit amet, consectetur adipiscing elit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue="Gamer Gear Pro Controller"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue="Write product description here"
                  className="min-h-32"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
            <CardDescription>
              Lipsum dolor sit amet, consectetur adipiscing elit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <div className="grid grid-cols-3 gap-2">
                <button>
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src="/placeholder.svg"
                    width="84"
                  />
                </button>
                <button>
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src="/placeholder.svg"
                    width="84"
                  />
                </button>
                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                  <Upload className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Upload</span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex w-full">
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              console.log(res, 'Upload completed');
            }}
            onUploadError={(err) => {
              console.log(err, 'Upload error');
            }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status" aria-label="Select status">
                  <SelectValue
                    defaultValue="draft"
                    placeholder="Select status"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCreateRoute;
