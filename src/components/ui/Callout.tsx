import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import styles from "./Callout.module.scss";

export type CalloutTone = "modern" | "warning" | "tip" | "info";

const config: Record<CalloutTone, { icon: IconName; title: string }> = {
  modern: { icon: "clock", title: "Сучасний погляд" },
  warning: { icon: "warning", title: "Зверніть увагу" },
  tip: { icon: "tip", title: "Порада" },
  info: { icon: "info", title: "Довідка" },
};

interface CalloutProps {
  tone: CalloutTone;
  title?: ReactNode;
  icon?: IconName;
  children: ReactNode;
}

export function Callout({ tone, title, icon, children }: CalloutProps) {
  const { icon: defaultIcon, title: defaultTitle } = config[tone];
  return (
    <aside className={`${styles.callout} ${styles[tone]}`}>
      <Icon name={icon ?? defaultIcon} size={24} className={styles.icon} />
      <div className={styles.body}>
        {title !== null && (
          <b className={styles.title}>{title ?? defaultTitle}</b>
        )}
        <div className={styles.text}>{children}</div>
      </div>
    </aside>
  );
}
