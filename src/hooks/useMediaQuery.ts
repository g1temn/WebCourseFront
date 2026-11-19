import { useSyncExternalStore } from "react";

export const media = {
  phone: "(max-width: 767px)",
  tabletUp: "(min-width: 768px)",
  desktop: "(min-width: 1200px)",
} as const;

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
