import deskPhoto from "@/assets/images/desk-laptop.jpg";
import { about } from "@/static-content/course";
import styles from "./sections.module.scss";

export function AboutSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <h2 id="about-title" className={styles.title}>
        Про дисципліну
      </h2>
      <div className={styles.about}>
        <img className={styles.aboutImage} src={deskPhoto} alt="Ноутбук із кодом на робочому столі" width={800} height={600} />
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
