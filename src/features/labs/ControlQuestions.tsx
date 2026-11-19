import { renderRich } from "@/components/common/renderRich";
import { LabSection } from "./LabSection";
import styles from "./ControlQuestions.module.scss";

export function ControlQuestions({
  items,
  id = "questions",
  title = "Контрольні питання",
}: {
  items: string[];
  id?: string;
  title?: string;
}) {
  return (
    <LabSection id={id} title={title}>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item}>{renderRich(item)}</li>
        ))}
      </ol>
    </LabSection>
  );
}
