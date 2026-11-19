import {
  starterFiles,
  starterFolders,
  starterProjectName,
} from "@/static-content/editorStarter";

export interface ProjectMeta {
  id: string;
  name: string;
}

export interface ProjectData {
  files: Record<string, string>;
  folders: string[];
}

const LIST_KEY = "wc:editor:projects";
const ACTIVE_KEY = "wc:editor:active";
const projectKey = (id: string) => `wc:editor:project:${id}`;

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function starterData(): ProjectData {
  const origin = window.location.origin;
  return {
    files: Object.fromEntries(
      Object.entries(starterFiles).map(([path, text]) => [
        path,
        text.replaceAll("{{ORIGIN}}", origin),
      ]),
    ),
    folders: [...starterFolders],
  };
}

export function emptyData(): ProjectData {
  return {
    files: {
      "index.html": `<!DOCTYPE html>\n<html lang="uk">\n<head>\n  <meta charset="utf-8">\n  <title>Нова сторінка</title>\n</head>\n<body>\n  \n</body>\n</html>\n`,
    },
    folders: [],
  };
}

function newId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export function loadProjects(): ProjectMeta[] {
  const list = readJson<ProjectMeta[]>(LIST_KEY, []);
  if (Array.isArray(list) && list.length > 0) return list;
  const first = { id: newId(), name: starterProjectName };
  writeJson(LIST_KEY, [first]);
  writeJson(projectKey(first.id), starterData());
  return [first];
}

export function saveProjects(list: ProjectMeta[]) {
  writeJson(LIST_KEY, list);
}

export function loadActiveId(list: ProjectMeta[]): string {
  const id = readJson<string | null>(ACTIVE_KEY, null);
  return list.some((p) => p.id === id) ? (id as string) : list[0].id;
}

export function saveActiveId(id: string) {
  writeJson(ACTIVE_KEY, id);
}

export function loadProject(id: string): ProjectData {
  const data = readJson<ProjectData | null>(projectKey(id), null);
  if (
    data &&
    typeof data.files === "object" &&
    Object.keys(data.files).length > 0
  ) {
    return {
      files: data.files,
      folders: Array.isArray(data.folders) ? data.folders : [],
    };
  }
  return starterData();
}

export function saveProject(id: string, data: ProjectData): boolean {
  return writeJson(projectKey(id), data);
}

export function createProject(
  name: string,
  data: ProjectData = emptyData(),
): ProjectMeta {
  const meta = { id: newId(), name };
  writeJson(projectKey(meta.id), data);
  return meta;
}

export function removeProject(id: string) {
  try {
    localStorage.removeItem(projectKey(id));
  } catch {
    return;
  }
}
