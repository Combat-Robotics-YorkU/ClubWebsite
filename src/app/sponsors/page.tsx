import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import SponsorWall from "@/components/SponsorWall";
import { site } from "@/site";
import styles from "./sponsors.module.css";

export const metadata: Metadata = { title: "Sponsors" };

const budget = [
  {
    label: "Parts and materials",
    detail: "Motors, controllers, ESCs and raw materials. On a robot this small, the costs add up fast.",
  },
  {
    label: "Competitions",
    detail: "Entry fees and travel to get our robots to events.",
  },
  {
    label: "Tools and fabrication",
    detail: "3D printing, filament, tools, CNC and machining.",
  },
  {
    label: "Testing and safety",
    detail: "Combat robots get destroyed in testing, and replacing parts is expensive. We also won't cut corners on safety gear or a proper test box.",
  },
];

const benefits = [
  {
    title: "Get seen",
    text: "Your logo on our robots, team shirts, this website and every match video we post.",
  },
  {
    title: "Work with the team",
    text: "We're a brand-new team, so the parts and tools we start with become our standard. Get your product into our builds early and it grows with the club.",
  },
  {
    title: "Hire from us",
    text: "Meet students who have designed, built and repaired real hardware under a deadline.",
  },
];

// Tier amounts and perks are placeholders until the sponsorship package is finalized.
const tiers = [
  {
    name: "Bronze",
    amount: "$250",
    perks: ["Logo on our website", "Thank-you post on social media"],
  },
  {
    name: "Silver",
    amount: "$500",
    perks: ["Everything in Bronze", "Small logo on a competition robot", "Logo on team shirts"],
  },
  {
    name: "Gold",
    amount: "$1,000",
    perks: ["Everything in Silver", "Large logo on a competition robot", "Access to member resumes"],
  },
  {
    name: "Platinum",
    amount: "$2,500+",
    perks: ["Everything in Gold", "Name a robot", "Tech talk or workshop with the team"],
  },
];

// For companies that give parts, materials or services instead of money.
const inKind = {
  name: "In-kind",
  amount: "Parts, materials or services",
  text: "Machining, materials, components, software licences or anything else that goes into a robot. Recognition is matched to the value of what you give.",
  perks: ["Listed with the matching cash tier", "Credit in the build journal wherever your part or service is used"],
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors"
        title={<>Help us build what&apos;s <em>next</em>.</>}
        intro="We want to keep the club as accessible as possible, so anyone can build and fight robots at little to no cost, while still competing at a high level. Sponsors make that possible."
      >
        <Button href="#become-a-sponsor">Become a sponsor</Button>
        <Button href="#tiers" variant="link">
          See sponsorship tiers
        </Button>
      </PageHero>

      <Section tone="alt" width="wide" eyebrow="Where your money goes" title="Every dollar ends up in a robot." align="left">
        <ul className={styles.budget}>
          {budget.map((b) => (
            <li key={b.label}>
              <h3>{b.label}</h3>
              <p>{b.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section width="wide" eyebrow="What you get" title="Why sponsor us." align="left">
        <div className={styles.benefits}>
          {benefits.map((b) => (
            <article key={b.title} className={styles.benefit}>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="tiers"
        tone="alt"
        width="wide"
        eyebrow="Sponsorship tiers"
        title="Choose your level."
      >
        <div className={styles.tiers}>
          {tiers.map((t) => (
            <article key={t.name} className={styles.tier}>
              <h3>{t.name}</h3>
              <p className={styles.amount}>{t.amount}</p>
              <ul>
                {t.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className={`${styles.tier} ${styles.inKind}`}>
            <div>
              <h3>{inKind.name}</h3>
              <p className={styles.inKindAmount}>{inKind.amount}</p>
              <p className={styles.inKindText}>{inKind.text}</p>
            </div>
            <ul>
              {inKind.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section width="wide" title="Our sponsors." intro="Be one of the first companies to back the team.">
        <SponsorWall />
      </Section>

      <Section id="become-a-sponsor" tone="alt" title={<>Become a <em>sponsor</em>.</>} intro="Email us and we'll send you our sponsorship package.">
        <div className={styles.contact}>
          <p className={styles.email}>{site.email}</p>
          <Button href={`mailto:${site.email}?subject=Sponsorship`}>Email us</Button>
        </div>
      </Section>
    </>
  );
}
