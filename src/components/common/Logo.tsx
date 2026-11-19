import markWhite from "@/assets/images/ntudp-mark-white.png";
import styles from "./Logo.module.scss";

interface LogoProps {
  size?: "md" | "lg";
  withUniversity?: boolean;
}

export function Logo({ size = "md", withUniversity }: LogoProps) {
  return (
    <span className={`${styles.logo} ${styles[size]}`}>
      <LogoMark />
      <span className={styles.name}>
        <b>Web-технології</b>
        <span>та web-дизайн</span>
      </span>
      {withUniversity && (
        <>
          <span className={styles.divider} aria-hidden="true" />
          <img
            className={styles.university}
            src={markWhite}
            alt="НТУ «Дніпровська політехніка»"
          />
        </>
      )}
    </span>
  );
}

export function LogoMark({ small }: { small?: boolean }) {
  return (
    <span
      className={`${styles.mark} ${small ? styles.markSmall : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 7l-5 5 5 5" />
        <path d="M16 7l5 5-5 5" />
        <path d="M13.6 4.5l-3.2 15" />
      </svg>
    </span>
  );
}
