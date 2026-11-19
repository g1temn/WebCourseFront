import { Fragment, type ReactNode } from "react";

const TOKEN = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function renderRich(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("`") && part.endsWith("`"))
      return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**") && part.endsWith("**"))
      return <b key={i}>{part.slice(2, -2)}</b>;
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const external = /^https?:/.test(link[2]);
      return (
        <a
          key={i}
          href={link[2]}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
        >
          {link[1]}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
