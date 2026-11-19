import type { LabFile, LabMeta, TechGroup } from "./types";

const img = (name: string, label?: string): LabFile => ({ name, label, kind: "image" });
const txt = (name: string, label: string): LabFile => ({ name, label, kind: "text" });

export const techNames: Record<TechGroup, string> = { html: "HTML", css: "CSS", figma: "Figma" };

export const labs: LabMeta[] = [
  {
    slug: "lab-1",
    group: "html",
    number: 1,
    title: "Web-сервер XAMPP. Введення в HTML",
    shortTitle: "Web-сервер XAMPP. Введення в HTML",
    topic: "Структура документа, форматування тексту, спецсимволи",
    lead: "Локальний web-сервер XAMPP і власний домен, структура HTML-документа, теги форматування тексту, спецсимволи та коментарі.",
    hours: 2,
    hasEditor: true,
    files: [
      img("lab1-1.jpg", "Зразок виконання"),
      img("code.png", "Зразок коду"),
      txt("tekst.txt", "Текст до роботи"),
      ...[
        "fon-blue51.gif", "fon-blue53.gif", "fon-blue56.gif", "fon-brown5.gif", "fon-brown48.jpg",
        "fon-brown50.jpg", "fon-brown53.jpg", "fon-cream9.jpg", "fon-cream12.jpg", "fon-cream15.jpg",
        "fon-cream20.gif", "fon-green14.jpg", "fon-green34.jpg", "fon-green39.jpg", "fon-ser13.gif",
        "fon-ser23.gif", "fon-ser26.jpg", "fon-ser67.gif", "fon-ser69.jpg", "fon-ser90.jpg",
      ].map((name) => img(name)),
    ],
  },
  {
    slug: "lab-2",
    group: "html",
    number: 2,
    title: "Зображення. Списки. Посилання",
    shortTitle: "Зображення. Списки. Посилання",
    topic: "Тег img, маркіровані й нумеровані списки, якорі",
    lead: "Тег `<img>` та його атрибути, маркіровані й нумеровані списки, списки визначень, якорі та посилання.",
    hours: 2,
    hasEditor: true,
    files: [
      img("lab2.jpg", "Зразок виконання"),
      img("title.jpg"),
      img("chemistry.jpg"),
      img("film.jpg"),
      img("volshebstvo.jpg"),
      img("ponedelnik1.jpg"),
      img("dvoe.jpg"),
      txt("tekst.txt", "Текст до роботи"),
    ],
  },
  {
    slug: "lab-3",
    group: "html",
    number: 3,
    title: "Таблиці",
    shortTitle: "Таблиці",
    topic: "Об'єднання клітинок, фіксовані й динамічні таблиці, шаблон сайту",
    lead: "Створення таблиць, їх атрибути, об'єднання клітинок і таблична верстка шаблону сайту.",
    hours: 2,
    hasEditor: true,
    files: [
      img("zrazok-saitu.jpg", "Зразок сайту"),
      img("shapka-saitu.jpg", "Шапка сайту"),
      img("kut-contour4.jpg", "Заокруглений кут"),
      img("kut-1.jpg"),
      img("kut-3.jpg"),
      img("kut-7.jpg"),
      img("kut-9.jpg"),
      img("spacer.gif", "Прозорий spacer.gif"),
    ],
  },
  {
    slug: "lab-4",
    group: "html",
    number: 4,
    title: "Форми",
    shortTitle: "Форми",
    topic: "Тег form, усі елементи керування, анкета",
    lead: "Тег `<form>`, обробка форми на сервері, текстові поля, перемикачі, прапорці, списки та кнопки.",
    hours: 2,
    hasEditor: true,
    files: [img("forma.jpg", "Зразок форми")],
  },
  {
    slug: "lab-5",
    group: "html",
    number: 5,
    title: "Фрейми (iframe) у HTML5. Карти зображень",
    shortTitle: "Фрейми (iframe) у HTML5. Карти зображень",
    topic: "Плаваючі фрейми, атрибут target, мапи й відео, карти зображень",
    lead: "Плаваючі фрейми `<iframe>`, завантаження сторінок у фрейм через `target`, вбудовані мапи й відео, карти зображень.",
    hours: 2,
    hasEditor: true,
    files: [
      img("figure-1.png", "Зразок виконання"),
      img("map-of-ukraine.gif"),
      img("map.gif"),
      img("map.jpg"),
      img("ua-admin.jpg"),
      img("fon.jpg"),
    ],
  },
  {
    slug: "lab-6",
    group: "css",
    number: 6,
    title: "Введення в каскадні таблиці стилів (CSS)",
    shortTitle: "Введення в CSS",
    topic: "Інструменти розробника, підключення стилів, класи, властивості тексту",
    lead: "Синтаксис CSS, способи підключення стилів, класи та ідентифікатори, властивості тексту й шрифту, інструменти розробника.",
    hours: 2,
    hasEditor: true,
    files: [],
  },
  {
    slug: "lab-7",
    group: "css",
    number: 7,
    title: "Властивості блокових об'єктів",
    shortTitle: "Властивості блокових об'єктів",
    topic: "Блоки div і span, позиціонування, z-index, прозорість",
    lead: "Блоки `<div>` і `<span>`, розміри, фон і рамки, `display` і `visibility`, позиціонування, `z-index`, заокруглені кути та прозорість.",
    hours: 2,
    hasEditor: true,
    files: [
      img("strawberry.jpg"),
      img("fon.jpg", "Фон панелі"),
      img("panel-top-left.gif"),
      img("panel-top-right.gif"),
      img("panel-bottom-left.gif"),
      img("panel-bottom-right.gif"),
    ],
  },
  {
    slug: "lab-8",
    group: "css",
    number: 8,
    title: "Додаткові властивості CSS",
    shortTitle: "Додаткові властивості CSS",
    topic: "Стилізація таблиць і списків, clip, overflow",
    lead: "Стилізація таблиць і списків, обрізання елементів (`clip`), переповнення (`overflow`) і смуги прокрутки.",
    hours: 2,
    hasEditor: true,
    files: [
      img("demo.jpg", "Зразок виконання"),
      img("image-1.jpeg", "Маркер списку 1"),
      img("image-2.jpeg", "Маркер списку 2"),
      img("image-3.jpeg", "Маркер списку 3"),
      txt("task1.txt", "Текст для таблиці"),
    ],
  },
  {
    slug: "lab-9-1",
    group: "figma",
    number: 1,
    title: "Введення в Web-дизайн. Он-лайн сервіс Figma",
    shortTitle: "Введення в Web-дизайн",
    topic: "UI/UX, інтерфейс Figma, перший макет",
    lead: "UI і UX дизайн, етапи створення інтерфейсу, реєстрація та інтерфейс Figma, гарячі клавіші й власний логотип.",
    hours: 2,
    hasEditor: false,
    files: [],
  },
  {
    slug: "lab-9-2",
    group: "figma",
    number: 2,
    title: "Адаптивність в Figma. Створення макету сайту",
    shortTitle: "Адаптивність в Figma",
    topic: "Макети для 1440, 1024 і 425 px, сітки, auto layout",
    lead: "Складові макета, фіксований і еластичний макет, Responsive і Adaptive design, сітки та макет сайту для трьох розмірів екрана.",
    hours: 2,
    hasEditor: false,
    files: [
      img("1440-golovna.webp", "Головна · 1440"),
      img("1440-asortyment.webp", "Асортимент · 1440"),
      img("1440-rozghortka-asortymentu.webp", "Розгортка асортименту · 1440"),
      img("1024-golovna.webp", "Головна · 1024"),
      img("1024-asortyment.webp", "Асортимент · 1024"),
      img("1024-rozghortka-asortymentu.webp", "Розгортка асортименту · 1024"),
      img("425-golovna.webp", "Головна · 425"),
      img("425-asortyment.webp", "Асортимент · 425"),
      img("425-menu.webp", "Меню · 425"),
    ],
  },
  {
    slug: "lab-9-3",
    group: "figma",
    number: 3,
    title: "Анімація макету сайту в Figma",
    shortTitle: "Анімація макету в Figma",
    topic: "Компоненти та екземпляри, стилі, прототип з анімацією",
    lead: "Компоненти та екземпляри, стилі кольорів і тексту, прототипування та анімація переходів між сторінками макета.",
    hours: 2,
    hasEditor: false,
    files: [],
  },
];

export const labGroups: { group: TechGroup; labs: LabMeta[] }[] = (["html", "css", "figma"] as const).map(
  (group) => ({ group, labs: labs.filter((lab) => lab.group === group) }),
);

export function getLab(slug: string | undefined): LabMeta | undefined {
  return labs.find((lab) => lab.slug === slug);
}

export function labLabel(lab: LabMeta): string {
  return `${techNames[lab.group]} · №${lab.number}`;
}

export function labShortLabel(lab: LabMeta): string {
  return `${techNames[lab.group]} №${lab.number}`;
}

export function labNeighbours(slug: string): { prev?: LabMeta; next?: LabMeta } {
  const index = labs.findIndex((lab) => lab.slug === slug);
  return { prev: labs[index - 1], next: labs[index + 1] };
}

export function labFileUrl(slug: string, name: string): string {
  return `/labs/${slug}/files/${name}`;
}

export function labFigureUrl(slug: string, name: string): string {
  return `/labs/${slug}/figures/${name}`;
}

export function plural(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

export function labResultUrl(slug: string, n: number): string {
  return `/labs/${slug}/results/listing-${n}.png`;
}
