import{f as e,g as t,l as n}from"./index-Df7LJ5-N.js";import{a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,o as d,u as f}from"./labs-B41-MH0c.js";var p=`<style>
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
</div>`,m=[`Детально вивчити структуру таблиці для прискорення створення стилів CSS.`,`Вивчити основні можливості роботи зі списками за допомогою CSS.`],h=`<style>
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
</div>`,g=[["`list-style-type`","вид маркера: `disc`, `circle`, `square`, `decimal`, `upper-roman`, `none`…"],["`list-style-position`","маркер усередині (`inside`) або зовні (`outside`) блоку тексту"],["`list-style-image`",'зображення як маркер: `url("marker.png")`']],_=`<style>
  .frame {
    width: 200px;
    height: 200px;
    border: 2px solid #e07a1f;
    overflow: auto; /* visible | hidden | scroll | auto */
  }
</style>

<div class="frame">
  <img src="demo.jpg" alt="Велике зображення">
</div>`,v=[["`visible`",`вміст виходить за межі блоку (за замовчуванням)`],["`hidden`",`усе, що не вміщується, обрізається`],["`scroll`",`смуги прокрутки показуються завжди`],["`auto`",`смуги прокрутки з'являються лише тоді, коли вміст не вміщується`]],y=[`Як призначити таблиці окремий клас, описати властивості окремих елементів таблиці?`,`Як отримати кадровану частину тексту?`,"Опишіть властивість `overflow`."],b=`/* Лише Internet Explorer */
html, body {
  scrollbar-3dlight-color: red;
  scrollbar-arrow-color: yellow;
  scrollbar-highlight-color: aqua;
  scrollbar-face-color: green;
  scrollbar-shadow-color: fuchsia;
  scrollbar-darkshadow-color: blue;
  scrollbar-track-color: maroon;
}`,x=[{text:"Створіть html-файл і вставте всередину тега `<body>` текст з файлу `текст.txt` (`task1.txt` з архіву)."},{text:`Перегляньте й проаналізуйте структуру таблиці. Зверніть увагу, які теги можна використати в таблиці.`},{text:"Створіть CSS-файл, у якому вкажіть, що таблиця й осередки (`table, td, th`) мають рамку червоного кольору шириною 1 піксель. Підключіть CSS-файл до html-файлу."},{text:"Рамка виходить подвійною. Щоб уникнути цього, додайте стиль `* { border-collapse: collapse; }`."},{text:"Призначте таблиці окремий клас і опишіть властивості окремих елементів таблиці стилями `.frmtbl`, `.frmtbl thead`, `.frmtbl tbody`, `.frmtbl tfoot`."},{text:"Використовуючи `list-style-type`, `list-style-position`, `list-style-image`, розмістіть у блоці маркірований список. Маркер — зображення, розташоване всередині списку. Відступ від лівого краю блоку до списку — 50 пікселів."},{text:"Створіть новий документ і розмістіть у ньому блок з ідентифікатором `layer`."},{text:"Опишіть `#layer`: жовтий фон, зелена рамка, відступ від краю блоку до тексту, сині букви, ширина 200 пікселів, абсолютне позиціонування і `clip: rect(40px, auto, auto, 40px)`. Якщо все правильно, на екрані з'явиться лише кадрована частина тексту."},{text:"Створіть блок з рамкою 200×200 пікселів і помістіть у нього зображення свідомо більшого розміру. Поекспериментуйте з `overflow` так, щоб при переповненні з'являлися смуги прокрутки (обидві чи лише одна)."},{text:"В Internet Explorer можна змінити колір смуг прокрутки стилями `scrollbar-…-color`. Додайте їх і перевірте результат."}],S=`<style>
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
</table>`,C=[["`.frmtbl`",`стиль таблиці в цілому`],["`.frmtbl thead`",`стиль заголовка таблиці`],["`.frmtbl tbody`",`стиль основної частини таблиці`],["`.frmtbl tfoot`",`стиль нижньої частини таблиці`]],w=t(),T=n(`lab-8`),E=(t,n)=>({src:e(T.slug,t),alt:n,caption:n});function D(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{lab:T}),(0,w.jsx)(f,{items:m}),(0,w.jsxs)(o,{id:`tables`,title:`Стилізація таблиць`,number:1,children:[(0,w.jsxs)(`p`,{children:[`Таблиця складається з частин `,(0,w.jsx)(`code`,{children:`<caption>`}),`, `,(0,w.jsx)(`code`,{children:`<thead>`}),`, `,(0,w.jsx)(`code`,{children:`<tbody>`}),` `,`і `,(0,w.jsx)(`code`,{children:`<tfoot>`}),`, а `,(0,w.jsx)(`code`,{children:`<colgroup>`}),`/`,(0,w.jsx)(`code`,{children:`<col>`}),` описують стовпці. Якщо призначити таблиці клас, кожну частину можна оформити окремо.`]}),(0,w.jsx)(d,{title:`Стилі частин таблиці`,columns:[`Селектор`,`Що оформлює`],rows:C}),(0,w.jsxs)(`p`,{children:[`Рамки таблиці й осередків за замовчуванням подвійні; властивість `,(0,w.jsx)(`code`,{children:`border-collapse: collapse`}),` зливає їх в одну лінію.`]}),(0,w.jsx)(c,{title:`Приклад`,file:`Таблиця з класом frmtbl`,lang:`html`,code:S,result:E(1,`Результат: Таблиця з класом frmtbl`)})]}),(0,w.jsxs)(o,{id:`lists`,title:`Стилізація списків`,number:2,children:[(0,w.jsx)(d,{title:`Властивості списків`,columns:[`Властивість`,`Призначення`],rows:g}),(0,w.jsx)(c,{title:`Приклад`,file:`Маркер-зображення всередині списку`,lang:`html`,code:h,result:E(2,`Результат: Маркер-зображення всередині списку`)})]}),(0,w.jsxs)(o,{id:`clip`,title:`Обрізання (clip)`,number:3,children:[(0,w.jsxs)(`p`,{children:[`Властивість `,(0,w.jsx)(`code`,{children:`clip: rect(верх, право, низ, ліво)`}),` показує лише прямокутну частину блоку. Вона працює тільки для абсолютно позиціонованих елементів.`]}),(0,w.jsx)(c,{title:`Приклад`,file:`Кадрована частина тексту`,lang:`html`,code:p,result:E(3,`Результат: Кадрована частина тексту`)}),(0,w.jsxs)(l,{tone:`modern`,children:[(0,w.jsx)(`code`,{children:`clip`}),` застаріла. Сучасна заміна — `,(0,w.jsx)(`code`,{children:`clip-path: inset(40px 0 0 40px)`}),`, яка працює з будь-якими елементами й уміє обрізати також по колу чи багатокутнику.`]})]}),(0,w.jsxs)(o,{id:`overflow`,title:`Переповнення (overflow)`,number:4,children:[(0,w.jsx)(d,{title:`Значення overflow`,columns:[`Значення`,`Що відбувається`],rows:v}),(0,w.jsx)(c,{title:`Приклад`,file:`Велике зображення в блоці 200×200`,lang:`html`,code:_,result:E(4,`Результат: Велике зображення в блоці 200×200`)})]}),(0,w.jsxs)(o,{id:`scrollbars`,title:`Смуги прокрутки`,number:5,children:[(0,w.jsx)(`p`,{children:`Internet Explorer дозволяв змінювати колір смуг прокрутки нестандартними властивостями:`}),(0,w.jsx)(s,{src:`/labs/lab-8/figures/scrollbars.webp`,alt:`Схема частин смуги прокрутки з назвами властивостей`,caption:`Властивості частин смуги прокрутки в Internet Explorer`,maxWidth:360}),(0,w.jsx)(c,{title:`Приклад`,file:`Кольорові смуги прокрутки в IE`,lang:`css`,code:b}),(0,w.jsxs)(l,{tone:`modern`,children:[`IE більше не підтримується. Сьогодні колір смуг задається стандартною властивістю`,` `,(0,w.jsx)(`code`,{children:`scrollbar-color`}),` з двома кольорами — повзунка і доріжки (наприклад,`,` `,(0,w.jsx)(`code`,{children:`scrollbar-color: red yellow;`}),`), а товщина — `,(0,w.jsx)(`code`,{children:`scrollbar-width`}),`.`]})]}),(0,w.jsx)(r,{slug:`lab-8`,steps:x}),(0,w.jsx)(a,{items:y}),(0,w.jsx)(u,{lab:T})]})}export{D as default};