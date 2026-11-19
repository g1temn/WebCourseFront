import type { ReactNode } from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  id?: string;
  onDark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  onDark,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={[styles.heading, onDark && styles.onDark, className]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </div>
  );
}
