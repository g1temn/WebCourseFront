export const starterProjectName = "my-site";

export const starterFolders = ["css", "js"];

export const starterFiles: Record<string, string> = {
  "index.html": `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="utf-8">
  <title>Моя сторінка</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <a href="#image">Зображення</a> | <a href="#spisok">Списки</a> | <a href="about.html">Про мене</a>

  <h2><a name="image">Зображення</a></h2>
  <p>
    <img src="{{ORIGIN}}/labs/lab-2/files/title.jpg"
         alt="Обкладинка" width="110" align="left">
    Текст обтікає зображення праворуч.
  </p>

  <h2><a name="spisok">Списки</a></h2>
  <ul type="square">
    <li>HTML</li>
    <li>CSS</li>
  </ul>

  <script src="js/script.js"></script>
</body>
</html>
`,
  "about.html": `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="utf-8">
  <title>Про мене</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Про мене</h1>
  <p>Ця сторінка лежить у тій самій папці, що й index.html.</p>
  <p><a href="index.html">← На головну</a></p>
</body>
</html>
`,
  "css/style.css": `h2 {
  clear: both;
  color: #B3261E;
}

ul {
  margin-top: 8px;
}
`,
  "js/script.js": `// Повідомлення з'являються в панелі «Консоль»
console.log("Сторінку завантажено");
`,
};
