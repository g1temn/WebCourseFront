import type { ReactNode } from "react";
import type { TechGroup } from "@/static-content/types";
import styles from "./Badge.module.scss";

interface BadgeProps {
  tech?: TechGroup;
  tone?: "outline" | "sunken";
  size?: "xs" | "sm" | "md";
  children: ReactNode;
}

export function Badge({
  tech,
  tone = "outline",
  size = "sm",
  children,
}: BadgeProps) {
  const cls = [
    styles.badge,
    styles[size],
    tech ? styles[tech] : styles[tone],
  ].join(" ");
  return <span className={cls}>{children}</span>;
}
