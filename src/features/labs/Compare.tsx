import type { ReactNode } from "react";
import { renderRich } from "@/components/common/renderRich";
import { CodeBlock } from "./CodeBlock";
import type { CodeLang } from "./highlight";
import styles from "./Compare.module.scss";

export interface CompareItem {
  title: string;
  code?: string;
  lang?: CodeLang;
  points?: string[];
  text?: ReactNode;
  tone?: "plus" | "minus";
}

export function Compare({
  items,
  columns,
}: {
  items: CompareItem[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`${styles.grid} ${columns === 2 ? styles.two : ""}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className={`${styles.card} ${item.tone ? styles[item.tone] : ""}`}
        >
          <div className={styles.title}>{renderRich(item.title)}</div>
          {item.code && <CodeBlock code={item.code} lang={item.lang} small />}
          {(item.points || item.text) && (
            <div className={styles.body}>
              {item.text}
              {item.points && (
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{renderRich(point)}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
