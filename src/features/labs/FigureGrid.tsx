import { Figure } from "./Figure";
import styles from "./FigureGrid.module.scss";

export interface GridFigure {
  src: string;
  number?: string;
  caption: string;
  alt?: string;
}

export function FigureGrid({ figures }: { figures: GridFigure[] }) {
  return (
    <div className={styles.grid}>
      {figures.map((figure) => (
        <Figure
          key={figure.src}
          src={figure.src}
          alt={figure.alt ?? figure.caption}
          number={figure.number}
          caption={figure.caption}
          inline
        />
      ))}
    </div>
  );
}
