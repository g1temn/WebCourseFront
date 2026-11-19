import { Link } from "react-router";
import { labNeighbours, labShortLabel } from "@/static-content/labs";
import styles from "./PrevNext.module.scss";

export function PrevNext({ slug }: { slug: string }) {
  const { prev, next } = labNeighbours(slug);
  return (
    <nav aria-label="Сусідні лабораторні роботи" className={styles.nav}>
      {prev ? (
        <Link to={`/labs/${prev.slug}`} className={styles.card}>
          <span className={styles.label}>
            ← Попередня · {labShortLabel(prev)}
          </span>
          <b>{prev.title}</b>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          to={`/labs/${next.slug}`}
          className={`${styles.card} ${styles.next}`}
        >
          <span className={styles.label}>
            Наступна · {labShortLabel(next)} →
          </span>
          <b>{next.title}</b>
        </Link>
      )}
    </nav>
  );
}
