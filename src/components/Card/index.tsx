import Image from "next/image";
import { getRandomImage, shortTitle } from "@/utils/helpers";
import { BookProps } from "@/utils/types";
import styles from "./Card.module.scss";

const Card = ({ title }: BookProps) => {
  return (
    <main>
      <section className={styles.container}>
        <Image
          className={styles.imageStyles}
          src={getRandomImage()}
          alt={`${title} cover`}
          height={300}
          width={175}
        />
        <p> {shortTitle({ title, limit: 15 })} </p>
      </section>
    </main>
  );
};

export default Card;
