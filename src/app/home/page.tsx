"use client";
import { useEffect, useState } from "react";
import { BookProps } from "@/utils/types";
import Card from "@/components/Card";
import { fetchAllBooks } from "@/utils/action.api";
import styles from "../../styles/home.module.scss";
import Pagination from "@/components/Pagination";
import { CONTENTS, PAGINATION_LIMIT } from "@/utils/constants";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [paginatedBooks, setPaginatedBooks] = useState([]);
  const [nextValue, setNextValue] = useState(PAGINATION_LIMIT);
  const [prevValue, setPrevValue] = useState(0);

  const getAllBooks = async () => {
    const result = await fetchAllBooks();
    setBooks(result?.data);
    setPaginatedBooks(result?.data?.slice(prevValue, nextValue));
  };

  const prevFn = () => {
    if (prevValue > 0) {
      setPrevValue((prev) => prev - PAGINATION_LIMIT);
      setNextValue((prev) => prev - PAGINATION_LIMIT);
    }
  };

  const nextFn = () => {
    if (nextValue < books.length) {
      setPrevValue((prev) => prev + PAGINATION_LIMIT);
      setNextValue((prev) => prev + PAGINATION_LIMIT);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    setPaginatedBooks(books?.slice(prevValue, nextValue));
  }, [prevValue, nextValue]);

  return (
    <main className={styles.container}>
      <section>
        <h1 className={styles.headline}>{CONTENTS.BOOK_LIST}</h1>
      </section>
      <section className={styles.cards}>
        {paginatedBooks.map((book: BookProps, index) => (
          <Card key={`card-${index}`} title={book?.title} />
        ))}
      </section>
      {books?.length > 0 && (
        <Pagination
          next={nextFn}
          prev={prevFn}
          prevValue={prevValue}
          nextValue={nextValue}
        />
      )}
    </main>
  );
};
export default Home;