const CACHE = "wc-preview";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith("/preview/")) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      let path = url.pathname;
      if (path.endsWith("/")) path += "index.html";
      const hit = await cache.match(url.origin + path);
      if (hit) return hit;
      const name = decodeURIComponent(path.split("/").slice(3).join("/"));
      return new Response(
        `<!doctype html><meta charset="utf-8"><body style="font-family:sans-serif;padding:16px">` +
          `<h2>Файл не знайдено</h2><p>У проєкті немає файлу <code>${name.replace(/</g, "&lt;")}</code>.</p>`,
        { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } },
      );
    })(),
  );
});
