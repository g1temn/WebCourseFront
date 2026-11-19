import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab4";
import { Callout, CodeListing, ControlQuestions, Figure, Goals, LabFiles, LabHeader, LabSection, LabSubheading, ProcessFlow, RefTable, StepList } from "@/features/labs";

const lab = getLab("lab-4")!;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab4Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="basics" title="Форми: загальні відомості" number={1}>
        <p>Форми призначені для організації взаємодії з користувачем. Вони дозволяють вводити текст, обирати значення зі списків або кнопками, організовувати обмін інформацією між вебсторінкою і сервером. Найширше форми застосовуються для пошуку, реєстрації, заповнення анкет, тестів.</p>
        <p>Як правило, форма працює спільно зі сценарієм на сервері, що обробляє введену інформацію:</p>
        <ProcessFlow steps={data.processSteps} />
      </LabSection>
      <LabSection id="form-tag" title="Атрибути <form>" number={2}>
        <p>Форма визначається тегами <code>{"<form>...</form>"}</code>, між якими розташовуються поля введення, кнопки та елементи оформлення.</p>
        <RefTable title="Атрибути тега <form>" columns={["Атрибут", "Призначення"]} rows={data.formAttributes} />
      </LabSection>
      <LabSection id="controls" title="Елементи керування" number={3}>
        <p>Сама форма — лише контейнер для елементів керування. Найуніверсальніший з них — тег <code>{"<input>"}</code>: його вигляд визначає атрибут <code>type</code>.</p>
        <RefTable title="Значення атрибута type" columns={["type", "Елемент"]} rows={data.inputTypes} />
        <RefTable title="Атрибути тега <input>" columns={["Атрибут", "Призначення"]} rows={data.inputAttributes} searchable />
        <LabSubheading>Поле введення і пароль</LabSubheading>
        <CodeListing title="Приклад" file="Текстове поле та поле пароля" lang="html" code={data.textInputsListing} result={result(1, "Результат: Текстове поле та поле пароля")} />
        <LabSubheading>Перемикачі та прапорці</LabSubheading>
        <p>Перемикачі (<code>radio</code>) групуються за однаковим значенням <code>name</code> — у групі можна обрати лише один. Прапорці (<code>checkbox</code>) незалежні; щоб прапорець був встановлений при завантаженні, вкажіть{" "}<code>checked</code>.</p>
        <CodeListing title="Приклад" file="Перемикачі та прапорець" lang="html" code={data.choiceListing} result={result(2, "Результат: Перемикачі та прапорець")} />
        <LabSubheading>Списки вибору</LabSubheading>
        <p>Списки бувають випадними та з множинним вибором; обидва описуються тегами <code>{"<select>"}</code> і{" "}<code>{"<option>"}</code>, а тип визначає атрибут <code>multiple</code>.</p>
        <CodeListing title="Приклад" file="Випадний список і список з множинним вибором" lang="html" code={data.selectListing} result={result(3, "Результат: Випадний список і список з множинним вибором")} />
        <LabSubheading>Багаторядкове поле, файл і кнопки</LabSubheading>
        <p>Якщо форма передає файли, у тегу <code>{"<form>"}</code> обов'язково вказують <code>method="post"</code> і{" "}<code>enctype="multipart/form-data"</code>. Кнопка <code>submit</code> відправляє дані, <code>reset</code> — повертає форму до початкового стану.</p>
        <CodeListing title="Лістинг 4.3" file="Використання форми і елементів керування" lang="html" code={data.fullFormListing} result={result(4, "Результат виконання лістингу 4.3")} />
        <Callout tone="modern">HTML5 додав нові типи полів — <code>email</code>, <code>date</code>, <code>number</code>, <code>tel</code> — та атрибути <code>required</code> і <code>placeholder</code>: браузер сам перевіряє дані й показує зручну клавіатуру на телефоні. Верстку форми таблицею замінюють CSS Grid.</Callout>
      </LabSection>
      <Figure src="/labs/lab-4/files/forma.jpg" alt="Зразок форми анкети" number="Рис. 4.2." caption="Форма заповнення анкети" />
      <StepList slug="lab-4" steps={data.steps} />
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
