import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  as?: ElementType;
  wide?: boolean;
  className?: string;
  id?: string;
  children: ReactNode;
}

export function Container({
  as: Tag = "div",
  wide,
  className,
  id,
  children,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={[styles.container, wide && styles.wide, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
