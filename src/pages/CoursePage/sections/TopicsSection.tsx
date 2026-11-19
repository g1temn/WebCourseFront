import { Icon } from "@/components/ui/Icon";
import { media, useMediaQuery } from "@/hooks/useMediaQuery";
import { topics } from "@/static-content/course";
import { techNames } from "@/static-content/labs";
import styles from "./sections.module.scss";

export function TopicsSection() {
  const isPhone = useMediaQuery(media.phone);

  return (
    <section id="topics" className={styles.section} aria-labelledby="topics-title">
      <h2 id="topics-title" className={styles.title}>
        Зміст дисципліни
      </h2>
      <div className={styles.topics}>
        {topics.map((topic, i) => {
          const head = (
            <>
              <b>
                {techNames[topic.group]} <span>· {topic.range}</span>
              </b>
              {isPhone && <Icon name="chevronDown" size={18} className={styles.topicChevron} />}
            </>
          );
          const list = (
            <ul className={styles.topicList}>
              {topic.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
          return isPhone ? (
            <details key={topic.group} className={`${styles.topic} ${styles[topic.group]}`} open={i === 0}>
              <summary className={styles.topicHead}>{head}</summary>
              {list}
            </details>
          ) : (
            <div key={topic.group} className={`${styles.topic} ${styles[topic.group]}`}>
              <div className={styles.topicHead}>{head}</div>
              {list}
            </div>
          );
        })}
      </div>
    </section>
  );
}
