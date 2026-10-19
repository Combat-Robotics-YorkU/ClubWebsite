import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Stats from "@/components/Stats";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About" };

const matchFacts = [
  { value: "3 min", label: "Match length" },
  { value: "1 v 1", label: "Robots per fight" },
  { value: "KO", label: "Or a judges' decision" },
];

const subteams = [
  {
    name: "Mechanical",
    text: "Chassis, armour, weapons and drivetrains. CAD, stress analysis, machining and 3D printing.",
  },
  {
    name: "Electrical",
    text: "Batteries, motor controllers, brushless weapon motors and wiring that survives a direct hit.",
  },
  {
    name: "Software",
    text: "Radio control, motor tuning, telemetry and the tools we use to test and simulate designs.",
  },
  {
    name: "Business",
    text: "Sponsorships, finances, events, social media and keeping the team running.",
  },
];

const leads = [
  { role: "President", name: "Zain Ali" },
  { role: "Mechanical Lead", name: "To be announced" },
  { role: "Business Lead", name: "To be announced" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Small robots. Serious <em>engineering</em>.</>}
        intro="We are a student design team at the Lassonde School of Engineering that builds combat robots and takes them to competition. Our goal is to give students real, hands-on engineering experience that classes can't."
      />

      <Section tone="alt" width="wide">
        <div className={styles.mission}>
          <div>
            <h2>Our mission</h2>
          </div>
          <div className={styles.missionText}>
            <p>
              Combat robotics is one of the fastest ways to learn engineering. A robot has to be light,
              powerful and tough enough to survive a weapon designed to destroy it. Every fight shows you
              exactly what worked and what didn&apos;t.
            </p>
            <p>
              We want any student, in any program, to be able to design a part, build a robot and
              drive it in a real arena. We focus on the 1 lb and 3 lb classes, where robots are affordable
              to build, quick to rebuild and safe to test on campus.
            </p>
          </div>
        </div>
      </Section>

      <Section
                title="How a fight works."
        intro="Two robots enter an enclosed, polycarbonate-walled arena. The fight ends with a knockout, or after three minutes the judges score damage, aggression and control."
      >
        <Stats items={matchFacts} />
      </Section>

      <Section
        tone="alt"
        width="wide"
        eyebrow="Team structure"
        title="Four subteams. One robot."
        intro="Members join a subteam, but every robot is built by all four together."
      >
        <div className={styles.subteams}>
          {subteams.map((s) => (
            <article key={s.name} className={styles.subteam}>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Meet the team.">
        <ul className={styles.leads}>
          {leads.map(({ role, name }) => (
            <li key={role}>
              <div className={styles.avatar} aria-hidden="true" />
              <p className={styles.leadName}>{name}</p>
              <p className={styles.leadRole}>{role}</p>
            </li>
          ))}
        </ul>
        <div className={styles.cta}>
          <Button href="/contact">Get involved</Button>
        </div>
      </Section>
    </>
  );
}
