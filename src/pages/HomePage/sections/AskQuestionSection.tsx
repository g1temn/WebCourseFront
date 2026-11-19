import { useState, type FormEvent } from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { SelectField, TextAreaField, TextField } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { labLabel, labs } from "@/static-content/labs";
import type { QuestionPayload } from "@/static-content/types";
import styles from "./AskQuestionSection.module.scss";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMPTY: QuestionPayload = { name: "", email: "", labSlug: "", message: "" };

function validate(values: QuestionPayload): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Вкажіть ім'я";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Перевірте адресу email";
  if (values.message.trim().length < 10) errors.message = "Опишіть питання (щонайменше 10 символів)";
  return errors;
}

export function AskQuestionSection() {
  const [values, setValues] = useState<QuestionPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof QuestionPayload) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setSent(false);
    if (errors[field as keyof Errors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSent(true);
    setValues(EMPTY);
  };

  return (
    <section className={styles.section} aria-labelledby="ask-title">
      <Container>
        <div className={styles.card}>
          <div className={styles.intro}>
            <h2 id="ask-title" className={styles.title}>
              Задати питання
            </h2>
            <p className={styles.text}>
              Питання щодо лабораторної роботи, редактора або дисципліни загалом. Відповіді на найпоширеніші питання
              буде додано до розділу FAQ.
            </p>
          </div>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <TextField
              label="Ім'я"
              name="name"
              autoComplete="name"
              placeholder="Як до вас звертатися"
              value={values.name}
              error={errors.name}
              onChange={(e) => update("name")(e.target.value)}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@nmu.one"
              value={values.email}
              error={errors.email}
              onChange={(e) => update("email")(e.target.value)}
            />
            <SelectField
              full
              label="Лабораторна"
              hint="необов'язково"
              name="labSlug"
              value={values.labSlug}
              onChange={(e) => update("labSlug")(e.target.value)}
            >
              <option value="">Не стосується конкретної лабораторної роботи</option>
              {labs.map((lab) => (
                <option key={lab.slug} value={lab.slug}>
                  {labLabel(lab)} — {lab.title}
                </option>
              ))}
            </SelectField>
            <TextAreaField
              full
              label="Питання"
              name="message"
              rows={4}
              placeholder="Опишіть питання або проблему"
              value={values.message}
              error={errors.message}
              onChange={(e) => update("message")(e.target.value)}
            />
            <div className={styles.submit}>
              <Button type="submit" size="lg">
                Надіслати питання
              </Button>
              {sent && (
                <p className={styles.success} role="status">
                  <Icon name="check" size={18} strokeWidth={2.4} />
                  Дякуємо! Відповідь з'явиться в розділі FAQ.
                </p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
