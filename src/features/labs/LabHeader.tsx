import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { renderRich } from "@/components/common/renderRich";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { labLabel, plural, techNames } from "@/static-content/labs";
import { methodicsByGroup } from "@/static-content/site";
import type { LabMeta } from "@/static-content/types";
import styles from "./LabHeader.module.scss";

export function LabHeader({ lab }: { lab: LabMeta }) {
  return (
    <header className={styles.header}>
      <div className={styles.crumbs}>
        <Breadcrumbs
          items={[
            { label: "Головна", to: "/" },
            { label: "Лабораторні роботи", to: "/#labs" },
            { label: techNames[lab.group] },
            { label: `№${lab.number}` },
          ]}
        />
      </div>
      <div className={styles.badges}>
        <Badge tech={lab.group} size="md">
          {labLabel(lab)}
        </Badge>
        <Badge size="md">
          {lab.hours} {plural(lab.hours, "година", "години", "годин")}
        </Badge>
      </div>
      <h1 className={styles.title}>{lab.title}</h1>
      <p className={styles.lead}>{renderRich(lab.lead)}</p>
      <div className={styles.actions}>
        {lab.hasEditor && (
          <Button href="/editor" newWindow icon="external">
            Відкрити редактор
          </Button>
        )}
        <Button
          href={methodicsByGroup[lab.group]}
          download
          variant="secondary"
          iconLeft="download"
        >
          Методичні вказівки, PDF
        </Button>
      </div>
    </header>
  );
}
