import { Suspense, useRef } from "react";
import { Outlet, useParams } from "react-router";
import { PageToc, PageTocDropdown } from "@/components/common/PageToc";
import { useActiveSection, useTocItems } from "@/components/common/toc";
import { getLab } from "@/static-content/labs";
import { LabsMenu, LabsSidebar } from "./LabsSidebar";
import { PrevNext } from "./PrevNext";
import styles from "./LabLayout.module.scss";

export function LabLayout() {
  const { slug = "" } = useParams();
  const lab = getLab(slug);
  const mainRef = useRef<HTMLElement>(null);
  const toc = useTocItems(mainRef, slug);
  const active = useActiveSection(toc.map((item) => item.id));

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barInner}>
          <LabsMenu current={lab} />
          <PageTocDropdown items={toc} active={active} />
        </div>
      </div>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <LabsSidebar current={slug} />
        </aside>
        <main id="main" ref={mainRef} className={styles.main}>
          <Suspense
            fallback={<div className={styles.loading} aria-busy="true" />}
          >
            <Outlet />
          </Suspense>
          {lab && <PrevNext slug={lab.slug} />}
        </main>
        <aside className={styles.toc}>
          <PageToc items={toc} active={active} />
        </aside>
      </div>
    </>
  );
}
