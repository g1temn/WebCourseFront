import { useEffect, useState, type RefObject } from "react";

export interface TocItem {
  id: string;
  label: string;
}

export function useTocItems(
  containerRef: RefObject<HTMLElement | null>,
  key: string,
): TocItem[] {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const collect = () => {
      const next = Array.from(
        root.querySelectorAll<HTMLElement>("[data-toc]"),
      ).map((el) => ({
        id: el.id,
        label: el.dataset.toc ?? "",
      }));
      setItems((prev) =>
        prev.length === next.length &&
        prev.every((p, i) => p.id === next[i].id && p.label === next[i].label)
          ? prev
          : next,
      );
    };
    collect();
    const observer = new MutationObserver(collect);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [containerRef, key]);

  return items;
}

export function useActiveSection(ids: string[]): string | undefined {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  const idsKey = ids.join("|");

  useEffect(() => {
    const list = idsKey ? idsKey.split("|") : [];
    if (list.length === 0) return;
    const update = () => {
      const offset = window.innerHeight * 0.3;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      setActive(atBottom ? list[list.length - 1] : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [idsKey]);

  return active;
}
