import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AccordionItem } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { faq, FAQ_INITIAL_COUNT } from "@/static-content/faq";
import { getLab, labLabel } from "@/static-content/labs";
import styles from "./FaqSection.module.scss";

export function FaqSection() {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? faq : faq.slice(0, FAQ_INITIAL_COUNT);
  const hiddenCount = faq.length - FAQ_INITIAL_COUNT;

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <SectionHeading eyebrow="FAQ" title="Питання, що часто задаються" id="faq-title" />
          <p className={styles.text}>Якщо відповіді немає, поставте питання за допомогою форми нижче.</p>
        </div>
        <div className={styles.list}>
          {items.map((item, i) => {
            const lab = item.labSlug ? getLab(item.labSlug) : undefined;
            return (
              <AccordionItem
                key={item.id}
                defaultOpen={i === 0}
                summary={
                  <>
                    {item.question}
                    {lab && (
                      <Badge tech={lab.group} size="xs">
                        {labLabel(lab)}
                      </Badge>
                    )}
                  </>
                }
              >
                {item.answer}
              </AccordionItem>
            );
          })}
          {hiddenCount > 0 && (
            <button type="button" className={styles.more} onClick={() => setShowAll(!showAll)}>
              {showAll ? "Згорнути" : `Показати ще ${hiddenCount}`}
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
