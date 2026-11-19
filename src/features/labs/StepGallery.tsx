import { renderRich } from "@/components/common/renderRich";
import { Figure } from "./Figure";
import styles from "./StepGallery.module.scss";

export interface GalleryStep {
  text: string;
  image?: { src: string; alt: string; caption?: string };
}

export function StepGallery({ steps }: { steps: GalleryStep[] }) {
  return (
    <ol className={styles.gallery}>
      {steps.map((step, i) => (
        <li
          key={i}
          className={`${styles.step} ${step.image ? styles.withImage : ""}`}
        >
          <div className={styles.text}>
            <span className={styles.number}>{i + 1}</span>
            <p>{renderRich(step.text)}</p>
          </div>
          {step.image && (
            <Figure
              src={step.image.src}
              alt={step.image.alt}
              caption={step.image.caption}
              inline
            />
          )}
        </li>
      ))}
    </ol>
  );
}
