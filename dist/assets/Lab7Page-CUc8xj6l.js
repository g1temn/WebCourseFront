import{f as e,g as t,l as n}from"./index-Df7LJ5-N.js";import{a as r,c as i,d as a,f as o,h as s,i as c,l,m as u,u as d}from"./labs-B41-MH0c.js";var f=`<style>
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
<div class="k1"></div>`,p=`<style>
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
<div class="b2">Фонове зображення</div>`,m=["`display: none` — елемент повністю прибирається зі сторінки;",`місце, яке він займав, звільняється — сусідні блоки зсуваються;`],h=[`Вивчити можливості CSS з роботи з блоковими об'єктами.`,`Вивчити основні властивості блоків.`,"Навчитися застосовувати теги `<div>` та `<span>`."],g=`<style>
  img { opacity: 1; transition: opacity 0.3s; }
  img:hover { opacity: 0.4; }
</style>

<img src="strawberry.jpg" alt="Ягода" width="120">`,_=`<style>
  .box { position: absolute; width: 120px; height: 80px; color: #fff; padding: 6px; }
  .one   { left: 10px; top: 10px; background: #e07a1f; z-index: 30; }
  .two   { left: 50px; top: 40px; background: #2a9d8f; z-index: 20; }
  .three { left: 90px; top: 70px; background: #8338ec; z-index: 10; }
</style>

<div class="box one">z-index: 30</div>
<div class="box two">z-index: 20</div>
<div class="box three">z-index: 10</div>`,v=[`Як розташувати блоки один під одним та по горизонталі?`,`Як розташувати блоки один над одним?`,`Яким чином регулюється порядок розташування блоків зверху донизу?`,`Пропишіть стиль для зміни прозорості будь-якого зображення при наведенні на нього курсору миші.`],y=[{text:"Створіть html-файл `lab7.htm`, що містить блоковий елемент `div`."},{text:`Створіть CSS-файл і підключіть його до html-документа.`},{text:"Створіть клас `k1`: розмір блоку 200×200 пікселів, світло-зелений фон і суцільна темно-зелена рамка шириною 3 пікселі."},{text:"Підключіть клас `k1` до блоку в html-документі. Зверніть увагу, як зміниться блок."},{text:`Додайте ще п'ять таких самих блоків — вони розташуються один під одним.`},{text:"Щоб блоки розташувалися по горизонталі, додайте в клас `k1` оголошення `float: left`. Подивіться на зміни при зміні розмірів вікна."},{text:"Блоки «липнуть» один до одного — додайте зовнішній відступ ліворуч (`margin-left`). В інструментах розробника виділіть будь-який `div` і на вкладці Layout поекспериментуйте з `padding`, `margin`, `border` та `offset`."},{text:"В окремому файлі створіть горизонтальний світлофор із трьох блоків однакової ширини, що змінюється разом з вікном. Задайте кожному блоку свій колір. Приберіть відступи `body` за допомогою CSS."},{text:"Задайте першому блоку `display: none`, а іншому `visibility: hidden`. У чому відмінність цих оголошень?"},{text:"Створіть файл із трьома блоками: у першому — рамка з різним типом лінії для кожної сторони; у другому — фонове зображення (`background-image`); у третьому — фон, додаючи властивості по одній і перевіряючи зміни після кожного рядка."},{text:"Розташуйте блоки один над одним: `position: absolute`, `z-index` (у нижчих блоків значення менше, наприклад 10, 20 і 30) та різні `left` і `top`."},{text:"Створіть заокруглені кути з чотирьох вкладених один в одний блоків: опишіть клас `ugol` для зовнішнього блоку та класи для кожного кута з відповідними зображеннями."},{text:`Створіть новий html-файл і помістіть у нього зображення ягоди.`},{text:`У CSS-файлі запишіть стиль для зміни прозорості будь-якого зображення при наведенні на нього курсору миші.`},{text:`Використовуючи тільки блоки, створіть поле для гри в хрестики-нулики.`},{text:"Використовуючи блоки, їхню вкладеність, фон, вирівнювання, властивість `float` і шрифт Georgia, створіть шапку сайту за зразком. Кути виріжте самостійно."}],b=`<style>
  body { margin: 0; }
  .light { float: left; width: 33.33%; height: 80px; }
  .red { background: red; }
  .yellow { background: yellow; }
  .green { background: green; }
</style>

<div class="light red"></div>
<div class="light yellow"></div>
<div class="light green"></div>`,x=["`visibility: hidden` — елемент стає невидимим;",`місце під нього зберігається — на сторінці лишається «дірка»;`],S=t(),C=n(`lab-7`),w=`<style>
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
</div>`,T=(t,n)=>({src:e(C.slug,t),alt:n,caption:n});function E(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{lab:C}),(0,S.jsx)(d,{items:h}),(0,S.jsx)(o,{id:`blocks`,title:`Блоки div і span`,number:1,children:(0,S.jsxs)(`p`,{children:[(0,S.jsx)(`code`,{children:`<div>`}),` — блоковий елемент: займає всю доступну ширину і починається з нового рядка.`,` `,(0,S.jsx)(`code`,{children:`<span>`}),` — рядковий елемент: оформлює частину тексту, не розриваючи рядок. За допомогою CSS блокам задають розміри (`,(0,S.jsx)(`code`,{children:`width`}),`, `,(0,S.jsx)(`code`,{children:`height`}),`), фон, рамку (`,(0,S.jsx)(`code`,{children:`border`}),`), внутрішні (`,(0,S.jsx)(`code`,{children:`padding`}),`) і зовнішні (`,(0,S.jsx)(`code`,{children:`margin`}),`) відступи.`]})}),(0,S.jsxs)(o,{id:`layout`,title:`Розташування блоків`,number:2,children:[(0,S.jsxs)(`p`,{children:[`За замовчуванням блоки розташовуються один під одним. Оголошення `,(0,S.jsx)(`code`,{children:`float: left`}),` розміщує їх по горизонталі, а `,(0,S.jsx)(`code`,{children:`margin-left`}),` додає відстань між ними.`]}),(0,S.jsx)(s,{title:`Приклад`,file:`Блоки з класом k1 по горизонталі`,lang:`html`,code:f,result:T(1,`Результат: Блоки з класом k1 по горизонталі`)}),(0,S.jsx)(`p`,{children:`Ширина блоків задана у відсотках — вона змінюється разом з шириною вікна.`}),(0,S.jsx)(s,{title:`Приклад`,file:`Горизонтальний світлофор`,lang:`html`,code:b,result:T(2,`Результат: Горизонтальний світлофор`)}),(0,S.jsxs)(c,{tone:`modern`,children:[`Для розташування блоків поруч сьогодні використовують `,(0,S.jsx)(`b`,{children:`Flexbox`}),`: `,(0,S.jsx)(`code`,{children:`display: flex; gap: 10px;`}),` на батьківському блоці. `,(0,S.jsx)(`code`,{children:`float`}),` залишився для обтікання картинок текстом.`]})]}),(0,S.jsx)(o,{id:`display-visibility`,title:`display і visibility`,number:3,children:(0,S.jsx)(u,{columns:2,items:[{title:`display: none`,points:m},{title:`visibility: hidden`,points:x}]})}),(0,S.jsxs)(o,{id:`borders-background`,title:`Фон і рамки`,number:4,children:[(0,S.jsxs)(`p`,{children:[`Кожній стороні рамки можна задати власний тип лінії (`,(0,S.jsx)(`code`,{children:`solid`}),`, `,(0,S.jsx)(`code`,{children:`dashed`}),`, `,(0,S.jsx)(`code`,{children:`dotted`}),`,`,` `,(0,S.jsx)(`code`,{children:`double`}),`), а фон складається з кольору, зображення, повторення і позиції.`]}),(0,S.jsx)(s,{title:`Приклад`,file:`Різні рамки та фонове зображення`,lang:`html`,code:p,result:T(3,`Результат: Різні рамки та фонове зображення`)})]}),(0,S.jsxs)(o,{id:`position`,title:`Позиціонування і z-index`,number:5,children:[(0,S.jsxs)(`p`,{children:[(0,S.jsx)(`code`,{children:`position: absolute`}),` разом з `,(0,S.jsx)(`code`,{children:`left`}),` і `,(0,S.jsx)(`code`,{children:`top`}),` розміщує блок у заданій точці, тож блоки можуть накладатися. Порядок накладання визначає `,(0,S.jsx)(`code`,{children:`z-index`}),`: блок з більшим значенням лежить вище.`]}),(0,S.jsx)(s,{title:`Приклад`,file:`Блоки один над одним`,lang:`html`,code:_,result:T(4,`Результат: Блоки один над одним`)})]}),(0,S.jsxs)(o,{id:`rounded`,title:`Заокруглені кути`,number:6,children:[(0,S.jsxs)(`p`,{children:[`У методичці заокруглені кути створюються з чотирьох вкладених блоків: зовнішній блок має клас `,(0,S.jsx)(`code`,{children:`ugol`}),`, а кожен вкладений — фонове зображення одного кута (файли `,(0,S.jsx)(`code`,{children:`panel-top-left.gif`}),` тощо з архіву).`]}),(0,S.jsx)(s,{title:`Приклад`,file:`Чотири вкладені блоки з кутами`,lang:`html`,code:w}),(0,S.jsxs)(c,{tone:`modern`,children:[`Сьогодні те саме робить одна властивість: `,(0,S.jsx)(`code`,{children:`border-radius: 12px;`}),` — без зображень і вкладених блоків.`]})]}),(0,S.jsxs)(o,{id:`opacity`,title:`Прозорість при наведенні`,number:7,children:[(0,S.jsx)(s,{title:`Приклад`,file:`Зміна прозорості зображення при наведенні`,lang:`html`,code:g,result:T(5,`Результат: Зміна прозорості зображення при наведенні`)}),(0,S.jsxs)(c,{tone:`modern`,children:[`Методичка наводить окремі рядки для Internet Explorer (`,(0,S.jsx)(`code`,{children:`filter: alpha(opacity=40)`}),`). IE більше не використовується, тож досить стандартної властивості `,(0,S.jsx)(`code`,{children:`opacity`}),`.`]})]}),(0,S.jsx)(r,{slug:`lab-7`,steps:y}),(0,S.jsx)(a,{items:v}),(0,S.jsx)(l,{lab:C})]})}export{E as default};