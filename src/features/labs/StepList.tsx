import { useState, type ReactNode } from "react";
import { renderRich } from "@/components/common/renderRich";
import { plural } from "@/static-content/labs";
import { CodeBlock } from "./CodeBlock";
import { Figure } from "./Figure";
import type { CodeLang } from "./highlight";
import { useStepProgress } from "./useStepProgress";
import styles from "./StepList.module.scss";

export interface Step {
  text: string;
  code?: string;
  lang?: CodeLang;
  note?: string;
  image?: { src: string; alt: string; caption?: string };
}

interface StepListProps {
  slug: string;
  steps: Step[];
  initial?: number;
  title?: string;
  id?: string;
  intro?: ReactNode;
}

export function StepList({
  slug,
  steps,
  initial = 7,
  title = "Хід роботи",
  id = "steps",
  intro,
}: StepListProps) {
  const { done, toggle } = useStepProgress(`${slug}:${id}`);
  const [showAll, setShowAll] = useState(false);
  const doneCount = done.filter((i) => i < steps.length).length;
  const visible = showAll ? steps : steps.slice(0, initial);
  const hidden = steps.length - visible.length;
  const firstOpen = steps.findIndex((_, i) => !done.includes(i));

  return (
    <section
      id={id}
      data-toc={title}
      className={styles.section}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.head}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        <span className={styles.counter}>
          Виконано{" "}
          <b>
            {doneCount} з {steps.length}
          </b>
        </span>
      </div>
      {intro && <div className={styles.intro}>{intro}</div>}
      <div
        className={styles.progress}
        role="progressbar"
        aria-label="Прогрес виконання роботи"
        aria-valuemin={0}
        aria-valuemax={steps.length}
        aria-valuenow={doneCount}
      >
        <div
          className={styles.bar}
          style={{ width: `${(doneCount / steps.length) * 100}%` }}
        />
      </div>
      <ol className={styles.list}>
        {visible.map((step, i) => {
          const checked = done.includes(i);
          return (
            <li
              key={i}
              className={`${styles.step} ${i === firstOpen ? styles.current : ""}`}
            >
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(i)}
                />
                <span className={checked ? styles.doneText : undefined}>
                  {i + 1}. {renderRich(step.text)}
                </span>
              </label>
              {(step.code || step.note || step.image) && (
                <div className={styles.extra}>
                  {step.code && (
                    <div className={styles.code}>
                      <CodeBlock
                        code={step.code}
                        lang={step.lang ?? "html"}
                        small
                      />
                    </div>
                  )}
                  {step.note && (
                    <p className={styles.note}>{renderRich(step.note)}</p>
                  )}
                  {step.image && (
                    <Figure
                      src={step.image.src}
                      alt={step.image.alt}
                      caption={step.image.caption}
                    />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {hidden > 0 && (
        <button
          type="button"
          className={styles.more}
          onClick={() => setShowAll(true)}
        >
          Показати ще {hidden} {plural(hidden, "крок", "кроки", "кроків")}
        </button>
      )}
    </section>
  );
}
