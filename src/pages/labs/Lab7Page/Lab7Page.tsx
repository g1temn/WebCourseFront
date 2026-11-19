import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab7";
import { Callout, CodeListing, Compare, ControlQuestions, Goals, LabFiles, LabHeader, LabSection, StepList } from "@/features/labs";

const lab = getLab("lab-7")!;

const roundedListing = `<style>
  .ugol { width: 300px; background: #74C440 url(fon.jpg) repeat-x; }
  .ugol-tl { background: url(panel-top-left.gif) no-repeat left top; }
  .ugol-tr { background: url(panel-top-right.gif) no-repeat right top; }
  .ugol-bl { background: url(panel-bottom-left.gif) no-repeat left bottom; }
  .ugol-br { background: url(panel-bottom-right.gif) no-repeat right bottom; padding: 15px; }
</style>

<div class="ugol">
  <div class="ugol-tl"><div class="ugol-tr"><div class="ugol-bl"><div class="ugol-br">
    Блок із заокругленими кутами
  </div></div></div></div>
</div>`;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab7Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="blocks" title="Блоки div і span" number={1}>
        <p><code>{"<div>"}</code> — блоковий елемент: займає всю доступну ширину і починається з нового рядка.{" "}<code>{"<span>"}</code> — рядковий елемент: оформлює частину тексту, не розриваючи рядок. За допомогою CSS блокам задають розміри (<code>width</code>, <code>height</code>), фон, рамку (<code>border</code>), внутрішні (<code>padding</code>) і зовнішні (<code>margin</code>) відступи.</p>
      </LabSection>
      <LabSection id="layout" title="Розташування блоків" number={2}>
        <p>За замовчуванням блоки розташовуються один під одним. Оголошення <code>float: left</code> розміщує їх по горизонталі, а <code>margin-left</code> додає відстань між ними.</p>
        <CodeListing title="Приклад" file="Блоки з класом k1 по горизонталі" lang="html" code={data.blockListing} result={result(1, "Результат: Блоки з класом k1 по горизонталі")} />
        <p>Ширина блоків задана у відсотках — вона змінюється разом з шириною вікна.</p>
        <CodeListing title="Приклад" file="Горизонтальний світлофор" lang="html" code={data.trafficLightListing} result={result(2, "Результат: Горизонтальний світлофор")} />
        <Callout tone="modern">Для розташування блоків поруч сьогодні використовують <b>Flexbox</b>: <code>display: flex; gap: 10px;</code> на батьківському блоці. <code>float</code> залишився для обтікання картинок текстом.</Callout>
      </LabSection>
      <LabSection id="display-visibility" title="display і visibility" number={3}>
        <Compare columns={2} items={[{ title: "display: none", points: data.displayItems }, { title: "visibility: hidden", points: data.visibilityItems }]} />
      </LabSection>
      <LabSection id="borders-background" title="Фон і рамки" number={4}>
        <p>Кожній стороні рамки можна задати власний тип лінії (<code>solid</code>, <code>dashed</code>, <code>dotted</code>,{" "}<code>double</code>), а фон складається з кольору, зображення, повторення і позиції.</p>
        <CodeListing title="Приклад" file="Різні рамки та фонове зображення" lang="html" code={data.bordersListing} result={result(3, "Результат: Різні рамки та фонове зображення")} />
      </LabSection>
      <LabSection id="position" title="Позиціонування і z-index" number={5}>
        <p><code>position: absolute</code> разом з <code>left</code> і <code>top</code> розміщує блок у заданій точці, тож блоки можуть накладатися. Порядок накладання визначає <code>z-index</code>: блок з більшим значенням лежить вище.</p>
        <CodeListing title="Приклад" file="Блоки один над одним" lang="html" code={data.positionListing} result={result(4, "Результат: Блоки один над одним")} />
      </LabSection>
      <LabSection id="rounded" title="Заокруглені кути" number={6}>
        <p>У методичці заокруглені кути створюються з чотирьох вкладених блоків: зовнішній блок має клас <code>ugol</code>, а кожен вкладений — фонове зображення одного кута (файли <code>panel-top-left.gif</code> тощо з архіву).</p>
        <CodeListing title="Приклад" file="Чотири вкладені блоки з кутами" lang="html" code={roundedListing} />
        <Callout tone="modern">Сьогодні те саме робить одна властивість: <code>border-radius: 12px;</code> — без зображень і вкладених блоків.</Callout>
      </LabSection>
      <LabSection id="opacity" title="Прозорість при наведенні" number={7}>
        <CodeListing title="Приклад" file="Зміна прозорості зображення при наведенні" lang="html" code={data.opacityListing} result={result(5, "Результат: Зміна прозорості зображення при наведенні")} />
        <Callout tone="modern">Методичка наводить окремі рядки для Internet Explorer (<code>filter: alpha(opacity=40)</code>). IE більше не використовується, тож досить стандартної властивості <code>opacity</code>.</Callout>
      </LabSection>
      <StepList slug="lab-7" steps={data.steps} />
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
