export const blockListing = `<style>
  .k1 {
    width: 100px;
    height: 100px;
    background: #ccffcc;
    border: 3px solid darkgreen;
    float: left;        /* блоки розташовуються по горизонталі */
    margin-left: 10px;  /* зовнішній відступ ліворуч */
  }
</style>

<div class="k1"></div>
<div class="k1"></div>
<div class="k1"></div>`;

export const bordersListing = `<style>
  .b1 {
    width: 160px; height: 60px; margin: 10px;
    border-top: 4px solid #e07a1f;
    border-right: 4px dashed #2a9d8f;
    border-bottom: 4px dotted #8338ec;
    border-left: 4px double #222;
  }
  .b2 {
    width: 160px; height: 60px; margin: 10px;
    background-color: #fdf0d5;
    background-image: url("strawberry.jpg");
    background-repeat: no-repeat;
    background-position: right center;
  }
</style>

<div class="b1">Різні рамки</div>
<div class="b2">Фонове зображення</div>`;

export const displayItems = [
  "`display: none` — елемент повністю прибирається зі сторінки;",
  "місце, яке він займав, звільняється — сусідні блоки зсуваються;",
];

export const goals = [
  "Вивчити можливості CSS з роботи з блоковими об'єктами.",
  "Вивчити основні властивості блоків.",
  "Навчитися застосовувати теги `<div>` та `<span>`.",
];

export const opacityListing = `<style>
  img { opacity: 1; transition: opacity 0.3s; }
  img:hover { opacity: 0.4; }
</style>

<img src="strawberry.jpg" alt="Ягода" width="120">`;

export const positionListing = `<style>
  .box { position: absolute; width: 120px; height: 80px; color: #fff; padding: 6px; }
  .one   { left: 10px; top: 10px; background: #e07a1f; z-index: 30; }
  .two   { left: 50px; top: 40px; background: #2a9d8f; z-index: 20; }
  .three { left: 90px; top: 70px; background: #8338ec; z-index: 10; }
</style>

<div class="box one">z-index: 30</div>
<div class="box two">z-index: 20</div>
<div class="box three">z-index: 10</div>`;

export const questions = [
  "Як розташувати блоки один під одним та по горизонталі?",
  "Як розташувати блоки один над одним?",
  "Яким чином регулюється порядок розташування блоків зверху донизу?",
  "Пропишіть стиль для зміни прозорості будь-якого зображення при наведенні на нього курсору миші.",
];

export const steps = [
  { text: "Створіть html-файл `lab7.htm`, що містить блоковий елемент `div`." },
  { text: "Створіть CSS-файл і підключіть його до html-документа." },
  {
    text: "Створіть клас `k1`: розмір блоку 200×200 пікселів, світло-зелений фон і суцільна темно-зелена рамка шириною 3 пікселі.",
  },
  { text: "Підключіть клас `k1` до блоку в html-документі. Зверніть увагу, як зміниться блок." },
  { text: "Додайте ще п'ять таких самих блоків — вони розташуються один під одним." },
  {
    text: "Щоб блоки розташувалися по горизонталі, додайте в клас `k1` оголошення `float: left`. Подивіться на зміни при зміні розмірів вікна.",
  },
  {
    text: "Блоки «липнуть» один до одного — додайте зовнішній відступ ліворуч (`margin-left`). В інструментах розробника виділіть будь-який `div` і на вкладці Layout поекспериментуйте з `padding`, `margin`, `border` та `offset`.",
  },
  {
    text: "В окремому файлі створіть горизонтальний світлофор із трьох блоків однакової ширини, що змінюється разом з вікном. Задайте кожному блоку свій колір. Приберіть відступи `body` за допомогою CSS.",
  },
  {
    text: "Задайте першому блоку `display: none`, а іншому `visibility: hidden`. У чому відмінність цих оголошень?",
  },
  {
    text: "Створіть файл із трьома блоками: у першому — рамка з різним типом лінії для кожної сторони; у другому — фонове зображення (`background-image`); у третьому — фон, додаючи властивості по одній і перевіряючи зміни після кожного рядка.",
  },
  {
    text: "Розташуйте блоки один над одним: `position: absolute`, `z-index` (у нижчих блоків значення менше, наприклад 10, 20 і 30) та різні `left` і `top`.",
  },
  {
    text: "Створіть заокруглені кути з чотирьох вкладених один в одний блоків: опишіть клас `ugol` для зовнішнього блоку та класи для кожного кута з відповідними зображеннями.",
  },
  { text: "Створіть новий html-файл і помістіть у нього зображення ягоди." },
  {
    text: "У CSS-файлі запишіть стиль для зміни прозорості будь-якого зображення при наведенні на нього курсору миші.",
  },
  { text: "Використовуючи тільки блоки, створіть поле для гри в хрестики-нулики." },
  {
    text: "Використовуючи блоки, їхню вкладеність, фон, вирівнювання, властивість `float` і шрифт Georgia, створіть шапку сайту за зразком. Кути виріжте самостійно.",
  },
];

export const trafficLightListing = `<style>
  body { margin: 0; }
  .light { float: left; width: 33.33%; height: 80px; }
  .red { background: red; }
  .yellow { background: yellow; }
  .green { background: green; }
</style>

<div class="light red"></div>
<div class="light yellow"></div>
<div class="light green"></div>`;

export const visibilityItems = [
  "`visibility: hidden` — елемент стає невидимим;",
  "місце під нього зберігається — на сторінці лишається «дірка»;",
];
