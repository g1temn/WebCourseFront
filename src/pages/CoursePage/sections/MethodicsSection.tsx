import { Icon } from "@/components/ui/Icon";
import { methodics } from "@/static-content/site";
import styles from "./sections.module.scss";

export function MethodicsSection() {
  return (
    <section id="materials" className={styles.section} aria-labelledby="materials-title">
      <h2 id="materials-title" className={styles.title}>
        Методичні вказівки
      </h2>
      <div className={styles.methodics}>
        {methodics.map((item) => (
          <a key={item.file} href={item.file} download className={`${styles.pdf} ${styles[item.group]}`}>
            <span className={styles.pdfIcon}>PDF</span>
            <span className={styles.pdfText}>
              <b>{item.title}</b>
              <span>{item.description}</span>
            </span>
            <span className={styles.pdfAction}>
              <Icon name="download" size={18} />
              <span>Завантажити</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
