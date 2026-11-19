import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { plural } from "@/static-content/labs";
import styles from "./PreviewPane.module.scss";

export interface ConsoleMessage {
  id: number;
  level: "log" | "info" | "warn" | "error";
  text: string;
}

interface PreviewPaneProps {
  src?: string;
  srcDoc?: string;
  currentPage: string;
  onNavigate: (path: string) => void;
  onReload: () => void;
  messages: ConsoleMessage[];
  onClearConsole: () => void;
  base: string;
}

export function PreviewPane({ src, srcDoc, currentPage, onNavigate, onReload, messages, onClearConsole, base }: PreviewPaneProps) {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const errors = messages.filter((m) => m.level === "error").length;

  const onLoad = () => {
    try {
      const path = frame.current?.contentWindow?.location.pathname ?? "";
      if (path.startsWith(base)) onNavigate(decodeURIComponent(path.slice(base.length)) || "index.html");
    } catch {
      return;
    }
  };

  const [prevErrors, setPrevErrors] = useState(errors);
  if (prevErrors !== errors) {
    setPrevErrors(errors);
    if (errors > prevErrors) setConsoleOpen(true);
  }

  return (
    <section aria-label="Результат" className={styles.pane}>
      <div className={styles.head}>
        <b>Результат</b>
        <span className={styles.page} title={currentPage}>
          {currentPage}
        </span>
        <button type="button" className={styles.reload} onClick={onReload} aria-label="Оновити результат" title="Оновити">
          <Icon name="refresh" size={16} />
        </button>
      </div>
      <iframe
        ref={frame}
        className={styles.frame}
        title="Результат виконання коду"
        src={srcDoc === undefined ? src : undefined}
        srcDoc={srcDoc}
        onLoad={onLoad}
        sandbox={srcDoc === undefined ? undefined : "allow-scripts allow-forms allow-modals allow-popups"}
      />
      <div className={`${styles.console} ${consoleOpen ? styles.consoleOpen : ""}`}>
        <button type="button" className={styles.consoleToggle} aria-expanded={consoleOpen} onClick={() => setConsoleOpen(!consoleOpen)}>
          <span>
            Консоль · {messages.length} {plural(messages.length, "повідомлення", "повідомлення", "повідомлень")}
            {errors > 0 && <span className={styles.errorCount}> · помилок: {errors}</span>}
          </span>
          <Icon name="chevronDown" size={16} className={consoleOpen ? styles.chevronUp : undefined} />
        </button>
        {consoleOpen && (
          <div className={styles.consoleBody}>
            {messages.length === 0 ? (
              <p className={styles.empty}>Тут з'являтимуться повідомлення console.log() і помилки сторінки.</p>
            ) : (
              <ul className={styles.messages}>
                {messages.map((m) => (
                  <li key={m.id} className={styles[m.level]}>
                    {m.text}
                  </li>
                ))}
              </ul>
            )}
            {messages.length > 0 && (
              <button type="button" className={styles.clear} onClick={onClearConsole}>
                Очистити
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
