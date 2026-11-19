import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { TocItem } from "./toc";
import styles from "./PageToc.module.scss";

interface PageTocProps {
  items: TocItem[];
  active?: string;
}

export function PageToc({ items, active }: PageTocProps) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Зміст сторінки" className={styles.toc}>
      <div className={styles.title}>На цій сторінці</div>
      <div className={styles.list}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={styles.link}
            aria-current={item.id === active ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function PageTocDropdown({ items, active }: PageTocProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const activeLabel =
    items.find((item) => item.id === active)?.label ?? items[0]?.label;

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (
        event instanceof KeyboardEvent
          ? event.key === "Escape"
          : !ref.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  if (items.length === 0) return null;
  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={styles.triggerText}>
          <span className={styles.triggerLabel}>Зміст:</span>{" "}
          <b>{activeLabel}</b>
        </span>
        <Icon name="chevronDown" size={16} />
      </button>
      {open && (
        <div className={styles.panel}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={styles.panelLink}
              aria-current={item.id === active ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
