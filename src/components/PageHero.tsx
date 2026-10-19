import styles from "./PageHero.module.css";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
};

// The opening block on every page except Home.
export default function PageHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  );
}
