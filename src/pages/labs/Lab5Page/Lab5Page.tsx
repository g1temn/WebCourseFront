import { getLab, labResultUrl } from "@/static-content/labs";
import * as data from "@/static-content/labs/lab5";
import { Callout, CodeListing, Compare, ControlQuestions, Figure, Goals, LabFiles, LabHeader, LabSection, RefTable, Rich, StepList } from "@/features/labs";

const lab = getLab("lab-5")!;

const result = (n: number, caption: string) => ({
  src: labResultUrl(lab.slug, n),
  alt: caption,
  caption,
});

export default function Lab5Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="frames" title="Фрейми у HTML5" number={1}>
        <p><b>Фрейм</b> — окреме вікно в html-сторінці, в якому відображається інша сторінка: «сторінка у сторінці». Фрейми розбивають вебсторінку на підвікна з прокруткою. Кожен фрейм:</p>
        <ul>
          <li>має свій URL, тому завантажується незалежно від інших;</li>
          <li>має власне ім'я (атрибут <code>name</code>), що дозволяє переходити до нього з іншого фрейма (атрибут <code>target</code> посилання);</li>
          <li>може змінювати розмір мишею, якщо це не заборонено.</li>
        </ul>
        <p>Зазвичай фрейми використовують для:</p>
        <ul>{data.frameUses.map((item) => (<li key={item}><Rich text={item} /></li>))}</ul>
        <p>Не рекомендується використовувати фрейми як фотогалерею, вікно чату чи навігацію. У HTML5 не підтримується тег{" "}<code>{"<frameset>"}</code>, але є схожий за призначенням <code>{"<iframe>"}</code> — плаваючий фрейм усередині звичайного документа. Текст між <code>{"<iframe>"}</code> і <code>{"</iframe>"}</code> побачать лише користувачі браузерів без підтримки фреймів.</p>
      </LabSection>
      <LabSection id="pros-cons" title="Переваги і недоліки" number={2}>
        <Compare columns={2} items={[{ title: "Переваги", points: data.framePros, tone: "plus" }, { title: "Недоліки", points: data.frameCons, tone: "minus" }]} />
      </LabSection>
      <LabSection id="iframe" title="Атрибути <iframe>" number={3}>
        <RefTable title="Атрибути тега <iframe>" columns={["Атрибут", "Призначення"]} rows={data.iframeAttributes} searchable />
        <p>У лівому фреймі — меню, у правому (name="content") відкриваються обрані сторінки.</p>
        <CodeListing title="Лістинг 5.1" file="Приклад використання фреймів" lang="html" code={data.framesListing} />
        <CodeListing title="Лістинг 5.2" file="Атрибут target у тезі <a>" lang="html" code={data.targetListing} />
        <Callout tone="modern">Атрибути <code>frameborder</code>, <code>scrolling</code>, <code>align</code>, <code>marginwidth</code> застарілі — їх замінює CSS (<code>border: none</code>, <code>overflow</code>). А от <code>sandbox</code>,{" "}<code>loading="lazy"</code> та <code>allow</code> — сучасні й корисні атрибути для безпеки та швидкості.</Callout>
      </LabSection>
      <LabSection id="image-maps" title="Карти зображень" number={4}>
        <p>Карти зображень прив'язують посилання до різних областей одного зображення. Бувають <b>серверні</b> (браузер надсилає на сервер координати курсора й чекає адресу) і <b>клієнтські</b> (карта описана в тому ж HTML-документі) — останні використовуються частіше.</p>
        <p>Атрибут <code>usemap</code> тега <code>{"<img>"}</code> посилається на опис карти — тег{" "}<code>{"<map>"}</code>, значення <code>name</code> якого має збігатися з <code>usemap</code>. Активні області задаються тегами <code>{"<area>"}</code>.</p>
        <RefTable title="Атрибути тега <area>" columns={["Атрибут", "Призначення"]} rows={data.areaAttributes} />
        <RefTable title="Координати для різних форм" columns={["shape", "Що задається", "Приклад"]} rows={data.coordsRules} />
        <CodeListing title="Приклад" file="Карта зображень з трьома фігурами" lang="html" code={data.mapListing} result={result(1, "Результат: Карта зображень з трьома фігурами")} />
        <Callout tone="modern">Методичка пропонує як альтернативу картам зображень Flash — він більше не підтримується браузерами. Сьогодні непрямокутні клікабельні області роблять за допомогою SVG.</Callout>
      </LabSection>
      <Callout tone="tip" title="Фрейми в редакторі">У вбудованому редакторі створіть файли <code>index.html</code>, <code>menu.html</code>, <code>content.html</code> і <code>map.html</code> в одній папці: посилання з <code>target</code> відкриватимуть сторінки проєкту у фреймі так само, як на сервері.</Callout>
      <Figure src="/labs/lab-5/figures/final-result.webp" alt="Сторінка з меню у лівому фреймі та вмістом у правому" caption="Кінцевий вигляд виконаної роботи" />
      <StepList slug="lab-5" steps={data.steps} />
      <ControlQuestions items={data.questions} />
      <LabFiles lab={lab} />
    </>
  );
}
