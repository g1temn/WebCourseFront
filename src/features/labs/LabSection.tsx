import type { ReactNode } from "react";
import styles from "./LabSection.module.scss";

interface LabSectionProps {
  id: string;
  title: string;
  number?: number;
  tocLabel?: string;
  aside?: ReactNode;
  children: ReactNode;
}

export function LabSection({
  id,
  title,
  number,
  tocLabel,
  aside,
  children,
}: LabSectionProps) {
  return (
    <section
      id={id}
      data-toc={tocLabel ?? title}
      className={styles.section}
      aria-labelledby={`${id}-title`}
    >
      {number !== undefined && (
        <div className={styles.number}>Розділ {number}</div>
      )}
      <div className={styles.head}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {aside}
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

export function LabSubheading({ children }: { children: ReactNode }) {
  return <h3 className={styles.subheading}>{children}</h3>;
}
