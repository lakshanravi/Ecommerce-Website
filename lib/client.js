//connect sanity with frontend
//below ones use for create a client to connect sanity with frontend
import  SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: 'unocodwo',
  dataset: 'production',
  apiVersion: "2025-04-20",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source); //this function is used to get the image from sanity and use it in frontend