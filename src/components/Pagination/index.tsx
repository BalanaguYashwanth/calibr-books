import styles from "./Pagination.module.scss";
import { PaginationProps } from "@/utils/types";

const Pagination = ({ prev, prevValue, nextValue, next }: PaginationProps) => {
  return (
    <main className={styles.container}>
      <button onClick={prev}>
       <i className="fa-solid fa-angle-left"></i>
       </button>
       <button  onClick={next}>
       <i className="fa-solid fa-angle-right"></i>
       </button>
      <p className={styles.fs60}>
        {prevValue} - {nextValue}
      </p>
    </main>
  );
};

export default Pagination;