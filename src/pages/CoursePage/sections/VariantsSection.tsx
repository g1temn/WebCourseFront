import { useState } from "react";
import { variants, VARIANTS_INITIAL_COUNT } from "@/static-content/course";
import styles from "./sections.module.scss";

export function VariantsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? variants : variants.slice(0, VARIANTS_INITIAL_COUNT);
  const hidden = variants.length - VARIANTS_INITIAL_COUNT;

  return (
    <section id="variants" className={styles.section} aria-labelledby="variants-title">
      <h2 id="variants-title" className={styles.title}>
        Варіанти завдань для самостійної роботи
      </h2>
      <p className={styles.subtitle}>Частина варіантів зі збірника лабораторних робіт. Повний перелік надає викладач.</p>
      <ol className={styles.variants}>
        {visible.map((variant, i) => (
          <li key={variant} className={styles.variant}>
            <span>{i + 1}</span>
            {variant}
          </li>
        ))}
      </ol>
      {hidden > 0 && (
        <button type="button" className={styles.more} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Згорнути" : `Показати ще ${hidden}`}
        </button>
      )}
    </section>
  );
}
