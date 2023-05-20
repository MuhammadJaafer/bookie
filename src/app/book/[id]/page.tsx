"use client";
import { client } from "@/cms/client";
import BookPage from "@/components/Book/BookPage";
import useBooks from "@/hooks/useBooks";
import { Book } from "@/redux/features/Books/BooksSlice";
import { useRouter } from "next/router";
import React from "react";

type pageProps = {
  params: { slug: string };
};

const page = async ({ params }: { params: { id: string } }) => {
  const book: Book[] = await client.fetch(
    `*[ _type== "product" && _id == "${params.id}" ] `
  );
  return (
    <>
      <BookPage book={book[0]} />
    </>
  );
};
export default page;
