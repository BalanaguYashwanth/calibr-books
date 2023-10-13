"use client";
import { SearchBarProps } from "@/utils/types";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onInputChange }: SearchBarProps) => {
  let handleTimeOut: string | number | NodeJS.Timeout | undefined;

  const handleDebounce = (text: string) => {
    clearTimeout(handleTimeOut);
    handleTimeOut = setTimeout(() => {
      onInputChange(text);
    }, 1000);
  };

  return (
    <main className={styles.container}>
      <input
        className={styles.inputStyles}
        onChange={(e) => handleDebounce(e?.target?.value)}
      />
    </main>
  );
};

export default SearchBar;
