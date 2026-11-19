import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageToc, PageTocDropdown } from "@/components/common/PageToc";
import { useActiveSection } from "@/components/common/toc";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import logoWhite from "@/assets/images/ntudp-logo-white.png";
import { courseBanner, courseToc } from "@/static-content/course";
import { university } from "@/static-content/site";
import { AboutSection } from "./sections/AboutSection";
import { LocationSection } from "./sections/LocationSection";
import { MethodicsSection } from "./sections/MethodicsSection";
import { ProcessSection } from "./sections/ProcessSection";
import { TopicsSection } from "./sections/TopicsSection";
import { VariantsSection } from "./sections/VariantsSection";
import styles from "./CoursePage.module.scss";

export function CoursePage() {
  useDocumentTitle("Про курс");
  const active = useActiveSection(courseToc.map((item) => item.id));

  return (
    <>
      <div className={styles.tocBar}>
        <Container>
          <PageTocDropdown items={courseToc} active={active} />
        </Container>
      </div>

      <section className={styles.banner} aria-labelledby="course-title">
        <Container>
          <div className={styles.crumbs}>
            <Breadcrumbs onDark items={[{ label: "Головна", to: "/" }, { label: "Про курс" }]} />
          </div>
          <img className={styles.logo} src={logoWhite} alt={university.fullName} width={640} height={255} />
          <h1 id="course-title" className={styles.title}>
            {courseBanner.title}
          </h1>
          <p className={styles.lead}>{courseBanner.text}</p>
          <dl className={styles.stats}>
            {courseBanner.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className={styles.layout}>
        <main id="main" className={styles.main}>
          <AboutSection />
          <TopicsSection />
          <ProcessSection />
          <VariantsSection />
          <LocationSection />
          <MethodicsSection />
        </main>
        <aside className={styles.aside}>
          <PageToc items={courseToc} active={active} />
        </aside>
      </Container>
    </>
  );
}
