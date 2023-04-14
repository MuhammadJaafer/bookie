import Image from "next/image";
import { Inter } from "next/font/google";
import "../styles/GlobalStyles.scss";
import Hero from "@/components/Home/Hero/Hero";
import BookMonth from "@/components/Home/BookOfTheMonth/BookMonth";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <BookMonth />
    </main>
  );
}
