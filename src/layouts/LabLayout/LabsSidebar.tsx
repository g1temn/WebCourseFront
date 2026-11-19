import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { Icon } from "@/components/ui/Icon";
import { labGroups, labShortLabel, techNames } from "@/static-content/labs";
import type { LabMeta } from "@/static-content/types";
import styles from "./LabsSidebar.module.scss";

export function LabsSidebar({
  current,
  onNavigate,
}: {
  current?: string;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Лабораторні роботи" className={styles.nav}>
      {labGroups.map(({ group, labs }) => (
        <div key={group} className={styles.group}>
          <div className={`${styles.groupTitle} ${styles[group]}`}>
            <span className={styles.groupDot} />
            {techNames[group]}
          </div>
          <div className={styles.list}>
            {labs.map((lab) => (
              <NavLink
                key={lab.slug}
                to={`/labs/${lab.slug}`}
                className={styles.link}
                aria-current={lab.slug === current ? "page" : undefined}
                onClick={onNavigate}
              >
                <span className={styles.number}>{lab.number}</span>
                {lab.shortTitle}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function LabsMenu({ current }: { current?: LabMeta }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div className={styles.menu} ref={ref}>
      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Icon name="listMenu" size={18} />
        <span className={styles.triggerText}>
          Лабораторні роботи
          {current && (
            <span className={styles.triggerCurrent}>
              {" "}
              · {labShortLabel(current)}
            </span>
          )}
        </span>
      </button>
      {open && (
        <div className={styles.panel}>
          <LabsSidebar
            current={current?.slug}
            onNavigate={() => setOpen(false)}
          />
          <Link
            to="/#labs"
            className={styles.all}
            onClick={() => setOpen(false)}
          >
            Таблиця всіх лабораторних робіт
          </Link>
        </div>
      )}
    </div>
  );
}
