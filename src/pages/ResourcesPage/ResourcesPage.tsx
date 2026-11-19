import { useMemo, useState } from "react";
import cssIcon from "@/assets/images/tech-css.png";
import figmaIcon from "@/assets/images/tech-figma.png";
import htmlIcon from "@/assets/images/tech-html.png";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/ui/Badge";
import { FilterChips } from "@/components/ui/FilterChips";
import { Icon } from "@/components/ui/Icon";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getLab, labLabel, labs, plural, techNames } from "@/static-content/labs";
import { DOCS_INITIAL_COUNT, resources } from "@/static-content/resources";
import type { Resource, TechGroup } from "@/static-content/types";
import styles from "./ResourcesPage.module.scss";

type TechFilter = "all" | TechGroup;
const GROUPS: TechGroup[] = ["html", "css", "figma"];
const techIcons = { html: htmlIcon, css: cssIcon, figma: figmaIcon };
const kindLabels: Record<Resource["kind"], string> = { course: "Відеокурс", docs: "Документація", article: "Стаття" };
const coverSymbols: Record<TechGroup, string> = { html: "</>", css: "{ }", figma: "✦" };

function labsRange(slugs: string[]): string | undefined {
  const items = slugs.map(getLab).filter((lab) => lab !== undefined);
  if (items.length === 0) return undefined;
  if (items.length === 1) return `Лабораторна робота №${items[0].number}`;
  return `Лабораторні роботи №${items[0].number}–${items[items.length - 1].number}`;
}

export function ResourcesPage() {
  useDocumentTitle("Матеріали");
  const [tech, setTech] = useState<TechFilter>("all");
  const [lab, setLab] = useState("");
  const [openDocs, setOpenDocs] = useState<Record<string, boolean>>({});

  const filtered = useMemo(
    () =>
      resources.filter(
        (item) =>
          (tech === "all" || item.tech === tech) && (!lab || item.labSlugs.length === 0 || item.labSlugs.includes(lab)),
      ),
    [tech, lab],
  );
  const featured = resources
    .filter((item) => item.featured)
    .sort((a, b) => GROUPS.indexOf(a.tech) - GROUPS.indexOf(b.tech));
  const videos = filtered.filter((item) => item.kind === "course");
  const docs = filtered.filter((item) => item.kind === "docs");
  const articles = filtered.filter((item) => item.kind === "article");
  const labOptions = labs.filter((item) => tech === "all" || item.group === tech);

  const onTechChange = (value: TechFilter) => {
    setTech(value);
    if (lab && value !== "all" && getLab(lab)?.group !== value) setLab("");
  };

  return (
    <>
      <section className={styles.banner} aria-labelledby="resources-title">
        <Container>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ label: "Головна", to: "/" }, { label: "Матеріали" }]} />
          </div>
          <h1 id="resources-title" className={styles.title}>
            Матеріали
          </h1>
          <p className={styles.lead}>
            Відеокурси та документація українською мовою для повторення теми лабораторної роботи та поглибленого
            вивчення.
          </p>
          <div className={styles.filters}>
            <FilterChips
              label="Технологія"
              value={tech}
              onChange={onTechChange}
              options={[
                { value: "all", label: "Усі" },
                ...GROUPS.map((group) => ({ value: group, label: techNames[group] })),
              ]}
            />
            <label className={styles.labFilter}>
              <span>Для лабораторної роботи</span>
              <select value={lab} onChange={(event) => setLab(event.target.value)}>
                <option value="">Усі лабораторні роботи</option>
                {labOptions.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {labLabel(item)}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </Container>
      </section>

      <Container as="main" id="main" className={styles.main}>
        <section className={styles.featured} aria-labelledby="featured-title">
          <div>
            <div className={styles.eyebrow}>З чого почати</div>
            <h2 id="featured-title" className={styles.featuredTitle}>
              Рекомендовані матеріали для початку
            </h2>
            <p className={styles.featuredText}>
              По одному матеріалу для кожної технології курсу — для повторення основ перед виконанням лабораторної
              роботи.
            </p>
            <p className={styles.featuredNote}>
              <b>Реалізація:</b> картки розміщені через <code>position: absolute</code>, а порядок накладання задає{" "}
              <code>z-index</code> — відповідно до лабораторної роботи CSS №7.
            </p>
          </div>
          <div className={styles.stack}>
            {featured.map((item) => (
              <a key={item.id} href={item.url} target="_blank" rel="noopener" className={styles.stackCard}>
                <img src={techIcons[item.tech]} alt="" width={56} height={56} />
                <span className={styles.stackKind}>{kindLabels[item.kind]}</span>
                <b className={styles.stackTitle}>{item.title}</b>
                <span className={styles.stackAuthor}>
                  {item.author}
                  {item.kind === "course" && " · YouTube"}
                </span>
                <span className={styles.stackLink}>Відкрити ↗</span>
              </a>
            ))}
          </div>
        </section>

        {filtered.length === 0 && (
          <p className={styles.empty}>За обраними фільтрами матеріалів немає. Спробуйте інший фільтр.</p>
        )}

        {videos.length > 0 && (
          <section aria-labelledby="videos-title">
            <div className={styles.sectionHead}>
              <h2 id="videos-title">Відеокурси</h2>
              <span>{videos.length}</span>
            </div>
            <div className={styles.videos}>
              {videos.map((item) => (
                <article key={item.id} className={styles.video}>
                  <a href={item.url} target="_blank" rel="noopener" className={`${styles.cover} ${styles[item.tech]}`}>
                    <span className={styles.coverSymbol} aria-hidden="true">
                      {coverSymbols[item.tech]}
                    </span>
                    <span className={styles.play}>
                      <Icon name="play" size={22} />
                    </span>
                    <span className={styles.srOnly}>Дивитися «{item.title}» на YouTube</span>
                  </a>
                  <div className={styles.videoBody}>
                    <div className={styles.videoBadges}>
                      <Badge tech={item.tech}>{techNames[item.tech]}</Badge>
                      {labsRange(item.labSlugs) && <Badge>{labsRange(item.labSlugs)}</Badge>}
                    </div>
                    <h3 className={styles.videoTitle}>{item.title}</h3>
                    <p className={styles.videoText}>{item.description}</p>
                    <div className={styles.videoFoot}>
                      <span>{item.author}</span>
                      <a href={item.url} target="_blank" rel="noopener">
                        YouTube <Icon name="external" size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {docs.length > 0 && (
          <section aria-labelledby="docs-title">
            <div className={styles.sectionHead}>
              <h2 id="docs-title">Документація</h2>
              <span>{docs.length}</span>
            </div>
            <div className={styles.docs}>
              {GROUPS.map((group) => {
                const items = docs.filter((item) => item.tech === group);
                if (items.length === 0) return null;
                const open = openDocs[group];
                const shown = open ? items : items.slice(0, DOCS_INITIAL_COUNT);
                const rest = items.length - DOCS_INITIAL_COUNT;
                return (
                  <div key={group} className={`${styles.docCard} ${styles[group]}`}>
                    <div className={styles.docHead}>
                      <b>{techNames[group]}</b>
                      <span>
                        {items.length} {plural(items.length, "посилання", "посилання", "посилань")}
                      </span>
                    </div>
                    {shown.map((item) => {
                      const labNumbers = item.labSlugs.length === 1 ? getLab(item.labSlugs[0]) : undefined;
                      return (
                        <a key={item.id} href={item.url} target="_blank" rel="noopener" className={styles.doc}>
                          <span className={styles.docTitle}>
                            <b>{item.title}</b>
                            {labNumbers && <Badge tone="sunken" size="xs">№{labNumbers.number}</Badge>}
                            {item.lang === "en" && <Badge tone="sunken" size="xs">EN</Badge>}
                          </span>
                          <span className={styles.docText}>
                            {item.author === "Figma" ? item.description : `${item.author} · ${item.description}`}
                          </span>
                        </a>
                      );
                    })}
                    {rest > 0 && (
                      <button
                        type="button"
                        className={styles.docMore}
                        onClick={() => setOpenDocs((prev) => ({ ...prev, [group]: !open }))}
                      >
                        {open ? "Згорнути" : `Ще ${rest} ${plural(rest, "посилання", "посилання", "посилань")}`}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {articles.length > 0 && (
          <section aria-labelledby="articles-title">
            <div className={styles.sectionHead}>
              <h2 id="articles-title">Статті</h2>
              <span>{articles.length}</span>
            </div>
            <div className={styles.articles}>
              {articles.map((item) => (
                <a key={item.id} href={item.url} target="_blank" rel="noopener" className={styles.article}>
                  <span className={`${styles.articleIcon} ${styles[item.tech]}`}>
                    <Icon name="fileText" size={24} />
                  </span>
                  <span className={styles.articleText}>
                    <b>{item.title}</b>
                    <span>
                      {item.author} · {item.description}
                    </span>
                  </span>
                  <span className={styles.articleBadges}>
                    {item.labSlugs.map((slug) => {
                      const meta = getLab(slug);
                      return meta ? (
                        <Badge key={slug} tech={meta.group} size="xs">
                          {labLabel(meta)}
                        </Badge>
                      ) : null;
                    })}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
