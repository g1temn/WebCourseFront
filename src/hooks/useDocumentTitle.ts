import { useEffect } from "react";
import { siteTitle } from "@/static-content/site";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${siteTitle}` : siteTitle;
  }, [title]);
}
