import { getLab } from "@/static-content/labs";
import { figures9_3 } from "@/static-content/labs/figmaFigures";
import * as data from "@/static-content/labs/lab9-3";
import { Callout, Compare, ControlQuestions, FigureGrid, Goals, LabHeader, LabSection, ReportRequirements, Rich, StepList } from "@/features/labs";

const lab = getLab("lab-9-3")!;
const practiceFigures = figures9_3.filter((f) => Number(f.number.split(".")[1]) >= 9);

export default function Lab9_3Page() {
  return (
    <>
      <LabHeader lab={lab} />
      <Goals items={data.goals} />
      <LabSection id="self-prep" title="Завдання для самопідготовки">
        <ol>{data.selfPrepQuestions.map((item) => (<li key={item}><Rich text={item} /></li>))}</ol>
      </LabSection>
      <LabSection id="components" title="Компоненти" number={1}>
        <ul>{data.componentFacts.map((item) => (<li key={item}><Rich text={item} /></li>))}</ul>
        <FigureGrid figures={figures9_3.filter((f) => Number(f.number.split(".")[1]) <= 4)} />
        <Compare columns={2} items={[{ title: "Головний компонент", points: data.mainComponent }, { title: "Екземпляр", points: data.instance }]} />
      </LabSection>
      <LabSection id="styles" title="Стилі" number={2}>
        <p>Стилі — теж багаторазові, але це не елементи, а <b>колекції властивостей</b>: тексту, кольору, сітки, ефектів. Створивши стиль, не потрібно щоразу підбирати властивості об'єкта — достатньо обрати наявний стиль.</p>
        <p>Щоб створити стиль, натисніть іконку перегляду стилів, потім «+» на обраному елементі та вкажіть унікальну назву. Новий стиль з'явиться у списку стилів проєкту, а його властивості можна змінити будь-коли — і зміни застосуються до всіх елементів з цим стилем.</p>
        <FigureGrid figures={figures9_3.filter((f) => /^Рис\. 3\.[5-8]\.$/.test(f.number))} />
        <Callout tone="modern">У сучасній Figma, крім стилів, є <b>змінні (Variables)</b>: кольори, відступи й тексти, які можна перемикати між режимами (наприклад, світла й темна тема). Саме вони відповідають CSS-змінним у коді.</Callout>
      </LabSection>
      <LabSection id="animation" title="Анімація у Figma" number={3}>
        <p>Прототипування у Figma — це зв'язки між екранами: для елемента задається <b>тригер</b> (наприклад, натискання),{" "}<b>дія</b> (перехід на іншу сторінку) та <b>анімація</b> переходу. Для складніших ефектів використовують анімацію Smart Animate або плагіни (наприклад, Figmotion).</p>
      </LabSection>
      <StepList slug="lab-9-3" id="practice" title="Практична частина: прототип" steps={data.practiceSteps} initial={10} intro={<p>Анімація створюється для проєкту з лабораторної №2 (макет з меню «Асортимент»).</p>} />
      <LabSection id="practice-figures" title="Рисунки до практичної частини" tocLabel="Рисунки">
        <FigureGrid figures={practiceFigures} />
      </LabSection>
      <LabSection id="independent" title="Самостійна робота">
        <p>Створіть анімацію для вашого індивідуального дизайн-макету сайту відповідно до варіанту.</p>
        <ReportRequirements />
      </LabSection>
      <LabSection id="group-task" title="Додаткове групове завдання">
        <Callout tone="tip" title="Додаткові бали">Додаткове завдання виконується за бажанням і дає змогу отримати додаткові бали та досвід роботи в команді.</Callout>
        <ul>{data.groupTask.map((item) => (<li key={item}><Rich text={item} /></li>))}</ul>
      </LabSection>
      <ControlQuestions items={data.questions} />
    </>
  );
}
