import { useCopy } from "@/components/common/useCopy";
import { Icon } from "@/components/ui/Icon";
import { labFileUrl } from "@/static-content/labs";
import type { LabFile, LabMeta } from "@/static-content/types";
import { LabSection } from "./LabSection";
import styles from "./LabFiles.module.scss";

function FileCard({
  slug,
  file,
  canCopy,
}: {
  slug: string;
  file: LabFile;
  canCopy: boolean;
}) {
  const { copied, copy } = useCopy();
  const url = labFileUrl(slug, file.name);
  const fullUrl = `${window.location.origin}${url}`;

  return (
    <div className={styles.card}>
      {file.kind === "image" ? (
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className={styles.thumb}
          aria-label={`Відкрити ${file.name}`}
        >
          <img src={url} alt="" loading="lazy" />
        </a>
      ) : (
        <span className={`${styles.thumb} ${styles.txt}`}>TXT</span>
      )}
      <div className={styles.body}>
        <span className={styles.name}>
          {file.label && <span className={styles.label}>{file.label}</span>}
          <span className={file.label ? styles.fileSmall : styles.file}>
            {file.name}
          </span>
        </span>
        <div className={styles.actions}>
          {file.kind === "image" && canCopy && (
            <button
              type="button"
              className={`${styles.copy} ${copied ? styles.copied : ""}`}
              onClick={() => copy(fullUrl)}
            >
              <Icon
                name={copied ? "check" : "link"}
                size={15}
                strokeWidth={copied ? 2.4 : 2}
              />
              {copied ? "Скопійовано" : "Копіювати посилання"}
            </button>
          )}
          {file.kind === "image" ? (
            <a
              href={url}
              download
              className={styles.download}
              aria-label={`Завантажити ${file.name}`}
            >
              <Icon name="download" size={16} />
            </a>
          ) : (
            <a href={url} download className={styles.downloadWide}>
              <Icon name="download" size={15} />
              Завантажити
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function LabFiles({ lab }: { lab: LabMeta }) {
  if (lab.files.length === 0) return null;
  return (
    <LabSection id="files" title="Файли до роботи">
      {lab.hasEditor && (
        <p className={styles.hint}>
          <Icon name="link" size={15} className={styles.hintIcon} />
          <span>
            <b>Зображення для редактора.</b> «Копіювати посилання» кладе в буфер
            повну адресу файлу, наприклад{" "}
            <code>
              https://…/labs/{lab.slug}/files/
              {lab.files.find((f) => f.kind === "image")?.name}
            </code>
            . Вставте її в атрибут <code>src</code> — зображення відобразиться в
            результаті.
          </span>
        </p>
      )}
      <div className={styles.grid}>
        {lab.files.map((file) => (
          <FileCard
            key={file.name}
            slug={lab.slug}
            file={file}
            canCopy={lab.hasEditor}
          />
        ))}
      </div>
    </LabSection>
  );
}
