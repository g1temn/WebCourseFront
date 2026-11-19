import { useState, type CSSProperties, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { baseName, fileKind } from "@/features/editor/fileTypes";
import styles from "./FileTree.module.scss";

export interface Creating {
  type: "file" | "folder";
  dir: string;
}

interface TreeNode {
  name: string;
  path: string;
  dir: boolean;
  children: TreeNode[];
}

function buildTree(files: string[], folders: string[]): TreeNode[] {
  const root: TreeNode = { name: "", path: "", dir: true, children: [] };
  const ensureDir = (path: string): TreeNode => {
    let node = root;
    let current = "";
    for (const part of path.split("/").filter(Boolean)) {
      current = current ? `${current}/${part}` : part;
      let next = node.children.find((c) => c.dir && c.name === part);
      if (!next) {
        next = { name: part, path: current, dir: true, children: [] };
        node.children.push(next);
      }
      node = next;
    }
    return node;
  };
  folders.forEach(ensureDir);
  for (const file of files) {
    const parts = file.split("/");
    const parent = ensureDir(parts.slice(0, -1).join("/"));
    parent.children.push({ name: parts[parts.length - 1], path: file, dir: false, children: [] });
  }
  const sort = (node: TreeNode) => {
    node.children.sort((a, b) => (a.dir === b.dir ? a.name.localeCompare(b.name) : a.dir ? 1 : -1));
    node.children.forEach(sort);
  };
  sort(root);
  return root.children;
}

interface FileTreeProps {
  files: string[];
  folders: string[];
  active: string;
  creating: Creating | null;
  onOpen: (path: string) => void;
  onStartCreate: (creating: Creating) => void;
  onCancelCreate: () => void;
  onCreate: (name: string) => string | null;
  onRename: (path: string, dir: boolean) => void;
  onDelete: (path: string, dir: boolean) => void;
  embedded?: boolean;
}

export function FileTree({
  files,
  folders,
  active,
  creating,
  onOpen,
  onStartCreate,
  onCancelCreate,
  onCreate,
  onRename,
  onDelete,
  embedded,
}: FileTreeProps) {
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const [selectedDir, setSelectedDir] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const tree = buildTree(files, folders);

  const startCreate = (type: Creating["type"]) => {
    setName("");
    setError(null);
    onStartCreate({ type, dir: selectedDir });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const result = onCreate(name.trim());
    if (result) setError(result);
    else {
      setName("");
      setError(null);
    }
  };

  const createForm = (dir: string, depth: number) =>
    creating && creating.dir === dir ? (
      <li className={styles.createRow} style={{ "--depth": depth } as CSSProperties}>
        <form onSubmit={submit} className={styles.createForm}>
          <Icon name={creating.type === "file" ? "file" : "folder"} size={15} />
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && onCancelCreate()}
            onBlur={() => !name && onCancelCreate()}
            placeholder={creating.type === "file" ? "page.html" : "images"}
            aria-label={creating.type === "file" ? "Ім'я нового файлу" : "Ім'я нової папки"}
            aria-invalid={error ? true : undefined}
          />
        </form>
        {error && <span className={styles.error}>{error}</span>}
      </li>
    ) : null;

  const renderNodes = (nodes: TreeNode[], depth: number, dir: string) => (
    <>
      {createForm(dir, depth)}
      {nodes.map((node) => {
        const isCollapsed = collapsed.includes(node.path);
        if (node.dir) {
          return (
            <li key={node.path} role="treeitem" aria-expanded={!isCollapsed}>
              <div
                className={`${styles.row} ${selectedDir === node.path ? styles.selectedDir : ""}`}
                style={{ "--depth": depth } as CSSProperties}
              >
                <button
                  type="button"
                  className={styles.item}
                  onClick={() => {
                    setSelectedDir(selectedDir === node.path && !isCollapsed ? "" : node.path);
                    setCollapsed((prev) =>
                      prev.includes(node.path) ? prev.filter((p) => p !== node.path) : [...prev, node.path],
                    );
                  }}
                >
                  <Icon name="chevronDown" size={14} className={`${styles.chevron} ${isCollapsed ? styles.chevronClosed : ""}`} />
                  <Icon name="folder" size={15} className={styles.folderIcon} />
                  {node.name}
                </button>
                <span className={styles.actions}>
                  <button type="button" onClick={() => onRename(node.path, true)} aria-label={`Перейменувати папку ${node.name}`}>
                    <Icon name="edit" size={13} />
                  </button>
                  <button type="button" onClick={() => onDelete(node.path, true)} aria-label={`Видалити папку ${node.name}`}>
                    <Icon name="trash" size={13} />
                  </button>
                </span>
              </div>
              {!isCollapsed && <ul role="group">{renderNodes(node.children, depth + 1, node.path)}</ul>}
            </li>
          );
        }
        const isActive = node.path === active;
        return (
          <li key={node.path} role="treeitem" aria-selected={isActive}>
            <div className={`${styles.row} ${isActive ? styles.active : ""}`} style={{ "--depth": depth } as CSSProperties}>
              <button type="button" className={styles.item} onClick={() => onOpen(node.path)}>
                <span className={`${styles.dot} ${styles[fileKind(node.path)]}`} />
                {node.name}
              </button>
              <span className={styles.actions}>
                <button type="button" onClick={() => onRename(node.path, false)} aria-label={`Перейменувати ${node.name}`}>
                  <Icon name="edit" size={13} />
                </button>
                <button type="button" onClick={() => onDelete(node.path, false)} aria-label={`Видалити ${node.name}`}>
                  <Icon name="trash" size={13} />
                </button>
              </span>
            </div>
          </li>
        );
      })}
    </>
  );

  return (
    <aside className={`${styles.tree} ${embedded ? styles.embedded : ""}`} aria-label="Провідник файлів">
      <div className={styles.head}>
        <b>Файли</b>
        <span className={styles.headActions}>
          <button type="button" onClick={() => startCreate("file")} aria-label="Новий файл" title="Новий файл">
            <Icon name="filePlus" size={16} />
          </button>
          <button type="button" onClick={() => startCreate("folder")} aria-label="Нова папка" title="Нова папка">
            <Icon name="folderPlus" size={16} />
          </button>
        </span>
      </div>
      {selectedDir && (
        <div className={styles.dirHint}>
          Нові файли — у папці <code>{baseName(selectedDir)}/</code>
        </div>
      )}
      <ul role="tree" aria-label="Файли проєкту" className={styles.list}>
        {renderNodes(tree, 0, "")}
      </ul>
      <div className={styles.spacer} />
      <div className={styles.hint}>
        <b>Зображення</b>
        Вставляйте за повною адресою (URL) в атрибут <code>src</code>. Посилання на зображення до лабораторних робіт
        копіюються на сторінці відповідної роботи.
      </div>
    </aside>
  );
}
