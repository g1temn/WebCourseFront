import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { editorPromo } from "@/static-content/home";
import styles from "./EditorPromoSection.module.scss";

export function EditorPromoSection() {
  return (
    <section className={styles.section} aria-labelledby="editor-promo-title">
      <Container>
        <div className={styles.card}>
          <div className={styles.text}>
            <div className={styles.eyebrow}>{editorPromo.eyebrow}</div>
            <h2 id="editor-promo-title" className={styles.title}>
              {editorPromo.title}
            </h2>
            <p className={styles.lead}>{editorPromo.text}</p>
            <p className={styles.leadTablet}>{editorPromo.textShort}</p>
            <p className={styles.leadPhone}>
              На телефоні файли, код і результат розміщено на окремих вкладках. Зміни зберігаються автоматично.
            </p>
            <ul className={styles.features}>
              {editorPromo.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={20} strokeWidth={2.2} />
                  {feature}
                </li>
              ))}
            </ul>
            <div className={styles.cta}>
              <Button href="/editor" newWindow variant="light" size="lg" icon="external">
                Відкрити редактор
              </Button>
            </div>
          </div>
          <div className={styles.ctaTablet}>
            <Button href="/editor" newWindow variant="light" size="lg" icon="external">
              Відкрити
            </Button>
          </div>

          <div className={styles.preview} aria-hidden="true">
            <div className={styles.previewCode}>
              <div className={styles.previewTabs}>
                <span className={styles.previewTabActive}>style.css</span>
                <span>index.html</span>
              </div>
              <pre>
                <span className={styles.sel}>h1</span> {"{\n  "}
                <span className={styles.prop}>color</span>: <span className={styles.val}>#B3261E</span>
                {";\n  "}
                <span className={styles.prop}>font-size</span>: <span className={styles.val}>32px</span>
                {";\n}\n"}
                <span className={styles.sel}>.card</span> {"{\n  "}
                <span className={styles.prop}>padding</span>: <span className={styles.val}>16px</span>
                {";\n  "}
                <span className={styles.prop}>border-radius</span>: <span className={styles.val}>12px</span>
                {";\n}"}
              </pre>
            </div>
            <div className={styles.previewResult}>
              <div className={styles.previewHeading}>Заголовок</div>
              <div className={styles.previewCard}>Картка з відступами та заокругленими кутами.</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
