export type FileKind = "html" | "css" | "js" | "other";

export function fileKind(path: string): FileKind {
  const ext = path.split(".").pop()?.toLowerCase();
  if (ext === "html" || ext === "htm") return "html";
  if (ext === "css") return "css";
  if (ext === "js" || ext === "mjs") return "js";
  return "other";
}

export const mimeTypes: Record<FileKind, string> = {
  html: "text/html; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  other: "text/plain; charset=utf-8",
};

export function baseName(path: string): string {
  return path.split("/").pop() ?? path;
}

export function parentDir(path: string): string {
  const parts = path.split("/");
  parts.pop();
  return parts.join("/");
}

export function isValidName(name: string): boolean {
  return /^[A-Za-z0-9._-]+$/.test(name) && !/^\.+$/.test(name);
}

export const ALLOWED_EXTENSIONS = [
  "html",
  "htm",
  "css",
  "js",
  "txt",
  "json",
  "svg",
];
