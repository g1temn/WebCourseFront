import { getLab } from "@/static-content/labs";
import { figures9_2 } from "@/static-content/labs/figmaFigures";
import * as data from "@/static-content/labs/lab9-2";
import { Callout, Compare, ControlQuestions, Figure, FigureGrid, Goals, LabFiles, LabHeader, LabSection, RefTable, ReportRequirements, Rich, StepList } from "@/features/labs";

const lab = getLab("lab-9-2")!;
const fig = (number: string) => figures9_2.find((f) => f.number === `Рис. ${number}.`)!;
const practiceFigures = figures9_2.filter((f) => Number(f.number.split(".")[1]) >= 17);

export default function Lab9_2Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="self-prep" title="Завдання для самопідготовки">
        <ol>{data.selfPrepQuestions.map((item) => (<li key={item}><Rich text={item} /></li>))}</ol>
      </LabSection>
      <LabSection id="page-elements" title="Основні елементи сторінки" number={1}>
        <p>Унікальний стиль вирізняє сайт серед конкурентів, тому дизайнери часто обирають напрям мистецтва і працюють у ньому; особливо популярним став мінімалізм. Сторінка складається з типових елементів:</p>
        <Figure {...fig("2.1")} alt="Схема сторінки з підписаними елементами" />
        <RefTable title="Основні елементи сторінки (рис. 2.1)" columns={["Елемент", "Опис"]} rows={data.pageElements} />
      </LabSection>
      <LabSection id="layouts" title="Фіксований і еластичний макет" number={2}>
        <Compare columns={2} items={[{ title: "Фіксований макет", points: data.fixedLayout }, { title: "Еластичний макет", points: data.fluidLayout }]} />
      </LabSection>
      <LabSection id="responsive-adaptive" title="Responsive vs Adaptive" number={3}>
        <p>Є два основні підходи до сайтів, що підлаштовуються під різні пристрої. Вони вирішують одну задачу різними способами, а їх поєднання дає найкращий результат.</p>
        <FigureGrid figures={[fig("2.3"), fig("2.4")]} />
        <Compare columns={2} items={[{ title: "Responsive Design (чуйний)", points: data.responsiveItems }, { title: "Adaptive Design (адаптивний)", points: data.adaptiveItems }]} />
        <Callout tone="modern">Сьогодні майже всі сайти роблять чуйними: одна верстка з CSS Grid, Flexbox і медіазапитами{" "}<code>@media (min-width: 768px)</code>. Цей сайт теж так зроблений — спробуйте змінити ширину вікна.</Callout>
      </LabSection>
      <LabSection id="images" title="Робота з картинками" number={4}>
        <p>Для лабораторної можна брати будь-які картинки, наприклад якісні фото з unsplash.com (пошук англійською). Є два способи додати картинку:</p>
        <ul>{data.imageWays.map((item) => (<li key={item}><Rich text={item} /></li>))}</ul>
        <FigureGrid figures={figures9_2.filter((f) => /^Рис\. 2\.(5|6|7|8|9|10)\.$/.test(f.number))} />
      </LabSection>
      <LabSection id="grid" title="Фігури, сітка і колонки" number={5}>
        <p>Область можна поділити на колонки або сітку розміщення елементів (Layout grid). Ілюстратори переважно користуються сіткою, а веб-дизайнери — колонками: для великих екранів область найчастіше ділять на{" "}<b>12 колонок</b>, не використовуючи для тексту по дві колонки з обох боків.</p>
        <FigureGrid figures={figures9_2.filter((f) => /^Рис\. 2\.(11|12|13|14|15|16)\.$/.test(f.number))} />
        <RefTable title="Найпоширеніші розміри екранів для макетів" columns={["Розмір", "Пристрій"]} rows={data.screenSizes} />
      </LabSection>
      <StepList slug="lab-9-2" id="practice" title="Практична частина: макет 1440 / 1024 / 425" steps={data.practiceSteps} initial={10} intro={<p>Потрібно створити макет сайту для трьох пристроїв: <b>1440×960</b>, <b>1024×768</b> і <b>425×778</b>. Іконки можна взяти з flaticon.com. Важливо для лабораторної №3: макети з розгорткою меню «Асортимент» мають бути ідентичними головній сторінці.</p>} />
      <LabSection id="practice-figures" title="Рисунки до практичної частини" tocLabel="Рисунки">
        <FigureGrid figures={practiceFigures} />
        <Figure src="/labs/lab-9-2/files/1440-golovna.webp" alt="Макет головної сторінки 1440×960" caption="Результат: головна сторінка 1440×960" />
      </LabSection>
      <LabSection id="independent" title="Самостійна робота">
        <p>На основі отриманих знань розробіть дизайн-макет власного сайту відповідно до варіанту індивідуальної роботи. Макет повинен складатися з <b>3–5 сторінок</b>. Викладачу надайте посилання на макет.</p>
        <ReportRequirements />
      </LabSection>
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
