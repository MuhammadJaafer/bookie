import { client } from "@/cms/client";

import styles from "../../../styles/Home.module.scss";
import Carousel from "./Carousel";
export const revalidate = 3600;
async function Featured() {
  const data = await client.fetch(`*[ _type== "product" ]`);
  if (!data) return <></>;
  const TopTrending = data.filter((book: any) => book.topTrending);
  const newReleases = data.filter((book: any) => book.newReleases);
  return (
    <div className={`${styles.featuredContainer}`}>
      <Carousel data={newReleases} title={"new releases"} />
      <Carousel data={TopTrending} title={"top trending"} />
    </div>
  );
}
export default Featured;
