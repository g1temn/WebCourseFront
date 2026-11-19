import { Callout } from "@/components/ui/Callout";

export function ReportRequirements() {
  return (
    <Callout tone="info" title="Вимоги до звіту">
      <p>
        Звіт оформлюється відповідно до стандарту ДСТУ 3008-15 і повинен
        містити:
      </p>
      <ul>
        <li>номер лабораторної роботи, тему й мету;</li>
        <li>стислий конспект теоретичних відомостей;</li>
        <li>результати виконання практичної частини та самостійної роботи.</li>
      </ul>
    </Callout>
  );
}
