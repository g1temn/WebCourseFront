import type { ReactNode } from "react";
import { Icon } from "./Icon";
import styles from "./Accordion.module.scss";

interface AccordionItemProps {
  summary: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function AccordionItem({
  summary,
  defaultOpen,
  children,
}: AccordionItemProps) {
  return (
    <details className={styles.item} open={defaultOpen}>
      <summary className={styles.summary}>
        <span className={styles.question}>{summary}</span>
        <Icon name="chevronDown" size={20} className={styles.chevron} />
      </summary>
      <div className={styles.answer}>{children}</div>
    </details>
  );
}
