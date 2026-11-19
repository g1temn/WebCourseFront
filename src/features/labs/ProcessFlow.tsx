import { renderRich } from "@/components/common/renderRich";
import styles from "./ProcessFlow.module.scss";

export function ProcessFlow({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className={styles.flow}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.number}>{i + 1}</span>
          <b>{step.title}</b>
          <span className={styles.text}>{renderRich(step.text)}</span>
        </li>
      ))}
    </ol>
  );
}
