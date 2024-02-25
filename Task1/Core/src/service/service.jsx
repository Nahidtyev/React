import sanityClient from "@sanity/client"
import imageurlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: 'chorwf2l',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})
const builder = imageurlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};