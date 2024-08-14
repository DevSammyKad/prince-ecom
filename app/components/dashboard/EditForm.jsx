'use client';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

import { ChevronLeft, Upload, XIcon, PlusCircle } from 'lucide-react';

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
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { categories } from '@/lib/categories';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { editProduct } from '@/app/actions';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from '@/lib/zodSchemas';
import { useForm } from '@conform-to/react';
import { UploadDropzone } from '@/lib/uploadthing';
import SubmitButton from '@/app/components/dashboard/SubmitButton';

export default function EditForm({ data }) {
  const [images, setImages] = useState(data.images);
  const [lastResult, action] = useFormState(editProduct, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <input type="hidden" name="productId" value={data.id} />
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft />
          </Link>
        </Button>
        <h1>Edit Product</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 my-5  ">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>Update product details here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  key={fields.name.key}
                  name={fields.name.name}
                  defaultValue={data.name}
                  type="text"
                  className="w-full"
                  placeholder="Gamer Gear Pro Controller"
                />
                <p className="text-red-500 text-sm">{fields.name.errors}</p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  key={fields.description.key}
                  name={fields.description.name}
                  defaultValue={data.description}
                  className="min-h-32"
                  placeholder="Write your product description here"
                />
                <p className="text-red-500 text-sm">
                  {fields.description.errors}
                </p>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="grid gap-3">
                  <Label>Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Actual Price"
                    key={fields.price.key}
                    name={fields.price.name}
                    defaultValue={data.price}
                  />
                  <p className="text-red-500 text-sm">{fields.price.errors}</p>
                </div>
                <div className="grid gap-3">
                  <Label>Sale Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Sale Price"
                    key={fields.salePrice.key}
                    name={fields.salePrice.name}
                    defaultValue={data.salePrice}
                  />
                  <p className="text-red-500 text-sm">
                    {fields.salePrice.errors}
                  </p>
                </div>
              </div>

              <div className="grid  gap-3">
                <Label>Feature Product</Label>
                <Switch
                  key={fields.isFeatured.key}
                  name={fields.isFeatured.name}
                  defaultValue={data.isFeatured}
                  defaultChecked={data.isFeatured}
                />
                <p className="text-red-500 text-sm">
                  {fields.isFeatured.errors}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
            <CardDescription>Upload AtLeast 1 image</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="300"
                src={images[0] || '/placeholder.jpg'}
                width="300"
              />
              <div className="grid grid-cols-3 gap-2">
                <button>
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={images[1] || '/placeholder.jpg'}
                    width="84"
                  />
                </button>
                <button>
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={images[2] || '/placeholder.jpg'}
                    width="84"
                  />
                </button>
                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <span className="sr-only">Upload</span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-3">
        <Label>Images</Label>
        <input
          type="hidden"
          value={images}
          key={fields.images.key}
          name={fields.images.name}
          defaultValue={fields.images.initialValue}
        />
        {images.length > 0 ? (
          <div className="flex gap-5">
            {images.map((image, index) => (
              <div key={index} className=" relative w-[100px] h-[100px]">
                <Image
                  height={100}
                  width={100}
                  src={image}
                  alt="product image"
                  className="w-full p-2 h-full object-cover rounded-lg border"
                />

                <Button
                  onClick={() => handleDeleteImage(index)}
                  size="icon"
                  className="absolute -right-3 w-7 h-7  -top-3  bg-red-500 rounded-lg"
                >
                  <XIcon className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              console.log(res, 'Upload completed');
              setImages(res.map((r) => r.url));
            }}
            onUploadError={(err) => {
              console.log(err, 'Upload error');
              alert('something went wrong');
            }}
          />
        )}
        <p className="text-sm text-red-500">{fields.images.errors}</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 my-5">
        <Card className="col-span-2  cursor-pointer">
          <CardHeader>
            <CardTitle>Stock</CardTitle>
            <CardDescription>
              Manage stock as per your product variants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">SKU</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="w-[100px]">Size</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="filter hover:blur-sm backdrop-filter backdrop-blur-lg bg-white  transition-all duration-300">
                <TableRow>
                  <TableCell className="font-semibold">GGPC-001</TableCell>
                  <TableCell>
                    <Label htmlFor="stock-1" className="sr-only">
                      Stock
                    </Label>
                    <Input id="stock-1" type="number" defaultValue="100" />
                  </TableCell>
                  <TableCell>
                    <Label htmlFor="price-1" className="sr-only">
                      Price
                    </Label>
                    <Input id="price-1" type="number" defaultValue="99.99" />
                  </TableCell>
                  <TableCell>
                    <ToggleGroup
                      type="single"
                      defaultValue="s"
                      variant="outline"
                    >
                      <ToggleGroupItem value="s">S</ToggleGroupItem>
                      <ToggleGroupItem value="m">M</ToggleGroupItem>
                      <ToggleGroupItem value="l">L</ToggleGroupItem>
                    </ToggleGroup>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">GGPC-002</TableCell>
                  <TableCell>
                    <Label htmlFor="stock-2" className="sr-only">
                      Stock
                    </Label>
                    <Input id="stock-2" type="number" defaultValue="143" />
                  </TableCell>
                  <TableCell>
                    <Label htmlFor="price-2" className="sr-only">
                      Price
                    </Label>
                    <Input id="price-2" type="number" defaultValue="99.99" />
                  </TableCell>
                  <TableCell>
                    <ToggleGroup
                      type="single"
                      defaultValue="m"
                      variant="outline"
                    >
                      <ToggleGroupItem value="s">S</ToggleGroupItem>
                      <ToggleGroupItem value="m">M</ToggleGroupItem>
                      <ToggleGroupItem value="l">L</ToggleGroupItem>
                    </ToggleGroup>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">GGPC-003</TableCell>
                  <TableCell>
                    <Label htmlFor="stock-3" className="sr-only">
                      Stock
                    </Label>
                    <Input id="stock-3" type="number" defaultValue="32" />
                  </TableCell>
                  <TableCell>
                    <Label htmlFor="price-3" className="sr-only">
                      Stock
                    </Label>
                    <Input id="price-3" type="number" defaultValue="99.99" />
                  </TableCell>
                  <TableCell>
                    <ToggleGroup
                      type="single"
                      defaultValue="s"
                      variant="outline"
                    >
                      <ToggleGroupItem value="s">S</ToggleGroupItem>
                      <ToggleGroupItem value="m">M</ToggleGroupItem>
                      <ToggleGroupItem value="l">L</ToggleGroupItem>
                    </ToggleGroup>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-center border-t p-4">
            <Button size="sm" variant="ghost" className="gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              Add Variant
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <div className="grid gap-3">
                <Label htmlFor="status">Status</Label>
                <Select
                  key={fields.status.key}
                  name={fields.status.name}
                  defaultValue={data.status}
                >
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
                <p className="text-red-500 text-sm">{fields.status.errors}</p>
              </div>

              <div className="grid gap-3 my-3">
                <Label htmlFor="category">Category</Label>
                <Select
                  key={fields.category.key}
                  name={fields.category.name}
                  defaultValue={data.category}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-red-500 text-sm">{fields.category.errors}</p>
              </div>
              <div className="grid gap-3 my-3">
                <Label htmlFor="subcategory">Subcategory (optional)</Label>
                <Select>
                  <SelectTrigger
                    id="subcategory"
                    aria-label="Select subcategory"
                  >
                    <SelectValue placeholder="Select subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="t-shirts">T-Shirts</SelectItem>
                    <SelectItem value="hoodies">Hoodies</SelectItem>
                    <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <SubmitButton text={data.id ? 'Edit' : 'Create'} />
    </form>
  );
}
