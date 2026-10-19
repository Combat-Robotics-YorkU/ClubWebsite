import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { site } from "@/site";
import styles from "./contact.module.css";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Get in <em>touch</em>.</>}
        intro="Want to join, sponsor or just say hello? Here's how to reach us."
      />

      <Section tone="alt" width="wide">
        <div className={styles.cards}>
          <article className={`${styles.card} ${styles.featured}`}>
            <h2>Join the team</h2>
            <p>Our Discord is where we plan builds, share CAD and announce meetings. Any program, any year.</p>
            <Button href={site.discord}>Join our Discord</Button>
          </article>
          <article className={styles.card}>
            <h2>Sponsorships</h2>
            <p>Want to support the team with funding, parts or services? Email us and we&apos;ll send our sponsorship package.</p>
            <p className={styles.email}>{site.email}</p>
          </article>
          <article className={styles.card}>
            <h2>Everything else</h2>
            <p>Questions about the team, events or anything else.</p>
            <p className={styles.email}>{site.email}</p>
          </article>
        </div>
        <div className={styles.socials}>
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} {...(s.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}>
              <Image src={s.icon} alt="" width={22} height={22} />
              {s.label}
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
