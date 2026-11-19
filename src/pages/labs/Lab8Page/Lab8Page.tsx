import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab8";
import { Callout, CodeListing, ControlQuestions, Figure, Goals, LabFiles, LabHeader, LabSection, RefTable, StepList } from "@/features/labs";

const lab = getLab("lab-8")!;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab8Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="tables" title="Стилізація таблиць" number={1}>
        <p>Таблиця складається з частин <code>{"<caption>"}</code>, <code>{"<thead>"}</code>, <code>{"<tbody>"}</code>{" "}і <code>{"<tfoot>"}</code>, а <code>{"<colgroup>"}</code>/<code>{"<col>"}</code> описують стовпці. Якщо призначити таблиці клас, кожну частину можна оформити окремо.</p>
        <RefTable title="Стилі частин таблиці" columns={["Селектор", "Що оформлює"]} rows={data.tableParts} />
        <p>Рамки таблиці й осередків за замовчуванням подвійні; властивість <code>border-collapse: collapse</code> зливає їх в одну лінію.</p>
        <CodeListing title="Приклад" file="Таблиця з класом frmtbl" lang="html" code={data.tableListing} result={result(1, "Результат: Таблиця з класом frmtbl")} />
      </LabSection>
      <LabSection id="lists" title="Стилізація списків" number={2}>
        <RefTable title="Властивості списків" columns={["Властивість", "Призначення"]} rows={data.listProperties} />
        <CodeListing title="Приклад" file="Маркер-зображення всередині списку" lang="html" code={data.listListing} result={result(2, "Результат: Маркер-зображення всередині списку")} />
      </LabSection>
      <LabSection id="clip" title="Обрізання (clip)" number={3}>
        <p>Властивість <code>clip: rect(верх, право, низ, ліво)</code> показує лише прямокутну частину блоку. Вона працює тільки для абсолютно позиціонованих елементів.</p>
        <CodeListing title="Приклад" file="Кадрована частина тексту" lang="html" code={data.clipListing} result={result(3, "Результат: Кадрована частина тексту")} />
        <Callout tone="modern"><code>clip</code> застаріла. Сучасна заміна — <code>clip-path: inset(40px 0 0 40px)</code>, яка працює з будь-якими елементами й уміє обрізати також по колу чи багатокутнику.</Callout>
      </LabSection>
      <LabSection id="overflow" title="Переповнення (overflow)" number={4}>
        <RefTable title="Значення overflow" columns={["Значення", "Що відбувається"]} rows={data.overflowValues} />
        <CodeListing title="Приклад" file="Велике зображення в блоці 200×200" lang="html" code={data.overflowListing} result={result(4, "Результат: Велике зображення в блоці 200×200")} />
      </LabSection>
      <LabSection id="scrollbars" title="Смуги прокрутки" number={5}>
        <p>Internet Explorer дозволяв змінювати колір смуг прокрутки нестандартними властивостями:</p>
        <Figure src="/labs/lab-8/figures/scrollbars.webp" alt="Схема частин смуги прокрутки з назвами властивостей" caption="Властивості частин смуги прокрутки в Internet Explorer" maxWidth={360} />
        <CodeListing title="Приклад" file="Кольорові смуги прокрутки в IE" lang="css" code={data.scrollbarListing} />
        <Callout tone="modern">IE більше не підтримується. Сьогодні колір смуг задається стандартною властивістю{" "}<code>scrollbar-color</code> з двома кольорами — повзунка і доріжки (наприклад,{" "}<code>scrollbar-color: red yellow;</code>), а товщина — <code>scrollbar-width</code>.</Callout>
      </LabSection>
      <StepList slug="lab-8" steps={data.steps} />
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
