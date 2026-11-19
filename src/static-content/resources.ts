import type { Resource } from "./types";

const W3 = "https://w3schoolsua.github.io";
const HTML_LABS = ["lab-1", "lab-2", "lab-3", "lab-4", "lab-5"];
const CSS_LABS = ["lab-6", "lab-7", "lab-8"];
const FIGMA_LABS = ["lab-9-1", "lab-9-2", "lab-9-3"];

export const resources: Resource[] = [
  {
    id: "video-html-full",
    kind: "course",
    tech: "html",
    title: "Повний курс HTML для початківців з нуля",
    author: "Школа програмування",
    description: "Структура сторінки, теги, зображення, посилання, таблиці, форми — в одному відео.",
    url: "https://www.youtube.com/watch?v=jfU3hZDqGTo",
    labSlugs: HTML_LABS,
  },
  {
    id: "video-css-full",
    kind: "course",
    tech: "css",
    title: "Повний курс CSS для початківців з нуля",
    author: "Школа програмування",
    description: "Селектори, властивості тексту, блокова модель, позиціонування.",
    url: "https://www.youtube.com/watch?v=m359znI_IQc",
    labSlugs: CSS_LABS,
  },
  {
    id: "video-figma-full",
    kind: "course",
    tech: "figma",
    title: "Figma з нуля до першого макету за 49 хвилин",
    author: "VARVARA_BARVA",
    description: "Фрейми, фігури, текст, компоненти та перший макет.",
    url: "https://www.youtube.com/watch?v=mmdWF0F9V7I",
    labSlugs: FIGMA_LABS,
    featured: true,
  },

  { id: "docs-html", kind: "docs", tech: "html", title: "Підручник HTML", author: "W3Schools українською", description: "Покроковий підручник", url: `${W3}/html/index.html`, labSlugs: [], featured: true },
  { id: "docs-html-images", kind: "docs", tech: "html", title: "Зображення в HTML", author: "W3Schools українською", description: "Тег img та його атрибути", url: `${W3}/html/html_images.html`, labSlugs: ["lab-2"] },
  { id: "docs-html-lists", kind: "docs", tech: "html", title: "Списки в HTML", author: "W3Schools українською", description: "Маркіровані, нумеровані списки та списки описів", url: `${W3}/html/html_lists.html`, labSlugs: ["lab-2"] },
  { id: "docs-html-tables", kind: "docs", tech: "html", title: "Таблиці в HTML", author: "W3Schools українською", description: "Рядки, клітинки, об'єднання клітинок", url: `${W3}/html/html_tables.html`, labSlugs: ["lab-3"] },
  { id: "docs-html-basic", kind: "docs", tech: "html", title: "Основи HTML", author: "W3Schools українською", description: "Структура документа та базові теги", url: `${W3}/html/html_basic.html`, labSlugs: ["lab-1"] },
  { id: "docs-html-formatting", kind: "docs", tech: "html", title: "Форматування тексту", author: "W3Schools українською", description: "Теги b, strong, i, sub, sup, del, ins та інші", url: `${W3}/html/html_formatting.html`, labSlugs: ["lab-1"] },
  { id: "docs-html-links", kind: "docs", tech: "html", title: "Посилання в HTML", author: "W3Schools українською", description: "Тег a, атрибути href і target", url: `${W3}/html/html_links.html`, labSlugs: ["lab-2"] },
  { id: "docs-html-forms", kind: "docs", tech: "html", title: "Форми в HTML", author: "W3Schools українською", description: "Тег form та елементи керування", url: `${W3}/html/html_forms.html`, labSlugs: ["lab-4"] },
  { id: "docs-html-iframe", kind: "docs", tech: "html", title: "Фрейми iframe", author: "W3Schools українською", description: "Вбудовування сторінок, атрибут target", url: `${W3}/html/html_iframe.html`, labSlugs: ["lab-5"] },
  { id: "docs-html-imagemap", kind: "docs", tech: "html", title: "Карти зображень", author: "W3Schools українською", description: "Теги map і area", url: `${W3}/html/html_images_imagemap.html`, labSlugs: ["lab-5"] },
  { id: "docs-mdn-html", kind: "docs", tech: "html", title: "HTML на MDN", author: "MDN Web Docs", description: "Довідник HTML від Mozilla українською", url: "https://developer.mozilla.org/uk/docs/Web/HTML", labSlugs: [] },

  { id: "docs-css", kind: "docs", tech: "css", title: "Підручник CSS", author: "W3Schools українською", description: "Покроковий підручник", url: `${W3}/css/index.html`, labSlugs: [], featured: true },
  { id: "docs-css-howto", kind: "docs", tech: "css", title: "Способи підключення CSS", author: "W3Schools українською", description: "Зовнішні, внутрішні та вбудовані стилі", url: `${W3}/css/css_howto.html`, labSlugs: ["lab-6"] },
  { id: "docs-css-positioning", kind: "docs", tech: "css", title: "Позиціонування", author: "W3Schools українською", description: "static, relative, absolute, fixed, sticky", url: `${W3}/css/css_positioning.html`, labSlugs: ["lab-7"] },
  { id: "docs-css-overflow", kind: "docs", tech: "css", title: "overflow", author: "W3Schools українською", description: "Що робити з вмістом, який не вміщується", url: `${W3}/css/css_overflow.html`, labSlugs: ["lab-8"] },
  { id: "docs-css-text", kind: "docs", tech: "css", title: "Властивості тексту", author: "W3Schools українською", description: "Колір, вирівнювання, відступи, трансформація тексту", url: `${W3}/css/css_text.html`, labSlugs: ["lab-6"] },
  { id: "docs-css-boxmodel", kind: "docs", tech: "css", title: "Блокова модель", author: "W3Schools українською", description: "margin, border, padding, content", url: `${W3}/css/css_boxmodel.html`, labSlugs: ["lab-7"] },
  { id: "docs-css-display", kind: "docs", tech: "css", title: "display і visibility", author: "W3Schools українською", description: "Як приховувати й показувати елементи", url: `${W3}/css/css_display_visibility.html`, labSlugs: ["lab-7"] },
  { id: "docs-css-zindex", kind: "docs", tech: "css", title: "z-index", author: "W3Schools українською", description: "Порядок накладання елементів", url: `${W3}/css/css_z-index.html`, labSlugs: ["lab-7"] },
  { id: "docs-css-float", kind: "docs", tech: "css", title: "float і clear", author: "W3Schools українською", description: "Обтікання елементів", url: `${W3}/css/css_float.html`, labSlugs: ["lab-7"] },
  { id: "docs-css-table", kind: "docs", tech: "css", title: "Стилізація таблиць", author: "W3Schools українською", description: "Рамки, border-collapse, вирівнювання", url: `${W3}/css/css_table.html`, labSlugs: ["lab-8"] },
  { id: "docs-css-list", kind: "docs", tech: "css", title: "Стилізація списків", author: "W3Schools українською", description: "list-style-type, list-style-image, list-style-position", url: `${W3}/css/css_list.html`, labSlugs: ["lab-8"] },
  { id: "docs-mdn-css", kind: "docs", tech: "css", title: "CSS на MDN", author: "MDN Web Docs", description: "Довідник CSS від Mozilla українською", url: "https://developer.mozilla.org/uk/docs/Web/CSS", labSlugs: [] },

  { id: "docs-figma-help", kind: "docs", tech: "figma", title: "Довідка Figma", author: "Figma", description: "Офіційна документація", url: "https://help.figma.com/hc/en-us", labSlugs: FIGMA_LABS, lang: "en" },

  {
    id: "article-figma-mobile",
    kind: "article",
    tech: "figma",
    title: "Покрокове керівництво по роботі в Figma",
    author: "UX.PUB",
    description: "урок зі створення мобільного додатка українською",
    url: "https://ux.pub/editorial/pokrokovie-kierivnitstvo-po-roboti-v-figma-urok-zi-stvoriennia-mobilnogho-dodatka-53a9",
    labSlugs: ["lab-9-1", "lab-9-3"],
  },
];

export const DOCS_INITIAL_COUNT = 4;
