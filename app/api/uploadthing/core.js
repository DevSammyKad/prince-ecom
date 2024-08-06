// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { createUploadthing } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 4 } })
    // Set permissions and file types for this FileRoute
    // .middleware(async ({ req }) => {
    //   const { getUser } = getKindeServerSession();
    //   const user = await getUser();
    //   // If you throw, the user will not be able to upload
    //   if (!user || user.email !== 'princeglow.india@gmail.com')
    //     throw new UploadThingError('Unauthorized');

    //   // Whatever is returned here is accessible in onUploadComplete as `metadata`
    //   return { userId: user.id };
    // })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId);

      console.log('file url', file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),

  // Define as many FileRoutes as you like, each with a unique routeSlug
  bannerImageRoute: f({ image: { maxFileSize: '5MB', maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    // .middleware(async ({ req }) => {
    //   const { getUser } = getKindeServerSession();
    //   const user = await getUser();
    //   // If you throw, the user will not be able to upload
    //   if (!user || user.email !== 'princeglow.india@gmail.com')
    //     throw new UploadThingError('Unauthorized');

    //   // Whatever is returned here is accessible in onUploadComplete as `metadata`
    //   return { userId: user.id };
    // })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId);

      console.log('file url', file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
};
