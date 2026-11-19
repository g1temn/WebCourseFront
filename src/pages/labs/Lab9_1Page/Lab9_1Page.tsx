import { getLab } from "@/static-content/labs";
import { figures9_1 } from "@/static-content/labs/figmaFigures";
import * as data from "@/static-content/labs/lab9-1";
import { Callout, Compare, ControlQuestions, Figure, FigureGrid, Goals, LabHeader, LabSection, ProcessFlow, RefTable, ReportRequirements, Rich, StepList } from "@/features/labs";

const lab = getLab("lab-9-1")!;
const practiceFigures = figures9_1.slice(3);

export default function Lab9_1Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="self-prep" title="Завдання для самопідготовки">
        <p>До заняття необхідно розглянути питання:</p>
        <ol>{data.selfPrepQuestions.map((item) => (<li key={item}><Rich text={item} /></li>))}</ol>
        <p>До звіту внесіть номер лабораторної роботи, тему й мету та короткий конспект теоретичних відомостей.</p>
      </LabSection>
      <LabSection id="ui-ux" title="UI і UX" number={1}>
        <p>Прийнято виділяти дві сфери дизайну вебпродуктів. <b>UI</b> (User Interface, інтерфейс користувача) — візуальне представлення бренду, сайту чи застосунку: кнопки, тексти, зображення, поля введення, переходи, анімація й мікровзаємодії. UI-дизайнери відповідають за привабливість продукту.</p>
        <p><b>UX</b> (User Experience, користувацький досвід) — те, як користувачі взаємодіють із застосунком і наскільки ефективно організовано цю взаємодію. UX-дизайнери визначають структуру інтерфейсу, функціональність і зв'язки між його частинами; дисципліна поєднує психологію, аналітику та розуміння сучасних сервісів.</p>
        <Compare columns={2} items={[{ title: "Особливості UI-дизайну", points: data.uiFeatures }, { title: "Особливості UX-дизайну", points: data.uxFeatures }]} />
        <Callout tone="info">Обидва напрями важливі: якщо продукт зручний, але візуально нестерпний, клієнт обере конкурента — і навпаки. Починати варто з UX (прототип розташування елементів), а потім переходити до палітри, шрифтів і деталей стилю.</Callout>
      </LabSection>
      <LabSection id="stages" title="Етапи створення інтерфейсу" number={2}>
        <ProcessFlow steps={data.uiStages} />
        <p>Для веб-дизайну існує багато програм: Balsamiq Mockups, Webflow, Photoshop, Axure RP, Justinmind, Figma, Adobe XD, InVision Studio, Sketch. Найпопулярніші — Adobe XD, Sketch і Figma. У курсі вивчається онлайн-сервіс{" "}<b>Figma</b>: він має офлайн-версії для Windows, macOS і Linux, підходить і для простих прототипів, і для складних командних проєктів у реальному часі, а необхідний мінімум функцій безкоштовний.</p>
      </LabSection>
      <LabSection id="registration" title="Реєстрація у Figma" number={3}>
        <ol>{data.registrationSteps.map((item) => (<li key={item}><Rich text={item} /></li>))}</ol>
        <FigureGrid figures={figures9_1.filter((f) => ["Рис. 1.1.", "Рис. 1.2."].includes(f.number))} />
      </LabSection>
      <LabSection id="interface" title="Інтерфейс Figma" number={4}>
        <Figure {...figures9_1[2]} alt="Вікно редактора Figma з пронумерованими частинами інтерфейсу" />
        <RefTable title="Частини інтерфейсу Figma (рис. 1.3)" columns={["№", "Частина інтерфейсу"]} rows={data.interfaceParts} />
      </LabSection>
      <LabSection id="hotkeys" title="Гарячі клавіші" number={5}>
        <RefTable title="Основні гарячі клавіші Figma (Windows; на macOS замість Ctrl — Cmd)" columns={["Клавіші", "Дія"]} rows={data.hotkeys} searchable />
      </LabSection>
      <StepList slug="lab-9-1" id="practice" title="Практична частина: логотип" steps={data.logoSteps} initial={10} intro={<p>У практичній частині створюється логотип «Whale» (кит) — так ви освоїте фігури, логічні операції (Subtract, Union), маски, прозорість, градієнти, текст і експорт.</p>} />
      <LabSection id="practice-figures" title="Рисунки до практичної частини" tocLabel="Рисунки">
        <FigureGrid figures={practiceFigures} />
      </LabSection>
      <LabSection id="independent" title="Самостійна робота">
        <ul>{data.independentWork.map((item) => (<li key={item}><Rich text={item} /></li>))}</ul>
        <ReportRequirements />
      </LabSection>
      <ControlQuestions items={data.questions} />
    </>
  );
}
