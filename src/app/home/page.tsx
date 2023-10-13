"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { BookProps } from "@/utils/types";
import Card from "@/components/Card";
import { fetchAllBooks } from "@/utils/action.api";
import styles from "../../styles/home.module.scss";
import Pagination from "@/components/Pagination";
import { CONTENTS, LOADER, PAGINATION_LIMIT } from "@/utils/constants";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [nextValue, setNextValue] = useState(PAGINATION_LIMIT);
  const [prevValue, setPrevValue] = useState(0);
  const [booksCount, setBooksCount] = useState(PAGINATION_LIMIT);
  const [loader, setLoader] = useState(false);

  const getAllBooks = async () => {
    try {
      setLoader(true);
      const result = await fetchAllBooks({
        skip: prevValue,
        limit: PAGINATION_LIMIT,
      });
      const data = result?.data?.response;
      const count = result?.data?.count;
      setBooks(data);
      setBooksCount(count);
    } catch (error) {
      const typeError = error as Error;
      toast.error(typeError?.message || CONTENTS.SOMETHING_WENT_WRONG);
    } finally {
      setLoader(false);
    }
  };

  const prevFn = () => {
    if (prevValue > 0) {
      setPrevValue((prev) => prev - PAGINATION_LIMIT);
      setNextValue((prev) => prev - PAGINATION_LIMIT);
    }
  };

  const nextFn = () => {
    if (nextValue < booksCount) {
      setPrevValue((prev) => prev + PAGINATION_LIMIT);
      setNextValue((prev) => prev + PAGINATION_LIMIT);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    getAllBooks();
  }, [prevValue]);

  return (
    <main className={styles.container}>
      <Toaster />
      <section className={styles.horizontalCenter}>
        <Link className={styles.alignEnd} href="/search">
          {CONTENTS.SEARCH}
          {" -> "}
        </Link>
        <h1 className={styles.headline}>{CONTENTS.BOOK_LIST}</h1>
      </section>
      {books?.length > 0 ? (
        <>
          <section className={styles.cards}>
            {books?.map((book: BookProps, index) => (
              <Card key={`card-${index}`} title={book?.title} />
            ))}
          </section>
          <Pagination
            next={nextFn}
            prev={prevFn}
            prevValue={prevValue}
            nextValue={nextValue}
          />
        </>
      ) : (
        loader && <Image src={LOADER} alt="loader" width="100" height={"100"} />
      )}
    </main>
  );
};
export default Home;
