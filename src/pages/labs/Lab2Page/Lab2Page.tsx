import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab2";
import { Callout, CodeListing, Compare, ControlQuestions, Figure, Goals, LabFiles, LabHeader, LabSection, RefTable, StepList } from "@/features/labs";

const lab = getLab("lab-2")!;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab2Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="images" title="Зображення" number={1}>
        <p>Вставка картинок в html-документ здійснюється тегом <code>{"<img>"}</code>. Тег можна записати вручну і потім за допомогою автодоповнення або панелі Inspector вказати його атрибути, або скористатися кнопкою Image на панелі інструментів HTML програми HTMLPad.</p>
        <RefTable title="Атрибути тега <img>" columns={["Атрибут", "Призначення"]} rows={data.imgAttributes} searchable />
        <CodeListing title="Приклад" file="Приклад вставки зображення з обтіканням" lang="html" code={data.imgListing} result={result(1, "Результат: Приклад вставки зображення з обтіканням")} />
        <Callout tone="modern">Атрибути <code>align</code>, <code>border</code>, <code>hspace</code>, <code>vspace</code> і <code>lowsrc</code>{" "}у HTML5 застарілі — розмір, відступи й обтікання задають через CSS. Атрибут <code>alt</code> навпаки обов'язковий: його зачитують програми екранного доступу.</Callout>
      </LabSection>
      <LabSection id="lists" title="Списки" number={2}>
        <p>У мові HTML розрізняють такі види списків:</p>
        <ul>
          <li>маркіровані списки — теги <code>{"<ul>"}</code> і <code>{"<li>"}</code>;</li>
          <li>нумеровані списки — теги <code>{"<ol>"}</code> і <code>{"<li>"}</code>;</li>
          <li>списки визначень — теги <code>{"<dl>"}</code>, <code>{"<dt>"}</code>, <code>{"<dd>"}</code>.</li>
        </ul>
        <Compare
          items={[
            { title: "Маркірований `<ul>`", code: '<ul type="square">\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>' },
            { title: "Нумерований `<ol>`", code: '<ol type="I" start="15">\n  <li>Європа</li>\n  <li>Азія</li>\n</ol>' },
            { title: "Визначень `<dl>`", code: "<dl>\n  <dt>HTML</dt>\n  <dd>Мова розмітки</dd>\n</dl>" },
          ]}
        />
        <p>За замовчуванням елементи маркірованого списку позначаються чорним кружечком. Атрибут <code>type</code> змінює стиль маркера (<code>disc</code>, <code>circle</code>, <code>square</code>).</p>
        <CodeListing title="Лістинг 2.1" file="Приклад маркірованого списку" lang="html" code={data.ulListing} result={result(2, "Результат виконання лістингу 2.1")} />
        <p>Для нумерованого списку атрибут <code>type</code> обирає стиль нумерації (<code>1</code>, <code>A</code>,{" "}<code>a</code>, <code>I</code>, <code>i</code>), а <code>start</code> — з якого номера почати. Атрибут{" "}<code>value</code> тега <code>{"<li>"}</code> задає номер конкретного елемента.</p>
        <CodeListing title="Лістинг 2.2" file="Приклад нумерованого списку" lang="html" code={data.olListing} result={result(3, "Результат виконання лістингу 2.2")} />
        <p>Список визначень складається з термінів (<code>{"<dt>"}</code>) і їх визначень (<code>{"<dd>"}</code>): спочатку термін, нижче — визначення, потім наступний термін.</p>
        <CodeListing title="Лістинг 2.3" file="Приклад списку визначень" lang="html" code={data.dlListing} result={result(4, "Результат виконання лістингу 2.3")} />
        <p>Список можна вкласти в елемент іншого списку.</p>
        <CodeListing title="Приклад" file="Багаторівневий список" lang="html" code={data.nestedListing} result={result(5, "Результат: Багаторівневий список")} />
      </LabSection>
      <LabSection id="links" title="Посилання" number={3}>
        <p>Посилання (гіперзв'язок) — фрагмент тексту або графіки, що посилається на іншу позицію в тому ж документі або на об'єкт в іншому документі, можливо, на іншому сервері. Посилання створюють тегом <code>{"<a>"}</code> (anchor — якір).</p>
        <RefTable title="Атрибути тега <a>" columns={["Атрибут", "Призначення"]} rows={data.aAttributes} />
        <Callout tone="warning">Посилаючись на іменований якір, ставте знак <code>#</code> перед ім'ям: <code>{'<a href="#image">'}</code>. Без нього браузер шукатиме файл з таким ім'ям.</Callout>
        <CodeListing title="Лістинг 2.4" file="Приклад використання посилань" lang="html" code={data.linksListing} />
        <Callout tone="modern">Замість <code>{"<a name=\"…\">"}</code> якорем сьогодні служить атрибут <code>id</code> будь-якого елемента:{" "}<code>{"<h2 id=\"spisok\">"}</code> і посилання <code>{"<a href=\"#spisok\">"}</code>. Так влаштований і «Зміст сторінки» на цьому сайті.</Callout>
      </LabSection>
      <Figure src="/labs/lab-2/files/lab2.jpg" alt="Зразок виконаної лабораторної №2" caption="Зразок виконання лабораторної роботи №2" />
      <StepList slug="lab-2" steps={data.steps} />
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
