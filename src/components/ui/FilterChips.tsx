import styles from "./FilterChips.module.scss";

interface Option<T extends string> {
  value: T;
  label: string;
}

interface FilterChipsProps<T extends string> {
  label: string;
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function FilterChips<T extends string>({
  label,
  options,
  value,
  onChange,
}: FilterChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className={styles.group}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={styles.chip}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
