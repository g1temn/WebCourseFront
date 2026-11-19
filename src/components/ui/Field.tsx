import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import styles from "./Field.module.scss";

interface FieldShellProps {
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  full?: boolean;
  children: ReactNode;
}

function FieldShell({ label, hint, error, full, children }: FieldShellProps) {
  return (
    <label className={`${styles.field} ${full ? styles.full : ""}`}>
      <span className={styles.label}>
        {label}
        {hint && <span className={styles.hint}> — {hint}</span>}
      </span>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}

type Common = {
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  full?: boolean;
};

export function TextField({
  label,
  hint,
  error,
  full,
  ...rest
}: Common & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell label={label} hint={hint} error={error} full={full}>
      <input
        className={styles.control}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  hint,
  error,
  full,
  children,
  ...rest
}: Common & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell label={label} hint={hint} error={error} full={full}>
      <select className={styles.control} {...rest}>
        {children}
      </select>
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  hint,
  error,
  full,
  ...rest
}: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell label={label} hint={hint} error={error} full={full}>
      <textarea
        className={`${styles.control} ${styles.textarea}`}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
    </FieldShell>
  );
}
