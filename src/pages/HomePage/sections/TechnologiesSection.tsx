import cssIcon from "@/assets/images/tech-css.png";
import figmaIcon from "@/assets/images/tech-figma.png";
import htmlIcon from "@/assets/images/tech-html.png";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { technologies } from "@/static-content/home";
import { labs, plural } from "@/static-content/labs";
import styles from "./TechnologiesSection.module.scss";

const icons = { html: htmlIcon, css: cssIcon, figma: figmaIcon };

export function TechnologiesSection() {
  return (
    <section className={styles.section} aria-labelledby="tech-title">
      <Container>
        <SectionHeading eyebrow="Зміст дисципліни" title="Технології, що вивчаються" id="tech-title" />
        <div className={styles.grid}>
          {technologies.map((tech) => {
            const count = labs.filter((lab) => lab.group === tech.group).length;
            const countLabel = `${count} ${plural(count, "лабораторна робота", "лабораторні роботи", "лабораторних робіт")}`;
            return (
              <a key={tech.group} href={`#labs-${tech.group}`} className={`${styles.card} ${styles[tech.group]}`}>
                <img src={icons[tech.group]} alt="" className={styles.icon} width={104} height={104} />
                <span className={styles.body}>
                  <span className={styles.name}>{tech.title}</span>
                  <span className={styles.text}>{tech.text}</span>
                  <span className={styles.short}>
                    {tech.short}
                    <span className={styles.phoneCount}> · {countLabel}</span>
                  </span>
                  <span className={styles.count}>
                    {countLabel}
                    <Icon name="arrowRight" size={16} />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
