export const siteTitle = "Web-технології та web-дизайн";

export const navigation = [
  { to: "/", label: "Головна", end: true },
  { to: "/course", label: "Про курс" },
  { to: "/labs", label: "Лабораторні роботи" },
  { to: "/resources", label: "Матеріали" },
] as const;

export const university = {
  name: "НТУ «Дніпровська політехніка»",
  fullName: "Національний технічний університет «Дніпровська політехніка»",
  faculty: "Факультет інформаційних технологій",
  facultyShort: "ФІТ",
  street: "просп. Дмитра Яворницького, 19",
  city: "Дніпро, 49005",
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Національний технічний університет Дніпровська політехніка, просп. Дмитра Яворницького 19, Дніпро") +
    "&z=16&output=embed",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("НТУ Дніпровська політехніка"),
};

export const course = {
  specialty: "F2 «Інженерія програмного забезпечення»",
  year: "2 курс",
  semester: "1 семестр",
  labsCount: 11,
  hoursPerLab: 2,
  techCount: 3,
};

export const footerText =
  "Факультет інформаційних технологій, НТУ «Дніпровська політехніка». Спеціальність F2 «Інженерія програмного забезпечення», 2 курс, 1 семестр.";

export const copyright = `© ${new Date().getFullYear()} ФІТ НТУ «Дніпровська політехніка»`;

export const methodics = [
  {
    group: "html",
    title: "Лабораторні роботи №1–5 (HTML)",
    description: "Методичні вказівки з основ мови розмітки",
    file: "/files/html-labs.pdf",
  },
  {
    group: "css",
    title: "Лабораторні роботи №6–8 (CSS)",
    description: "Методичні вказівки з каскадних таблиць стилів",
    file: "/files/css-labs.pdf",
  },
  {
    group: "figma",
    title: "Лабораторні роботи №1–3 (Figma)",
    description: "Методичні рекомендації з веб-дизайну",
    file: "/files/figma-labs.pdf",
  },
] as const;

export const methodicsByGroup = {
  html: "/files/html-labs.pdf",
  css: "/files/css-labs.pdf",
  figma: "/files/figma-labs.pdf",
} as const;
