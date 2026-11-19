import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { CodeMirrorView } from "@/features/editor/CodeMirrorView";
import { ALLOWED_EXTENSIONS, baseName, fileKind, isValidName } from "@/features/editor/fileTypes";
import { buildSrcdoc, clearPreview, ensurePreviewWorker, previewBase, syncPreview } from "@/features/editor/preview";
import {
  createProject,
  emptyData,
  loadActiveId,
  loadProject,
  loadProjects,
  removeProject,
  saveActiveId,
  saveProject,
  saveProjects,
  starterData,
  type ProjectData,
  type ProjectMeta,
} from "@/features/editor/projects";
import { createZip, downloadBlob } from "@/features/editor/zip";
import { media, useMediaQuery } from "@/hooks/useMediaQuery";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { EditorHeader, type SaveState } from "./components/EditorHeader";
import { FileTabs } from "./components/FileTabs";
import { FileTree, type Creating } from "./components/FileTree";
import { PreviewPane, type ConsoleMessage } from "./components/PreviewPane";
import styles from "./EditorPage.module.scss";

type View = "files" | "code" | "split" | "result";
const SAVE_DELAY = 400;

const FILE_TEMPLATES: Record<string, string> = {
  html: `<!DOCTYPE html>\n<html lang="uk">\n<head>\n  <meta charset="utf-8">\n  <title>Сторінка</title>\n</head>\n<body>\n  \n</body>\n</html>\n`,
  css: "",
  js: "",
};

function initialTabs(data: ProjectData): string[] {
  const paths = Object.keys(data.files);
  const first = paths.includes("index.html") ? ["index.html"] : paths.slice(0, 1);
  const extra = paths.filter((p) => p !== first[0] && fileKind(p) !== "html").slice(0, 2);
  return [...first, ...extra];
}

function firstHtml(data: ProjectData): string {
  const paths = Object.keys(data.files);
  return paths.includes("index.html") ? "index.html" : (paths.find((p) => fileKind(p) === "html") ?? paths[0]);
}

export default function EditorPage() {
  useDocumentTitle("Редактор коду");
  const isDesktop = useMediaQuery(media.desktop);
  const isPhone = useMediaQuery(media.phone);

  const [projects, setProjects] = useState<ProjectMeta[]>(loadProjects);
  const [projectId, setProjectId] = useState(() => loadActiveId(projects));
  const [data, setData] = useState<ProjectData>(() => loadProject(projectId));
  const [tabs, setTabs] = useState<string[]>(() => initialTabs(data));
  const [active, setActive] = useState(() => tabs[0]);
  const [creating, setCreating] = useState<Creating | null>(null);
  const [view, setView] = useState<View>("split");
  const [saveState, setSaveState] = useState<SaveState>("saved");
  const [messages, setMessages] = useState<ConsoleMessage[]>([]);
  const [swOk, setSwOk] = useState<boolean | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string>();
  const [srcDoc, setSrcDoc] = useState<string>();
  const [currentPage, setCurrentPage] = useState(() => firstHtml(data));
  const pageRef = useRef(currentPage);
  const messageId = useRef(0);

  useEffect(() => {
    ensurePreviewWorker().then(setSwOk);
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const msg = event.data as { source?: string; level?: ConsoleMessage["level"] | "clear"; text?: string };
      if (msg?.source !== "wc-preview" || !msg.level) return;
      if (msg.level === "clear") {
        setMessages([]);
        return;
      }
      const level = msg.level;
      setMessages((prev) => [...prev.slice(-199), { id: ++messageId.current, level, text: msg.text ?? "" }]);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const refreshPreview = useCallback(
    async (files: Record<string, string>) => {
      if (swOk === null) return;
      setMessages([]);
      if (swOk) {
        await syncPreview(projectId, files);
        setPreviewSrc(`${previewBase(projectId)}${pageRef.current}?v=${Date.now()}`);
      } else {
        setSrcDoc(buildSrcdoc(files, pageRef.current));
      }
    },
    [projectId, swOk],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const ok = saveProject(projectId, data);
      setSaveState(ok ? "saved" : "error");
      void refreshPreview(data.files);
    }, SAVE_DELAY);
    return () => window.clearTimeout(timer);
  }, [data, projectId, refreshPreview]);

  const latest = useRef({ projectId, data });
  useEffect(() => {
    latest.current = { projectId, data };
  }, [projectId, data]);
  useEffect(() => {
    const flush = () => saveProject(latest.current.projectId, latest.current.data);
    window.addEventListener("beforeunload", flush);
    return () => window.removeEventListener("beforeunload", flush);
  }, []);

  const onChange = useCallback((path: string, value: string) => {
    setSaveState("saving");
    setData((prev) => (prev.files[path] === value ? prev : { ...prev, files: { ...prev.files, [path]: value } }));
  }, []);

  const switchProject = (id: string, nextData = loadProject(id)) => {
    saveProject(projectId, data);
    setProjectId(id);
    saveActiveId(id);
    setData(nextData);
    const nextTabs = initialTabs(nextData);
    setTabs(nextTabs);
    setActive(nextTabs[0]);
    pageRef.current = firstHtml(nextData);
    setCurrentPage(pageRef.current);
    setCreating(null);
  };

  const openFile = (path: string) => {
    setTabs((prev) => (prev.includes(path) ? prev : [...prev, path]));
    setActive(path);
    if (fileKind(path) === "html") {
      pageRef.current = path;
      setCurrentPage(path);
      void refreshPreview(data.files);
    }
    if (isPhone) setView("code");
  };

  const closeTab = (path: string) => {
    const next = tabs.filter((t) => t !== path);
    setTabs(next);
    if (active === path) setActive(next[next.length - 1] ?? firstHtml(data));
  };

  const createEntry = (name: string): string | null => {
    if (!creating) return null;
    if (!name) return "Вкажіть ім'я";
    let fileName = name;
    if (creating.type === "file" && !fileName.includes(".")) fileName += ".html";
    if (!isValidName(fileName)) return "Лише латиниця, цифри, «-», «_» і «.»";
    const path = creating.dir ? `${creating.dir}/${fileName}` : fileName;
    if (creating.type === "folder") {
      if (data.folders.includes(path) || data.files[path] !== undefined) return "Така папка вже існує";
      setData((prev) => ({ ...prev, folders: [...prev.folders, path] }));
    } else {
      const ext = fileName.split(".").pop()!.toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) return `Дозволені розширення: ${ALLOWED_EXTENSIONS.join(", ")}`;
      if (data.files[path] !== undefined) return "Такий файл уже існує";
      setData((prev) => ({ ...prev, files: { ...prev.files, [path]: FILE_TEMPLATES[ext] ?? "" } }));
      setTabs((prev) => [...prev, path]);
      setActive(path);
      if (isPhone) setView("code");
    }
    setCreating(null);
    return null;
  };

  const renameEntry = (path: string, dir: boolean) => {
    const name = window.prompt(dir ? "Нове ім'я папки:" : "Нове ім'я файлу:", baseName(path));
    if (!name || name === baseName(path)) return;
    if (!isValidName(name)) {
      window.alert("Ім'я може містити лише латиницю, цифри, «-», «_» і «.»");
      return;
    }
    const parent = path.split("/").slice(0, -1).join("/");
    const target = parent ? `${parent}/${name}` : name;
    const move = (p: string) => (p === path ? target : p.startsWith(`${path}/`) ? target + p.slice(path.length) : p);
    if (data.files[target] !== undefined || data.folders.includes(target)) {
      window.alert("Файл або папка з таким ім'ям уже є.");
      return;
    }
    setData((prev) => ({
      files: Object.fromEntries(Object.entries(prev.files).map(([p, v]) => [move(p), v])),
      folders: prev.folders.map(move),
    }));
    setTabs((prev) => prev.map(move));
    setActive((prev) => move(prev));
    pageRef.current = move(pageRef.current);
    setCurrentPage(pageRef.current);
  };

  const deleteEntry = (path: string, dir: boolean) => {
    const inside = (p: string) => p === path || p.startsWith(`${path}/`);
    const remaining = Object.keys(data.files).filter((p) => !inside(p));
    if (remaining.length === 0) {
      window.alert("У проєкті має залишитися хоча б один файл.");
      return;
    }
    if (!window.confirm(dir ? `Видалити папку «${path}» з усіма файлами?` : `Видалити файл «${path}»?`)) return;
    setData((prev) => ({
      files: Object.fromEntries(Object.entries(prev.files).filter(([p]) => !inside(p))),
      folders: prev.folders.filter((p) => !inside(p)),
    }));
    const nextTabs = tabs.filter((t) => !inside(t));
    const fallback = remaining.includes("index.html") ? "index.html" : remaining[0];
    setTabs(nextTabs.length ? nextTabs : [fallback]);
    if (inside(active)) setActive(nextTabs[0] ?? fallback);
    if (inside(pageRef.current)) {
      pageRef.current = remaining.find((p) => fileKind(p) === "html") ?? fallback;
      setCurrentPage(pageRef.current);
    }
  };

  const newProject = () => {
    const name = window.prompt("Назва нового проєкту (латиницею):", `project-${projects.length + 1}`);
    if (!name?.trim()) return;
    const meta = createProject(name.trim(), emptyData());
    const list = [...projects, meta];
    setProjects(list);
    saveProjects(list);
    switchProject(meta.id, loadProject(meta.id));
  };

  const renameProject = () => {
    const current = projects.find((p) => p.id === projectId);
    const name = window.prompt("Нова назва проєкту:", current?.name);
    if (!name?.trim()) return;
    const list = projects.map((p) => (p.id === projectId ? { ...p, name: name.trim() } : p));
    setProjects(list);
    saveProjects(list);
  };

  const deleteProject = () => {
    const current = projects.find((p) => p.id === projectId);
    if (projects.length === 1) {
      window.alert("Це єдиний проєкт. Щоб почати спочатку, скористайтеся кнопкою «Скинути».");
      return;
    }
    if (!window.confirm(`Видалити проєкт «${current?.name}»? Цю дію не можна скасувати.`)) return;
    const list = projects.filter((p) => p.id !== projectId);
    removeProject(projectId);
    void clearPreview(projectId);
    setProjects(list);
    saveProjects(list);
    const next = list[0];
    setProjectId(next.id);
    saveActiveId(next.id);
    const nextData = loadProject(next.id);
    setData(nextData);
    const nextTabs = initialTabs(nextData);
    setTabs(nextTabs);
    setActive(nextTabs[0]);
    pageRef.current = firstHtml(nextData);
    setCurrentPage(pageRef.current);
  };

  const resetProject = () => {
    if (!window.confirm("Повернути стартові файли? Усі зміни в цьому проєкті буде втрачено.")) return;
    const fresh = starterData();
    setData(fresh);
    const nextTabs = initialTabs(fresh);
    setTabs(nextTabs);
    setActive(nextTabs[0]);
    pageRef.current = firstHtml(fresh);
    setCurrentPage(pageRef.current);
  };

  const download = () => {
    const name = projects.find((p) => p.id === projectId)?.name ?? "project";
    downloadBlob(createZip(data.files, name), `${name}.zip`);
  };

  const startAddFile = () => {
    setCreating({ type: "file", dir: "" });
    if (isPhone) setView("files");
  };

  const onNavigate = useCallback((path: string) => {
    if (path && pageRef.current !== path) {
      pageRef.current = path;
      setCurrentPage(path);
    }
  }, []);

  const files = useMemo(() => Object.keys(data.files), [data.files]);
  const activePath = data.files[active] !== undefined ? active : files[0];

  const tree = (embedded?: boolean) => (
    <FileTree
      files={files}
      folders={data.folders}
      active={activePath}
      creating={creating}
      embedded={embedded}
      onOpen={openFile}
      onStartCreate={setCreating}
      onCancelCreate={() => setCreating(null)}
      onCreate={createEntry}
      onRename={renameEntry}
      onDelete={deleteEntry}
    />
  );

  const codeCard = (
    <section aria-label="Код" className={styles.code}>
      <FileTabs tabs={tabs.filter((t) => data.files[t] !== undefined)} active={activePath} onSelect={setActive} onClose={closeTab} onAdd={startAddFile} />
      <div className={styles.codeBody}>
        {!isDesktop && !isPhone && tree(true)}
        <div className={styles.cm}>
          <CodeMirrorView fileKey={`${projectId}:${activePath}`} path={activePath} value={data.files[activePath] ?? ""} onChange={onChange} />
        </div>
      </div>
    </section>
  );

  const preview = (
    <PreviewPane
      src={previewSrc}
      srcDoc={swOk === false ? srcDoc : undefined}
      currentPage={currentPage}
      base={previewBase(projectId)}
      onNavigate={onNavigate}
      onReload={() => void refreshPreview(data.files)}
      messages={messages}
      onClearConsole={() => setMessages([])}
    />
  );

  const phoneView = view === "split" ? "code" : view;
  const tabletView = view === "files" ? "code" : view;

  return (
    <div className={styles.page}>
      <EditorHeader
        projects={projects}
        projectId={projectId}
        saveState={saveState}
        onSelectProject={(id) => switchProject(id)}
        onCreateProject={newProject}
        onRenameProject={renameProject}
        onDeleteProject={deleteProject}
        onDownload={download}
        onReset={resetProject}
      />

      {!isDesktop && (
        <div className={styles.toolbar}>
          <div className={styles.segmented} role="tablist" aria-label="Що показувати">
            {(isPhone
              ? [
                  ["files", "Файли"],
                  ["code", "Код"],
                  ["result", "Результат"],
                ]
              : [
                  ["code", "Код"],
                  ["split", "Код і результат"],
                  ["result", "Результат"],
                ]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={(isPhone ? phoneView : tabletView) === value}
                onClick={() => setView(value as View)}
              >
                {label}
              </button>
            ))}
          </div>
          {!isPhone && (
            <div className={styles.toolbarActions}>
              <button type="button" className={styles.toolButton} onClick={download}>
                <Icon name="download" size={16} /> .zip
              </button>
              <button type="button" className={styles.toolText} onClick={resetProject}>
                Скинути
              </button>
            </div>
          )}
        </div>
      )}

      {isDesktop ? (
        <div className={styles.desktop}>
          {tree()}
          {codeCard}
          {preview}
        </div>
      ) : isPhone ? (
        <div className={styles.single}>
          {phoneView === "files" && tree()}
          {phoneView === "code" && codeCard}
          <div className={phoneView === "result" ? styles.fill : styles.hidden}>{preview}</div>
        </div>
      ) : (
        <div className={`${styles.tablet} ${styles[tabletView]}`}>
          {tabletView !== "result" && codeCard}
          <div className={tabletView === "code" ? styles.hidden : styles.fill}>{preview}</div>
        </div>
      )}
    </div>
  );
}
