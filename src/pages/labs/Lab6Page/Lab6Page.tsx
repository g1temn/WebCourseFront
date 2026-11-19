import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab6";
import { Callout, CodeListing, ControlQuestions, Goals, LabHeader, LabSection, RefTable, StepList } from "@/features/labs";

const lab = getLab("lab-6")!;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab6Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="devtools" title="Інструменти розробника (Firebug)" number={1}>
        <p>Доповнення Firebug дозволяло досліджувати властивості будь-якого фрагмента html-документа з урахуванням стилів. Його розробили для браузера Mozilla Firefox, а Safari, Chrome та Opera перейняли цей підхід і вбудували власні інспектори в браузер як «Інструменти розробника».</p>
        <p>Інструменти відкриваються клавішею <kbd>F12</kbd>. Вкладка «Інспектор» (Elements) показує дерево документа ліворуч і стилі вибраного елемента праворуч. Значення властивостей можна змінювати просто на сторінці й одразу бачити результат — але після перезавантаження зміни зникають.</p>
        <Callout tone="modern">Firebug більше не підтримується: його функції повністю перейшли у вбудовані DevTools усіх браузерів. Відкрити їх можна також правою кнопкою миші → «Переглянути код» / «Inspect».</Callout>
      </LabSection>
      <LabSection id="connect" title="Підключення стилів" number={2}>
        <p>Правило CSS складається із <b>селектора</b> (до чого застосовується стиль) і блоку <b>оголошень</b> у фігурних дужках. Кожне оголошення — пара «властивість: значення;».</p>
        <CodeListing title="Приклад" file="Синтаксис правила CSS" lang="css" code={data.ruleListing} />
        <p>Стилі можна застосувати до документа трьома способами:</p>
        <CodeListing title="Приклад" file="Три способи підключення CSS" lang="html" code={data.linkListing} />
      </LabSection>
      <LabSection id="classes" title="Класи і тег span" number={3}>
        <p>Клас описується в CSS з крапкою (<code>.rich</code>) і призначається елементу атрибутом <code>class</code>. Один елемент може мати кілька класів через пробіл. Тег <code>{"<span>"}</code> дозволяє оформити окремі слова всередині абзацу.</p>
        <CodeListing title="Приклад" file="Класи та span" lang="html" code={data.classListing} result={result(1, "Результат: Класи та span")} />
      </LabSection>
      <LabSection id="text-properties" title="Властивості тексту" number={4}>
        <RefTable title="Властивості тексту" columns={["Властивість", "Можливі значення", "Призначення"]} rows={data.textProperties} searchable />
      </LabSection>
      <LabSection id="units-colors" title="Одиниці і кольори" number={5}>
        <RefTable title="Додаток Б – Одиниці довжини в CSS" columns={["Одиниця", "Тип", "Опис", "Приклад"]} rows={data.units} />
        <RefTable title="Додаток В – Способи запису кольорів" columns={["Спосіб", "Приклад", "Примітка"]} rows={data.colors} />
        <Callout tone="modern">Для екрана сьогодні найчастіше використовують <code>px</code>, <code>rem</code> (від розміру шрифту кореневого елемента) та <code>%</code>; <code>in</code>, <code>cm</code>, <code>pt</code> корисні хіба для друку. Кольори також записують як <code>hsl()</code> або з прозорістю: <code>rgb(255 0 0 / 50%)</code>.</Callout>
      </LabSection>
      <Callout tone="tip" title="Перші кроки — у DevTools">Кроки 1–5 виконуються в інструментах розробника на будь-якій сторінці (наприклад, на цій). Решту кроків можна виконати у вбудованому редакторі: створіть <code>index.html</code> і файл стилів <code>css/style.css</code>, підключений тегом <code>{"<link>"}</code>.</Callout>
      <StepList slug="lab-6" steps={data.steps} />
      <ControlQuestions items={data.questions} />
    </>
  );
}
