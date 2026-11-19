import logoColor from "@/assets/images/ntudp-logo-color.png";
import { MapEmbed } from "@/components/common/MapEmbed";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { university } from "@/static-content/site";
import styles from "./sections.module.scss";

export function LocationSection() {
  return (
    <section id="location" className={styles.section} aria-labelledby="location-title">
      <h2 id="location-title" className={styles.title}>
        Розташування університету
      </h2>
      <div className={styles.location}>
        <MapEmbed className={styles.map} />
        <div className={styles.place}>
          <img src={logoColor} alt="" width={640} height={255} />
          <b>{university.name}</b>
          <address className={styles.placeRow}>
            <Icon name="pin" size={18} />
            <span>
              {university.street},
              <br />
              {university.city}
            </span>
          </address>
          <div className={styles.placeRow}>
            <Icon name="building" size={18} />
            <span>{university.faculty}</span>
          </div>
          <div className={styles.placeLink}>
            <Button href={university.mapUrl} newWindow variant="secondary" size="md" icon="external">
              Відкрити в Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
