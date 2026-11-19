import { useState } from "react";
import { Lightbox } from "@/components/common/Lightbox";
import { Icon } from "@/components/ui/Icon";
import styles from "./Figure.module.scss";

export interface FigureProps {
  src: string;
  alt: string;
  number?: string;
  caption?: string;
  crop?: boolean;
  maxWidth?: number;
  inline?: boolean;
  natural?: boolean;
}

export function Figure({
  src,
  alt,
  number,
  caption,
  crop,
  maxWidth,
  inline,
  natural,
}: FigureProps) {
  const [open, setOpen] = useState(false);
  const fullCaption = [number, caption].filter(Boolean).join(" ");
  return (
    <figure className={`${styles.figure} ${inline ? styles.inline : ""}`}>
      <div
        className={`${styles.frame} ${crop ? styles.crop : ""} ${natural ? styles.natural : ""}`}
        style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      >
        <img src={src} alt={alt} loading="lazy" />
        <button
          type="button"
          className={styles.zoom}
          onClick={() => setOpen(true)}
        >
          <Icon name="zoom" size={14} />
          Збільшити
        </button>
      </div>
      {fullCaption && (
        <figcaption className={styles.caption}>
          {number && <b>{number}</b>} {caption}
        </figcaption>
      )}
      {open && (
        <Lightbox
          src={src}
          alt={alt}
          caption={fullCaption}
          onClose={() => setOpen(false)}
        />
      )}
    </figure>
  );
}
