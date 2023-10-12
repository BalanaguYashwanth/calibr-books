import Image from "next/image";
import { getRandomImage } from "@/utils/helpers";
import { BookProps } from "@/utils/types";
import styles from "./Card.module.scss";

const Card = ({ title }: BookProps) => {
  return (
    <main>
      <section className={styles.container}>
        <Image
          className={styles.imageStyles}
          src={getRandomImage()}
          alt="cover"
          height={300}
          width={150}
        />
        <p> {title} </p>
      </section>
    </main>
  );
};

export default Card;
