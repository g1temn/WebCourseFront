import type { ReactNode } from "react";
import { Link } from "react-router";
import { Icon, type IconName } from "./Icon";
import styles from "./Button.module.scss";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "light"
  | "onDark"
  | "onDarkOutline";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconLeft?: IconName;
  block?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps &
  (
    | {
        to: string;
        href?: never;
        onClick?: never;
        type?: never;
        newWindow?: boolean;
        download?: never;
      }
    | {
        href: string;
        to?: never;
        onClick?: never;
        type?: never;
        newWindow?: boolean;
        download?: boolean | string;
      }
    | {
        onClick?: () => void;
        type?: "button" | "submit";
        to?: never;
        href?: never;
        newWindow?: never;
        download?: never;
      }
  );

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconLeft,
    block,
    className,
    children,
  } = props;
  const cls = [
    styles.button,
    styles[variant],
    styles[size],
    block && styles.block,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const iconSize = size === "sm" ? 14 : 16;
  const content = (
    <>
      {iconLeft && <Icon name={iconLeft} size={iconSize + 2} />}
      <span>{children}</span>
      {icon && <Icon name={icon} size={iconSize} />}
    </>
  );
  const windowProps = props.newWindow
    ? { target: "_blank", rel: "noopener" }
    : {};

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={cls} {...windowProps}>
        {content}
      </Link>
    );
  }
  if (props.href !== undefined) {
    return (
      <a
        href={props.href}
        className={cls}
        download={props.download}
        {...windowProps}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      className={cls}
      onClick={props.onClick}
    >
      {content}
    </button>
  );
}
