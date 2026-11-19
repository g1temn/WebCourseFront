import { renderRich } from "@/components/common/renderRich";
import styles from "./Goals.module.scss";

export function Goals({
  items,
  title = "Мета роботи",
}: {
  items: string[];
  title?: string;
}) {
  return (
    <section
      id="goal"
      data-toc={title}
      className={styles.goals}
      aria-labelledby="goal-title"
    >
      <h2 id="goal-title" className={styles.title}>
        {title}
      </h2>
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={item}>
            <span className={styles.number}>{i + 1}</span>
            <span>{renderRich(item)}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
