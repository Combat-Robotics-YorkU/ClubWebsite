import styles from "./Stats.module.css";

// A row of large figures with labels, for dark sections.
export default function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className={styles.stats}>
      {items.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
