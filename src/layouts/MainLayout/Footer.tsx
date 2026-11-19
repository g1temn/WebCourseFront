import { Link } from "react-router";
import logoWhite from "@/assets/images/ntudp-logo-white.png";
import { LogoMark } from "@/components/common/Logo";
import { MapEmbed } from "@/components/common/MapEmbed";
import { copyright, footerText, university } from "@/static-content/site";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <div className={styles.cards}>
              <div className={styles.brandCard}>
                <div className={styles.brand}>
                  <LogoMark small />
                  <span className={styles.brandName}>
                    <b>Web-технології</b>
                    <span>та web-дизайн</span>
                  </span>
                </div>
                <img
                  className={styles.university}
                  src={logoWhite}
                  alt={university.fullName}
                />
              </div>
              <Link
                to="/course#location"
                className={styles.mapCard}
                aria-label="Мапа розташування університету. Відкрити розділ «Розташування університету»"
              >
                <MapEmbed compact />
                <span className={styles.mapBar}>
                  Розташування університету →
                </span>
              </Link>
            </div>
            <p className={styles.text}>{footerText}</p>
          </div>

          <div className={styles.column}>
            <b>Сайт</b>
            <Link to="/course">Про курс</Link>
            <Link to="/labs">Лабораторні роботи</Link>
            <Link to="/resources">Матеріали</Link>
            <a href="/editor" target="_blank" rel="noopener">
              Редактор коду
            </a>
          </div>

          <address className={styles.column}>
            <b>Адреса</b>
            <span>{university.street}</span>
            <span>{university.city}</span>
          </address>
        </div>
        <div className={styles.bottom}>{copyright}</div>
      </div>
    </footer>
  );
}
