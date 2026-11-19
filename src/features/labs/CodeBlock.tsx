import { highlight, type CodeLang } from "./highlight";
import styles from "./CodeBlock.module.scss";

export function CodeBlock({
  code,
  lang = "html",
  small,
}: {
  code: string;
  lang?: CodeLang;
  small?: boolean;
}) {
  return (
    <pre className={`${styles.pre} ${small ? styles.small : ""}`}>
      <code>{highlight(code.replace(/\n$/, ""), lang)}</code>
    </pre>
  );
}
