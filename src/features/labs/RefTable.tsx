import { useId, useState } from "react";
import { renderRich } from "@/components/common/renderRich";
import { Icon } from "@/components/ui/Icon";
import { plural } from "@/static-content/labs";
import styles from "./RefTable.module.scss";

interface RefTableProps {
  title: string;
  columns?: string[];
  rows: string[][];
  searchable?: boolean;
  searchPlaceholder?: string;
  initialRows?: number;
  itemsWord?: [one: string, few: string, many: string];
}

export function RefTable({
  title,
  columns,
  rows,
  searchable,
  searchPlaceholder = "Знайти",
  initialRows = 6,
  itemsWord = ["рядок", "рядки", "рядків"],
}: RefTableProps) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const searchId = useId();
  const q = query.trim().toLowerCase();
  const filtered = q
    ? rows.filter((row) => row.join(" ").toLowerCase().includes(q))
    : rows;
  const visible = showAll || q ? filtered : filtered.slice(0, initialRows);
  const hidden = filtered.length - visible.length;
  const keyColumn = !columns || columns.length === 2;

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <b className={styles.title}>{title}</b>
        {searchable && (
          <label className={styles.search} htmlFor={searchId}>
            <Icon name="search" size={16} />
            <input
              id={searchId}
              type="search"
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        )}
      </div>
      <div className={styles.scroll}>
        <table className={`${styles.table} ${keyColumn ? styles.keyed : ""}`}>
          {columns && (
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {visible.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell, i) => (
                  <td key={i} data-label={columns?.[i]}>
                    {renderRich(cell)}
                  </td>
                ))}
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={columns?.length ?? 2} className={styles.empty}>
                  Нічого не знайдено
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {hidden > 0 && (
        <div className={styles.foot}>
          <button type="button" onClick={() => setShowAll(true)}>
            Показати всі {filtered.length}{" "}
            {plural(filtered.length, ...itemsWord)}
          </button>
        </div>
      )}
      {showAll && !q && rows.length > initialRows && (
        <div className={styles.foot}>
          <button type="button" onClick={() => setShowAll(false)}>
            Згорнути
          </button>
        </div>
      )}
    </div>
  );
}
