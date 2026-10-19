import styles from "./Section.module.css";

type Props = {
  tone?: "default" | "alt";
  width?: "content" | "wide";
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  id?: string;
  children?: React.ReactNode;
};

export default function Section({
  tone = "default",
  width = "content",
  eyebrow,
  title,
  intro,
  align = "center",
  id,
  children,
}: Props) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <div className={`${styles.inner} ${width === "wide" ? styles.wide : ""}`}>
        {(eyebrow || title || intro) && (
          <header className={`${styles.header} ${align === "left" ? styles.left : ""}`}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {intro && <p className={styles.intro}>{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
