import { fileKind, mimeTypes } from "./fileTypes";

const CACHE = "wc-preview";

const CONSOLE_HOOK = `<script data-wc-console>(function(){var send=function(level,args){try{parent.postMessage({source:"wc-preview",level:level,text:Array.prototype.map.call(args,function(a){if(typeof a==="string")return a;try{return JSON.stringify(a)}catch(e){return String(a)}}).join(" ")},"*")}catch(e){}};send("clear",[]);["log","info","warn","error"].forEach(function(l){var o=console[l];console[l]=function(){send(l,arguments);o.apply(console,arguments)}});window.addEventListener("error",function(e){send("error",[e.message+(e.lineno?" (рядок "+e.lineno+")":"")])});})();</script>`;

export function withConsoleHook(html: string): string {
  if (/<head[^>]*>/i.test(html))
    return html.replace(/<head[^>]*>/i, (m) => m + CONSOLE_HOOK);
  if (/<html[^>]*>/i.test(html))
    return html.replace(/<html[^>]*>/i, (m) => m + CONSOLE_HOOK);
  return CONSOLE_HOOK + html;
}

let swReady: Promise<boolean> | null = null;

export function ensurePreviewWorker(): Promise<boolean> {
  if (swReady) return swReady;
  swReady = (async () => {
    if (!("serviceWorker" in navigator) || !("caches" in window)) return false;
    try {
      await navigator.serviceWorker.register("/preview-sw.js", {
        scope: "/preview/",
      });
      const reg = await navigator.serviceWorker.getRegistration("/preview/");
      const worker = reg?.active ?? reg?.waiting ?? reg?.installing;
      if (worker && worker.state !== "activated") {
        await new Promise<void>((resolve) => {
          worker.addEventListener(
            "statechange",
            () => worker.state === "activated" && resolve(),
          );
          setTimeout(resolve, 3000);
        });
      }
      return true;
    } catch {
      return false;
    }
  })();
  return swReady;
}

export const previewBase = (projectId: string) => `/preview/${projectId}/`;

const encodePath = (path: string) =>
  path.split("/").map(encodeURIComponent).join("/");

export async function syncPreview(
  projectId: string,
  files: Record<string, string>,
) {
  const cache = await caches.open(CACHE);
  const prefix = window.location.origin + previewBase(projectId);
  const keys = await cache.keys();
  await Promise.all(
    keys
      .filter((req) => req.url.startsWith(prefix))
      .map((req) => cache.delete(req)),
  );
  await Promise.all(
    Object.entries(files).map(([path, content]) => {
      const kind = fileKind(path);
      const body = kind === "html" ? withConsoleHook(content) : content;
      return cache.put(
        new Request(prefix + encodePath(path)),
        new Response(body, {
          headers: {
            "Content-Type": mimeTypes[kind],
            "Cache-Control": "no-store",
          },
        }),
      );
    }),
  );
}

export async function clearPreview(projectId: string) {
  if (!("caches" in window)) return;
  const cache = await caches.open(CACHE);
  const prefix = window.location.origin + previewBase(projectId);
  const keys = await cache.keys();
  await Promise.all(
    keys
      .filter((req) => req.url.startsWith(prefix))
      .map((req) => cache.delete(req)),
  );
}

function resolvePath(from: string, ref: string): string {
  const base = from.split("/").slice(0, -1);
  for (const part of ref.split("/")) {
    if (part === "..") base.pop();
    else if (part !== "." && part !== "") base.push(part);
  }
  return base.join("/");
}

export function buildSrcdoc(
  files: Record<string, string>,
  htmlPath: string,
): string {
  let html = files[htmlPath] ?? "<p>Немає HTML-файлу для показу.</p>";
  html = html.replace(
    /<link\b[^>]*href=["']([^"']+)["'][^>]*>/gi,
    (tag, href: string) => {
      if (/^(https?:)?\/\//.test(href) || !/stylesheet/i.test(tag)) return tag;
      const css = files[resolvePath(htmlPath, href)];
      return css === undefined ? tag : `<style>\n${css}\n</style>`;
    },
  );
  html = html.replace(
    /<script\b([^>]*)src=["']([^"']+)["']([^>]*)>\s*<\/script>/gi,
    (tag, _a, src: string) => {
      if (/^(https?:)?\/\//.test(src)) return tag;
      const js = files[resolvePath(htmlPath, src)];
      return js === undefined ? tag : `<script>\n${js}\n</script>`;
    },
  );
  return withConsoleHook(html);
}
