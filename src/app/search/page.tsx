"use client";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import styles from "../../styles/search.module.scss";
import { searchBooks } from "@/utils/action.api";
import Card from "@/components/Card";
import { BookProps } from "@/utils/types";
import { CONTENTS } from "@/utils/constants";
import toast, { Toaster } from "react-hot-toast";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const onInputChange = async (text: string) => {
    try {
      setLoading(true);
      setSearchInput(text);
      setSearchResults([]);
      const response = await searchBooks(text);
      setSearchResults(response?.data?.response || []);
    } catch (error) {
      const typeError = error as Error;
      toast.error(typeError?.message || CONTENTS.SOMETHING_WENT_WRONG);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <Toaster />
      <section>
        <h1>{CONTENTS.SEARCH}</h1>
      </section>
        <SearchBar onInputChange={onInputChange} />
      {searchResults.length > 0 ? (
        <section className={styles.grid}>
          {searchResults?.map((item: BookProps, index) => (
            <Card
              title={item["_source"]?.title as string}
              key={`searchbook-${index}`}
            />
          ))}
        </section>
      ) : (
        <section>
          {!loading && searchInput && <p>{CONTENTS.NO_RESULT_FOUND}</p>}
        </section>
      )}
      {loading && <p>{CONTENTS.LOADING}</p>}
    </main>
  );
};

export default Search;
