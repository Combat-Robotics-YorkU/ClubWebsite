import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RobotIllustration from "@/components/RobotIllustration";
import { getRobot, robots } from "@/robots";
import styles from "./robot.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return robots.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const robot = getRobot((await params).slug);
  return { title: robot?.name ?? "Robot" };
}

export default async function RobotPage({ params }: Props) {
  const robot = getRobot((await params).slug);
  if (!robot) notFound();

  return (
    <article>
      <div className={styles.topbar}>
        <Link href="/robots" className={styles.back}>
          All robots
        </Link>
      </div>

      <header className={styles.hero}>
        <p className={styles.meta}>
          {robot.weightClass} · {robot.weight} · {robot.year}
        </p>
        <h1>{robot.name}</h1>
        <p className={styles.lead}>{robot.description}</p>
        <RobotIllustration className={styles.drawing} />
      </header>

      <section className={styles.section}>
        <div className={styles.columns}>
          <div className={styles.overview}>
            <h2>Overview</h2>
            {robot.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className={styles.specs}>
            {robot.specs.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.journalInner}>
          <h2>
            Engineering <em>journal</em>
          </h2>
          <div className={styles.journal}>
            {robot.journal.map((entry) => (
              <section key={entry.title} className={styles.entry}>
                <div className={styles.entryImage}>
                  {entry.image ? (
                    <Image src={entry.image} alt={entry.imageAlt ?? entry.title} fill sizes="(max-width: 833px) 100vw, 50vw" />
                  ) : (
                    <span>Photo coming soon</span>
                  )}
                </div>
                <div className={styles.entryText}>
                  <h3>{entry.title}</h3>
                  {entry.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
