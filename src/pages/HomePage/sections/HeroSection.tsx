import heroPhoto from "@/assets/images/hero-students.jpg";
import markWhite from "@/assets/images/ntudp-mark-white.png";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/static-content/home";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <img src={markWhite} alt="" />
              {hero.badges[0]}
            </span>
            <span className={styles.badge}>{hero.badges[1]}</span>
          </div>
          <h1 id="hero-title" className={styles.title}>
            {hero.titleStart} <span>{hero.titleAccent}</span>
          </h1>
          <p className={`${styles.lead} ${styles.leadFull}`}>{hero.text}</p>
          <p className={`${styles.lead} ${styles.leadShort}`}>{hero.textShort}</p>
          <div className={styles.actions}>
            <Button to="/labs" size="lg" icon="arrowRight">
              До лабораторних робіт
            </Button>
            <Button href="/editor" newWindow size="lg" variant="onDark" icon="external">
              Відкрити редактор
            </Button>
          </div>
          <dl className={styles.stats}>
            {hero.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className={styles.figure}>
          <img src={heroPhoto} alt={hero.photoAlt} width={1200} height={900} />
        </figure>
      </Container>
    </section>
  );
}
