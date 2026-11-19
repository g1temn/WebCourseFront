import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  useDocumentTitle("Сторінку не знайдено");
  return (
    <main id="main" className={styles.page}>
      <Container className={styles.inner}>
        <div className={styles.code} aria-hidden="true">
          &lt;404/&gt;
        </div>
        <h1 className={styles.title}>Сторінку не знайдено</h1>
        <p className={styles.text}>
          Можливо, адресу введено з помилкою або сторінку перенесено. Перейдіть на головну або до переліку
          лабораторних робіт.
        </p>
        <div className={styles.actions}>
          <Button to="/" size="lg">
            На головну
          </Button>
          <Button to="/labs" variant="secondary" size="lg" icon="arrowRight">
            Лабораторні роботи
          </Button>
        </div>
      </Container>
    </main>
  );
}
