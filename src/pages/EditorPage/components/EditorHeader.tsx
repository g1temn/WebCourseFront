import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { LogoMark } from "@/components/common/Logo";
import { Icon } from "@/components/ui/Icon";
import type { ProjectMeta } from "@/features/editor/projects";
import styles from "./EditorHeader.module.scss";

export type SaveState = "saved" | "saving" | "error";

const ACTIONS = { create: "__create", rename: "__rename", remove: "__remove" } as const;

interface EditorHeaderProps {
  projects: ProjectMeta[];
  projectId: string;
  saveState: SaveState;
  onSelectProject: (id: string) => void;
  onCreateProject: () => void;
  onRenameProject: () => void;
  onDeleteProject: () => void;
  onDownload: () => void;
  onReset: () => void;
}

export function EditorHeader({
  projects,
  projectId,
  saveState,
  onSelectProject,
  onCreateProject,
  onRenameProject,
  onDeleteProject,
  onDownload,
  onReset,
}: EditorHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent ? event.key === "Escape" : !menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [menuOpen]);

  const saveLabel = saveState === "saving" ? "Збереження…" : saveState === "error" ? "Не збережено" : "Збережено в браузері";

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand} aria-label="На головну сторінку сайту" title="На головну сторінку сайту">
        <LogoMark small />
      </Link>
      <span className={styles.title}>Редактор</span>
      <span className={styles.divider} aria-hidden="true" />
      <label className={styles.project}>
        <span className={styles.projectLabel}>Проєкт</span>
        <select
          value={projectId}
          onChange={(event) => {
            const value = event.target.value;
            if (value === ACTIONS.create) onCreateProject();
            else if (value === ACTIONS.rename) onRenameProject();
            else if (value === ACTIONS.remove) onDeleteProject();
            else onSelectProject(value);
          }}
        >
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
          <option disabled>──────────</option>
          <option value={ACTIONS.create}>+ Новий проєкт…</option>
          <option value={ACTIONS.rename}>Перейменувати…</option>
          <option value={ACTIONS.remove}>Видалити проєкт…</option>
        </select>
      </label>

      <div className={styles.right}>
        <span className={`${styles.status} ${styles[saveState]}`} role="status" title={saveLabel}>
          <Icon name={saveState === "error" ? "warning" : "check"} size={14} strokeWidth={2.4} />
          <span className={styles.statusFull}>{saveLabel}</span>
          <span className={styles.statusShort}>{saveState === "saving" ? "…" : saveState === "error" ? "!" : "Збережено"}</span>
        </span>
        <button type="button" className={styles.zip} onClick={onDownload}>
          <Icon name="download" size={16} />
          Завантажити .zip
        </button>
        <button type="button" className={styles.reset} onClick={onReset}>
          Скинути
        </button>
        <div className={styles.more} ref={menuRef}>
          <button type="button" className={styles.moreButton} aria-expanded={menuOpen} aria-label="Інші дії" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name="more" size={20} />
          </button>
          {menuOpen && (
            <div className={styles.menu} role="menu">
              <button type="button" role="menuitem" onClick={() => { setMenuOpen(false); onDownload(); }}>
                <Icon name="download" size={16} /> Завантажити .zip
              </button>
              <button type="button" role="menuitem" onClick={() => { setMenuOpen(false); onCreateProject(); }}>
                <Icon name="plus" size={16} /> Новий проєкт
              </button>
              <button type="button" role="menuitem" onClick={() => { setMenuOpen(false); onReset(); }}>
                <Icon name="refresh" size={16} /> Скинути проєкт
              </button>
              <Link to="/" role="menuitem" onClick={() => setMenuOpen(false)}>
                <Icon name="arrowLeft" size={16} /> На сайт курсу
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
