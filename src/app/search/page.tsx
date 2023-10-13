"use client";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import styles from "../../styles/search.module.scss";
import { searchBooks } from "@/utils/action.api";
import Card from "@/components/Card";
import { BookProps } from "@/utils/types";
import { CONTENTS } from "@/utils/constants";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onInputChange = async (text: string) => {
    const response = await searchBooks(text);
    setSearchResults(response?.data?.response || []);
  };

  return (
    <main className={styles.container}>
      <section>
        <h1>{CONTENTS.SEARCH}</h1>
      </section>
      <section>
        <SearchBar onInputChange={onInputChange} />
      </section>
      {searchResults.length > 0 && (
        <section className={styles.grid}>
          {searchResults?.map((item: BookProps, index) => (
            <Card
              title={item["_source"]?.title as string}
              key={`searchbook-${index}`}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default Search;
