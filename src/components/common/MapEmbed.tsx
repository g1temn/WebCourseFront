import { university } from "@/static-content/site";
import styles from "./MapEmbed.module.scss";

interface MapEmbedProps {
  compact?: boolean;
  className?: string;
}

export function MapEmbed({ compact, className }: MapEmbedProps) {
  return (
    <iframe
      className={[styles.map, compact && styles.compact, className]
        .filter(Boolean)
        .join(" ")}
      src={university.mapEmbedUrl}
      title={`Мапа: ${university.name}, ${university.street}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      tabIndex={compact ? -1 : undefined}
      aria-hidden={compact ? true : undefined}
    />
  );
}
