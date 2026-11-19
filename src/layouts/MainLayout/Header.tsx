import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Logo } from "@/components/common/Logo";
import { Icon } from "@/components/ui/Icon";
import { navigation } from "@/static-content/site";
import styles from "./Header.module.scss";

export function Header({ wide }: { wide?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === "/labs" ? pathname.startsWith("/labs") : undefined;

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} ${wide ? styles.wide : ""}`}>
        <Link
          to="/"
          className={styles.brand}
          aria-label="Web-технології та web-дизайн — головна"
        >
          <span className={styles.logoFull}>
            <Logo withUniversity />
          </span>
          <span className={styles.logoShort}>
            <Logo />
          </span>
        </Link>

        <nav aria-label="Головне меню" className={styles.nav}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={"end" in item ? item.end : undefined}
              className={({ isActive: active }) =>
                `${styles.navLink} ${(isActive(item.to) ?? active) ? styles.navActive : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="/editor"
            target="_blank"
            rel="noopener"
            className={styles.editorButton}
          >
            Редактор
            <Icon name="external" size={16} />
          </a>
          <a
            href="/editor"
            target="_blank"
            rel="noopener"
            className={styles.editorIcon}
            aria-label="Відкрити редактор коду"
          >
            <Icon name="code" size={20} />
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className={styles.menu}>
          <nav aria-label="Мобільне меню" className={styles.menuNav}>
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={"end" in item ? item.end : undefined}
                className={({ isActive: active }) =>
                  `${styles.menuLink} ${(isActive(item.to) ?? active) ? styles.menuActive : ""}`
                }
              >
                {item.label}
                <Icon name="chevronRight" size={18} />
              </NavLink>
            ))}
          </nav>
          <a
            href="/editor"
            target="_blank"
            rel="noopener"
            className={styles.menuEditor}
          >
            Відкрити редактор
            <Icon name="external" size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
