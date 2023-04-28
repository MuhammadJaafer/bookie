import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "kk6954gi",
  dataset: "production",
  apiVersion: "2023-04-28",
  useCdn: false,
  token: `skFU8XxNLdswVMQ1nSHXfX9zAllalpEDK21O4x4llkoVQACTucIpaAmfT6UhUi67yWs1I38iSagLeGff5jXlIht2ay5FXepAEMDp4O4hF3oqifaevGvRglYp2FKo0vWLADYof7TQCjnIBuDO2ZIuyQRFmplLsSOB5onyhYnRskdRqgrOVmCf`,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
