import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./MainLayout.module.scss";

export function MainLayout() {
  const { pathname, hash } = useLocation();
  const wide = pathname.startsWith("/labs");

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className={styles.skip}>
        Перейти до вмісту
      </a>
      <Header wide={wide} />
      <Suspense fallback={<div className={styles.loading} aria-busy="true" />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
