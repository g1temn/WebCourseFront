import { Icon } from "@/components/ui/Icon";
import { baseName, fileKind } from "@/features/editor/fileTypes";
import styles from "./FileTabs.module.scss";

interface FileTabsProps {
  tabs: string[];
  active: string;
  onSelect: (path: string) => void;
  onClose: (path: string) => void;
  onAdd: () => void;
}

export function FileTabs({ tabs, active, onSelect, onClose, onAdd }: FileTabsProps) {
  return (
    <div className={styles.bar}>
      <div role="tablist" aria-label="Відкриті файли" className={styles.tabs}>
        {tabs.map((path) => (
          <div key={path} className={`${styles.tab} ${path === active ? styles.active : ""}`}>
            <button
              type="button"
              role="tab"
              aria-selected={path === active}
              className={styles.tabButton}
              onClick={() => onSelect(path)}
              title={path}
            >
              <span className={`${styles.dot} ${styles[fileKind(path)]}`} />
              {baseName(path)}
            </button>
            {tabs.length > 1 && (
              <button type="button" className={styles.close} onClick={() => onClose(path)} aria-label={`Закрити ${path}`}>
                <Icon name="close" size={12} />
              </button>
            )}
          </div>
        ))}
      </div>
      <button type="button" className={styles.add} onClick={onAdd} aria-label="Додати файл">
        <Icon name="plus" size={14} />
        <span>Файл</span>
      </button>
    </div>
  );
}
