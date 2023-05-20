import { client, urlFor } from "@/cms/client";

import { Book } from "@/redux/features/Books/BooksSlice";
import styles from "../../../styles/Home.module.scss";
import Carousel from "./Carousel";
export const revalidate = 3600;
async function Featured() {
  const data = await client.fetch(`*[ _type== "product" ]`);
  if (!data) return <></>;
  let TopTrending = data.filter((book: any) => book.topTrending);
  let newReleases = data.filter((book: any) => book.newReleases);
  TopTrending = TopTrending.map((book: any) => {
    return {
      id: book._id,
      name: book.name,
      category: book.category,
      description: book.description,
      price: book.price,
      slug: book.slug.current,
      image: urlFor(book.image).url(),
      available: book.available,
      topTrending: book.topTrending,
      newReleases: book.newReleases,
      format: book.format,
      rating: book.rating,
    };
  });
  newReleases = newReleases.map((book: any) => {
    return {
      id: book._id,
      name: book.name,
      category: book.category,
      description: book.description,
      price: book.price,
      slug: book.slug.current,
      image: urlFor(book.image).url(),
      available: book.available,
      topTrending: book.topTrending,
      newReleases: book.newReleases,
      format: book.format,
      rating: book.rating,
    };
  });
  return (
    <div className={`${styles.featuredContainer}`}>
      <Carousel data={newReleases} title={"new releases"} />
      <Carousel data={TopTrending} title={"top trending"} />
    </div>
  );
}
export default Featured;
