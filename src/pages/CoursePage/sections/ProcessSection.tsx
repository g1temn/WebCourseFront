import { process } from "@/static-content/course";
import styles from "./sections.module.scss";

export function ProcessSection() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-title">
      <h2 id="process-title" className={styles.title}>
        Порядок виконання лабораторної роботи
      </h2>
      <ol className={styles.process}>
        {process.map((step, i) => (
          <li key={step.title} className={`${styles.step} ${i === process.length - 1 ? styles.stepLast : ""}`}>
            <span className={styles.stepNumber}>{i + 1}</span>
            <b>{step.title}</b>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
