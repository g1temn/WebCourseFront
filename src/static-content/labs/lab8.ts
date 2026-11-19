export const clipListing = `<style>
  #layer {
    position: absolute;
    width: 200px;
    padding: 10px;
    background: yellow;
    border: 2px solid green;
    color: blue;
    clip: rect(40px, auto, auto, 40px);
  }
</style>

<div id="layer">
  Цей текст обрізаний: видно лише частину блоку, що лежить нижче 40px
  від верхнього краю і правіше 40px від лівого.
</div>`;

export const goals = [
  "Детально вивчити структуру таблиці для прискорення створення стилів CSS.",
  "Вивчити основні можливості роботи зі списками за допомогою CSS.",
];

export const listListing = `<style>
  .box { padding-left: 50px; }
  .box ul {
    list-style-image: url("image-1.jpeg");
    list-style-position: inside;
  }
</style>

<div class="box">
  <ul>
    <li>Перший пункт</li>
    <li>Другий пункт</li>
    <li>Третій пункт</li>
  </ul>
</div>`;

export const listProperties = [
  [
    "`list-style-type`",
    "вид маркера: `disc`, `circle`, `square`, `decimal`, `upper-roman`, `none`…",
  ],
  ["`list-style-position`", "маркер усередині (`inside`) або зовні (`outside`) блоку тексту"],
  ["`list-style-image`", "зображення як маркер: `url(\"marker.png\")`"],
];

export const overflowListing = `<style>
  .frame {
    width: 200px;
    height: 200px;
    border: 2px solid #e07a1f;
    overflow: auto; /* visible | hidden | scroll | auto */
  }
</style>

<div class="frame">
  <img src="demo.jpg" alt="Велике зображення">
</div>`;

export const overflowValues = [
  ["`visible`", "вміст виходить за межі блоку (за замовчуванням)"],
  ["`hidden`", "усе, що не вміщується, обрізається"],
  ["`scroll`", "смуги прокрутки показуються завжди"],
  ["`auto`", "смуги прокрутки з'являються лише тоді, коли вміст не вміщується"],
];

export const questions = [
  "Як призначити таблиці окремий клас, описати властивості окремих елементів таблиці?",
  "Як отримати кадровану частину тексту?",
  "Опишіть властивість `overflow`.",
];

export const scrollbarListing = `/* Лише Internet Explorer */
html, body {
  scrollbar-3dlight-color: red;
  scrollbar-arrow-color: yellow;
  scrollbar-highlight-color: aqua;
  scrollbar-face-color: green;
  scrollbar-shadow-color: fuchsia;
  scrollbar-darkshadow-color: blue;
  scrollbar-track-color: maroon;
}`;

export const steps = [
  {
    text: "Створіть html-файл і вставте всередину тега `<body>` текст з файлу `текст.txt` (`task1.txt` з архіву).",
  },
  {
    text: "Перегляньте й проаналізуйте структуру таблиці. Зверніть увагу, які теги можна використати в таблиці.",
  },
  {
    text: "Створіть CSS-файл, у якому вкажіть, що таблиця й осередки (`table, td, th`) мають рамку червоного кольору шириною 1 піксель. Підключіть CSS-файл до html-файлу.",
  },
  {
    text: "Рамка виходить подвійною. Щоб уникнути цього, додайте стиль `* { border-collapse: collapse; }`.",
  },
  {
    text: "Призначте таблиці окремий клас і опишіть властивості окремих елементів таблиці стилями `.frmtbl`, `.frmtbl thead`, `.frmtbl tbody`, `.frmtbl tfoot`.",
  },
  {
    text: "Використовуючи `list-style-type`, `list-style-position`, `list-style-image`, розмістіть у блоці маркірований список. Маркер — зображення, розташоване всередині списку. Відступ від лівого краю блоку до списку — 50 пікселів.",
  },
  { text: "Створіть новий документ і розмістіть у ньому блок з ідентифікатором `layer`." },
  {
    text: "Опишіть `#layer`: жовтий фон, зелена рамка, відступ від краю блоку до тексту, сині букви, ширина 200 пікселів, абсолютне позиціонування і `clip: rect(40px, auto, auto, 40px)`. Якщо все правильно, на екрані з'явиться лише кадрована частина тексту.",
  },
  {
    text: "Створіть блок з рамкою 200×200 пікселів і помістіть у нього зображення свідомо більшого розміру. Поекспериментуйте з `overflow` так, щоб при переповненні з'являлися смуги прокрутки (обидві чи лише одна).",
  },
  {
    text: "В Internet Explorer можна змінити колір смуг прокрутки стилями `scrollbar-…-color`. Додайте їх і перевірте результат.",
  },
];

export const tableListing = `<style>
  table, td, th { border: 1px solid red; }
  * { border-collapse: collapse; }

  .frmtbl { width: 100%; }
  .frmtbl thead { background: #ffe0b3; }
  .frmtbl tbody { background: #fff7ec; }
  .frmtbl tfoot { font-style: italic; color: #777; }
</style>

<table class="frmtbl">
  <caption>Рівень продажу олівців</caption>
  <thead>
    <tr><th>Місяць</th><th>Продано</th><th>Виторг</th></tr>
  </thead>
  <tfoot>
    <tr><td>Період продажу</td><td>Кількість штук</td><td>Дохід в у.о.</td></tr>
  </tfoot>
  <tbody>
    <tr><td>Червень</td><td>30.000</td><td>100</td></tr>
    <tr><td>Липень</td><td>60.000</td><td>200</td></tr>
  </tbody>
</table>`;

export const tableParts = [
  ["`.frmtbl`", "стиль таблиці в цілому"],
  ["`.frmtbl thead`", "стиль заголовка таблиці"],
  ["`.frmtbl tbody`", "стиль основної частини таблиці"],
  ["`.frmtbl tfoot`", "стиль нижньої частини таблиці"],
];
