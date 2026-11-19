import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Lightbox.module.scss";

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      aria-label={caption ?? alt}
    >
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Закрити"
      >
        <Icon name="close" size={22} />
      </button>
      <figure className={styles.figure}>
        <img src={src} alt={alt} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </dialog>
  );
}
