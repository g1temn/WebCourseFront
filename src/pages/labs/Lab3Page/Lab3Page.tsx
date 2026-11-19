import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab3";
import { Callout, CodeListing, ControlQuestions, Figure, FigureGrid, Goals, LabFiles, LabHeader, LabSection, RefTable, StepList } from "@/features/labs";

const lab = getLab("lab-3")!;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab3Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="basics" title="Таблиці: загальні відомості" number={1}>
        <p>Таблиці в HTML організовуються як набір стовпців і рядків. Елементи таблиці можуть містити будь-які HTML-елементи: заголовки, списки, абзаци, графіку, а також елементи форм.</p>
        <p>Таблиці з невидимою межею довгий час використовувалися для верстки вебсторінок, дозволяючи розділяти документ на модульні блоки. Згодом їм на зміну прийшов сучасніший спосіб верстки — за допомогою шарів (блоків).</p>
        <p>Таблиця створюється тегом <code>{"<table>"}</code>, рядки — тегом <code>{"<tr>"}</code>, клітинки —{" "}<code>{"<td>"}</code> (звичайна) або <code>{"<th>"}</code> (заголовна). Якщо між <code>{"<td>"}</code> і{" "}<code>{"</td>"}</code> немає жодного символу чи нерозривного пробілу, межа клітинки не відображатиметься.</p>
        <p>Фіксована ширина, рамка шириною 2 пікселі та колір рамки.</p>
        <CodeListing title="Лістинг 3.1" file="Таблиця на два рядки і три стовпці" lang="html" code={data.basicTableListing} result={result(1, "Результат виконання лістингу 3.1")} />
      </LabSection>
      <LabSection id="attributes" title="Атрибути таблиці" number={2}>
        <RefTable title="Атрибути тега <table>" columns={["Атрибут", "Призначення"]} rows={data.tableAttributes} />
        <RefTable title="Атрибути рядків і клітинок" columns={["Тег", "Можливі атрибути"]} rows={data.cellAttributes} />
      </LabSection>
      <LabSection id="merge" title="Об'єднання клітинок" number={3}>
        <p>Для об'єднання клітинок використовують атрибути <code>colspan</code> — кількість клітинок, що об'єднуються по горизонталі, і <code>rowspan</code> — по вертикалі.</p>
        <CodeListing title="Лістинг 3.2" file="Об'єднання клітинок по вертикалі" lang="html" code={data.rowspanListing} result={result(2, "Результат виконання лістингу 3.2")} />
        <CodeListing title="Лістинг 3.3" file="Об'єднання клітинок по горизонталі" lang="html" code={data.colspanListing} result={result(3, "Результат виконання лістингу 3.3")} />
        <CodeListing title="Приклад" file="Приклад: поле для «хрестиків-нуликів»" lang="html" code={data.ticTacToeListing} result={result(4, "Результат: поле для «хрестиків-нуликів»")} />
        <Callout tone="modern">Таблиці сьогодні використовують лише для табличних даних. Макет сторінки (шапка, меню, вміст, підвал) верстають блоками за допомогою CSS Flexbox і Grid — так сторінка адаптується до телефона.</Callout>
      </LabSection>
      <Figure src="/labs/lab-3/files/zrazok-saitu.jpg" alt="Зразок шаблону сайту в таблиці" number="Рис. 3.1." caption="Шаблон сайту" />
      <FigureGrid
        figures={[
          { src: "/labs/lab-3/figures/table-task.webp", caption: "Таблиця для завдання з об'єднанням клітинок" },
          { src: "/labs/lab-3/figures/rounded-corner.webp", caption: "Заокруглені кути з окремих зображень" },
        ]}
      />
      <StepList slug="lab-3" steps={data.steps} />
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
