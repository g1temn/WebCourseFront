import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab1";
import { Callout, CodeListing, ControlQuestions, Figure, FigureGrid, Goals, LabFiles, LabHeader, LabSection, RefTable, Rich, StepList } from "@/features/labs";

const lab = getLab("lab-1")!;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab1Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="xampp" title="XAMPP: встановлення" number={1}>
        <p>Програма XAMPP призначена для створення власних доменів на локальному комп'ютері, що дозволяє створювати сайти і тестувати їх працездатність, не маючи доступу до Інтернету. XAMPP надає простий спосіб встановити компоненти для запуску програмного забезпечення на основі PHP (WordPress, Drupal, Joomla) на Windows, macOS та Linux.</p>
        <p>Дистрибутив завантажується з сайту <a href="https://www.apachefriends.org/download.html" target="_blank" rel="noreferrer">apachefriends.org</a>{" "}відповідно до вашої операційної системи:</p>
        <ol>{data.xamppInstallSteps.map((item) => (<li key={item}><Rich text={item} /></li>))}</ol>
        <p>Після встановлення запуститься панель керування XAMPP. Для початку роботи достатньо натиснути <b>Start</b>{" "}навпроти Apache і MySQL: запущені служби підсвічуються зеленим, а їхні кнопки <b>Admin</b> стають активними. Щоб перевірити, чи все зроблено правильно, відкрийте в браузері адресу <code>http://localhost</code>.</p>
        <p>Кнопка <b>Admin</b> навпроти Apache відкриває <code>http://localhost/dashboard/</code> з документацією та{" "}<code>phpinfo</code>, а навпроти MySQL — phpMyAdmin для роботи з базою даних.</p>
        <FigureGrid
          figures={[
            { src: "/labs/lab-1/figures/xampp-components.webp", number: "Рис. 1.1.", caption: "Вибір компонентів XAMPP" },
            { src: "/labs/lab-1/figures/xampp-folder.webp", number: "Рис. 1.2.", caption: "Папка встановлення" },
            { src: "/labs/lab-1/figures/xampp-panel.webp", caption: "Панель керування XAMPP" },
            { src: "/labs/lab-1/figures/xampp-started.webp", caption: "Запущені Apache і MySQL" },
          ]}
        />
        <Callout tone="warning">Можливі конфлікти при одночасній роботі Skype і XAMPP: обидві програми використовують 80-й порт. Після завершення роботи не забувайте зупиняти сервер кнопками <b>Stop</b>.</Callout>
      </LabSection>
      <LabSection id="domain" title="Власний домен" number={2}>
        <p>Після встановлення всі локальні домени розташовуються в папці <code>C:\xampp\htdocs</code>. Для створення власного домену досить додати в цей каталог нову папку з ім'ям домену. В імені домену не можна використовувати пробіли, кирилицю і спеціальні символи.</p>
        <p>Наприклад, якщо скопіювати папку <code>sait</code> з файлами сайту в <code>C:\xampp\htdocs\sait\</code>, то сайт буде доступний у браузері за адресою <code>http://localhost/sait/</code> — відкриється його індексний файл (<code>index.html</code> або <code>index.php</code>).</p>
      </LabSection>
      <LabSection id="htmlpad" title="Інтерфейс HTMLPad" number={3}>
        <p>Сайти умовно поділяють на <b>статичні</b> (набір html-сторінок, що показуються в тому вигляді, в якому були створені) і <b>динамічні</b> (вміст залежить від облікового запису, часу тощо; набір php-сторінок).</p>
        <p>Створювати сторінки можна в блокноті або в спеціалізованих програмах, наприклад HTMLPad. На відміну від блокнота, вона має підсвічування синтаксису, автодоповнення, панель властивостей (Inspector) і попередній перегляд. Теги можна додавати вручну, через меню Insert і Format або кнопками панелей HTML, HTML Formatting та HTML Forms.</p>
        <Figure src="/labs/lab-1/figures/htmlpad.webp" alt="Вікно програми HTMLPad 2020 з кодом і попереднім переглядом" number="Рис. 1.3." caption="Інтерфейс програми HTMLPad 2020" />
        <Callout tone="modern">Сьогодні для верстки найчастіше використовують безкоштовний редактор <b>VS Code</b> з розширенням Live Server, який замінює і HTMLPad, і локальний сервер для статичних сторінок. А виконати цю лабораторну можна прямо тут — у вбудованому редакторі, без встановлення програм.</Callout>
      </LabSection>
      <LabSection id="structure" title="Структура HTML-документа" number={4}>
        <p>HTML (Hypertext Markup Language) — мова розмітки гіпертексту. Основною структурною одиницею мови є{" "}<b>тег</b> з його атрибутами: інструкція в трикутних дужках, що повідомляє, якими властивостями повинен володіти фрагмент тексту. Більшість тегів парні — мають тег, що відкривається, і тег, що закривається. Значення атрибутів записуються в подвійних лапках.</p>
        <CodeListing title="Приклад" file="Структура тега" lang="html" code={data.tagStructureListing} />
        <p>Весь документ розміщується в головному тегу <code>{"<html>"}</code> і складається з заголовка (<code>{"<head>"}</code>) та тіла (<code>{"<body>"}</code>):</p>
        <CodeListing title="Приклад" file="Структура html-документа" lang="html" code={data.documentStructureListing} />
        <Callout tone="modern">Сучасний документ починається з <code>{"<!doctype html>"}</code>, а кодування задається коротким{" "}<code>{"<meta charset=\"UTF-8\">"}</code> замість windows-1251.</Callout>
      </LabSection>
      <LabSection id="document-tags" title="Теги рівня документа" number={5}>
        <ul>
          <li><code>{"<html>...</html>"}</code> — парний тег-контейнер, що містить усю вебсторінку.</li>
          <li><code>{"<head>...</head>"}</code> — службова інформація для браузерів і пошукових систем; вміст не відображується, крім <code>{"<title>"}</code>.</li>
          <li><code>{"<title>...</title>"}</code> — текст заголовка вікна браузера.</li>
          <li><code>{"<body>...</body>"}</code> — вміст вебсторінки: текст, зображення, таблиці тощо.</li>
        </ul>
        <RefTable title="Основні атрибути тега <body>" columns={["Атрибут", "Призначення"]} rows={data.bodyAttributes} />
        <p>Колір тексту зелений, колір посилань чорний, колір фону жовтий.</p>
        <CodeListing title="Лістинг 1.1" file="Приклад використання атрибутів тега <body>" lang="html" code={data.bodyListing} result={result(1, "Результат виконання лістингу 1.1")} />
      </LabSection>
      <LabSection id="formatting" title="Теги форматування тексту" number={6}>
        <RefTable title="Теги форматування тексту" columns={["Тег", "Призначення, атрибути"]} rows={data.formattingTags} searchable />
        <CodeListing title="Приклад" file="Приклад форматування тексту" lang="html" code={data.formattingListing} result={result(2, "Результат: Приклад форматування тексту")} />
        <Callout tone="modern">Теги <code>{"<font>"}</code>, <code>{"<strike>"}</code>, <code>{"<nobr>"}</code> та атрибути{" "}<code>align</code>, <code>bgcolor</code>, <code>text</code> застарілі: у HTML5 зовнішній вигляд задається через CSS (лабораторні №6–8). Замість <code>{"<strike>"}</code> використовують <code>{"<s>"}</code> або{" "}<code>{"<del>"}</code>. Браузери все ще їх показують, тож для лабораторної вони підходять.</Callout>
      </LabSection>
      <LabSection id="entities" title="Спецсимволи і коментарі" number={7}>
        <p>Деякі символи використовуються мовою в службових цілях (знаки «більше» і «менше»), а деякі неможливо набрати на клавіатурі (нерозривний пробіл, копірайт). Для них використовують спеціальні коди — у вигляді імені або числового коду.</p>
        <RefTable title="Спецсимволи мови HTML" columns={["Ім'я", "Код", "Вигляд", "Опис"]} rows={data.specialChars} />
        <p>Для коментарів або тимчасового виключення тексту зі сторінки використовують пару символів{" "}<code>{"<!-- Текст коментаря -->"}</code>.</p>
        <CodeListing title="Приклад" file="Приклад спецсимволів і коментаря" lang="html" code={data.entitiesListing} result={result(3, "Результат: Приклад спецсимволів і коментаря")} />
      </LabSection>
      <Figure src="/labs/lab-1/files/lab1-1.jpg" alt="Зразок відформатованої сторінки lab1.html" number="Рис. 1.6." caption="Зразок для виконання практичного завдання" />
      <Callout tone="tip" title="Без XAMPP">Кроки з налаштуванням локального сервера потрібні для роботи на комп'ютері в аудиторії. Сторінки цієї лабораторної можна також створити у вбудованому редакторі: створіть у ньому проєкт і файли <code>index.html</code>, <code>lab1.html</code>, а зображення вставляйте за повною адресою з розділу «Файли до роботи».</Callout>
      <StepList slug="lab-1" steps={data.steps} />
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
