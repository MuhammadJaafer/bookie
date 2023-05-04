import BookMonth from "@/components/Home/BookOfTheMonth/BookMonth";
import Hero from "@/components/Home/Hero/Hero";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import {
  default as Carousel,
  default as NewReleases,
} from "@/components/Home/featured/Carousel";
import Featured from "@/components/Home/featured/Featured";
import { Inter } from "next/font/google";
import Image from "next/image";
import "../styles/GlobalStyles.scss";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <BookMonth />
      {/* @ts-expect-error Async Server Component */}
      <Featured />
      <Testimonial />
    </main>
  );
}
