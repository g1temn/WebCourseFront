import { Icon } from "@/components/ui/Icon";
import { useCopy } from "@/components/common/useCopy";
import { CodeBlock } from "./CodeBlock";
import { Figure, type FigureProps } from "./Figure";
import type { CodeLang } from "./highlight";
import styles from "./CodeListing.module.scss";

interface CodeListingProps {
  title: string;
  file?: string;
  lang?: CodeLang;
  code: string;
  result?: FigureProps;
}

export function CodeListing({
  title,
  file,
  lang = "html",
  code,
  result,
}: CodeListingProps) {
  const { copied, copy } = useCopy();
  return (
    <div className={styles.listing}>
      <div className={styles.head}>
        <span className={styles.caption}>
          <b>{title}</b>
          {file && <> · {file}</>}
        </span>
        <button
          type="button"
          className={`${styles.copy} ${copied ? styles.copied : ""}`}
          onClick={() => copy(code)}
          aria-label={copied ? "Скопійовано" : `Копіювати код: ${title}`}
        >
          <Icon name={copied ? "check" : "copy"} size={14} />
          {copied ? "Скопійовано" : "Копіювати"}
        </button>
      </div>
      <CodeBlock code={code} lang={lang} />
      {result && (
        <div className={styles.result}>
          <Figure {...result} inline natural />
        </div>
      )}
    </div>
  );
}
