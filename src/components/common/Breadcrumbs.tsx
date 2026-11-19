import { Fragment } from "react";
import { Link } from "react-router";
import styles from "./Breadcrumbs.module.scss";

interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({
  items,
  onDark,
}: {
  items: Crumb[];
  onDark?: boolean;
}) {
  return (
    <nav
      aria-label="Навігаційний ланцюжок"
      className={`${styles.crumbs} ${onDark ? styles.onDark : ""}`}
    >
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && " / "}
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
