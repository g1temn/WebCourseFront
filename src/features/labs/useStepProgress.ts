import { useCallback, useEffect, useState } from "react";

const storageKey = (slug: string) => `wc:steps:${slug}`;

function read(slug: string): number[] {
  try {
    const raw = localStorage.getItem(storageKey(slug));
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((n): n is number => typeof n === "number")
      : [];
  } catch {
    return [];
  }
}

export function useStepProgress(slug: string) {
  const [done, setDone] = useState<number[]>(() => read(slug));

  const [prevSlug, setPrevSlug] = useState(slug);
  if (prevSlug !== slug) {
    setPrevSlug(slug);
    setDone(read(slug));
  }

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(slug), JSON.stringify(done));
    } catch {
      return;
    }
  }, [slug, done]);

  const toggle = useCallback(
    (index: number) =>
      setDone((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index].sort((a, b) => a - b),
      ),
    [],
  );

  return { done, toggle };
}
