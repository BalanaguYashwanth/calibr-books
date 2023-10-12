import styles from "./Pagination.module.scss";
import { PaginationProps } from "@/utils/types";
import { CONTENTS } from "@/utils/constants";

const Pagination = ({ prev, prevValue, nextValue, next }: PaginationProps) => {
  return (
    <main className={styles.container}>
      <button onClick={prev}>{CONTENTS.PREV}</button>
      <button onClick={next}>{CONTENTS.NEXT}</button>
      <p className={styles.fs80}>
        {prevValue} - {nextValue}
      </p>
    </main>
  );
};

export default Pagination;