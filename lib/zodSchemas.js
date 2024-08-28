import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  shortDescription: z.string().min(1, 'Short Description cannot be empty'),
  description: z.string().min(1, 'Description cannot be empty'),
  status: z.enum(['draft', 'published']),
  price: z.number().min(1, 'Price should be greater than 0'),
  salePrice: z.number().min(1, 'Price should be greater than 0'),
  images: z.array(z.string()).min(1, 'Please provide atLeast one image'),
  category: z.enum(['men', 'women', 'kids']),
  isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
  title: z.string(),
  imageString: z.string(),
});
