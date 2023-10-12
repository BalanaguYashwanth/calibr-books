"use client";
import { SearchBarProps } from "@/utils/types";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onInputChange }: SearchBarProps) => {
  return (
    <main className={styles.container}>
      <input
        className={styles.inputStyles}
        onChange={(e) => onInputChange(e?.target?.value)}
      />
    </main>
  );
};

export default SearchBar;
