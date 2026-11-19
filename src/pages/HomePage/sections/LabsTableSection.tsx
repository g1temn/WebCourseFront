import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FilterChips } from "@/components/ui/FilterChips";
import { Icon } from "@/components/ui/Icon";
import { labLabel, labs, plural, techNames } from "@/static-content/labs";
import type { TechGroup } from "@/static-content/types";
import styles from "./LabsTableSection.module.scss";

type Filter = "all" | TechGroup;
const PHONE_INITIAL = 6;

export function LabsTableSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [showAll, setShowAll] = useState(false);
  const { hash } = useLocation();

  const [prevHash, setPrevHash] = useState(hash);
  if (prevHash !== hash) {
    setPrevHash(hash);
    const match = /^#labs-(html|css|figma)$/.exec(hash);
    if (match) setFilter(match[1] as TechGroup);
  }
  useEffect(() => {
    if (/^#labs-/.test(hash)) document.getElementById("labs")?.scrollIntoView();
  }, [hash]);

  const visible = labs.filter((lab) => filter === "all" || lab.group === filter);
  const count = (group: TechGroup) => labs.filter((lab) => lab.group === group).length;
  const options = [
    { value: "all" as const, label: `Усі · ${labs.length}`, short: "Усі" },
    ...(["html", "css", "figma"] as const).map((group) => ({
      value: group,
      label: `${techNames[group]} · ${count(group)}`,
      short: techNames[group],
    })),
  ];
  const hiddenOnPhone = !showAll && visible.length > PHONE_INITIAL;

  return (
    <section id="labs" className={styles.section} aria-labelledby="labs-title">
      <Container>
        <div className={styles.head}>
          <SectionHeading eyebrow="Зміст курсу" title="Лабораторні роботи" id="labs-title" />
          <div className={styles.filtersFull}>
            <FilterChips label="Фільтр за технологією" options={options} value={filter} onChange={setFilter} />
          </div>
          <div className={styles.filtersShort}>
            <FilterChips
              label="Фільтр за технологією"
              options={options.map((o) => ({ value: o.value, label: o.short }))}
              value={filter}
              onChange={setFilter}
            />
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className={styles.caption}>
              Перелік лабораторних робіт: {visible.length}{" "}
              {plural(visible.length, "робота", "роботи", "робіт")}
            </caption>
            <thead>
              <tr>
                <th scope="col" className={styles.colLab}>
                  Робота
                </th>
                <th scope="col">Тема</th>
                <th scope="col" className={styles.colTopic}>
                  Зміст дисципліни
                </th>
                <th scope="col" className={styles.colArrow}>
                  <span className={styles.srOnly}>Відкрити</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((lab, i) => (
                <tr key={lab.slug} className={i >= PHONE_INITIAL && hiddenOnPhone ? styles.phoneHidden : undefined}>
                  <td className={styles.colLab}>
                    <Badge tech={lab.group}>{labLabel(lab)}</Badge>
                  </td>
                  <td className={styles.colTitle}>
                    <Link to={`/labs/${lab.slug}`} className={styles.link}>
                      {lab.title}
                    </Link>
                  </td>
                  <td className={styles.colTopic}>{lab.topic}</td>
                  <td className={styles.colArrow}>
                    <Icon name="arrowRight" size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {hiddenOnPhone && (
            <button type="button" className={styles.more} onClick={() => setShowAll(true)}>
              Показати всі {visible.length} {plural(visible.length, "роботу", "роботи", "робіт")}
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
