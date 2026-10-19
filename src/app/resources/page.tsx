import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import styles from "./resources.module.css";

export const metadata: Metadata = { title: "Resources" };

// TODO: swap in BotBrawl's own site and rulebook once confirmed.
const botBrawlUrl = "https://www.chch.com/chch-news/robots-clash-in-hamilton-as-botbrawl-hosts-final-showdown-of-2025/";

const groups = [
  {
    title: "Rules and safety",
    text: "Read these before building anything with a spinning weapon.",
    links: [
      {
        label: "BotBrawl Rules",
        href: botBrawlUrl,
        note: "The rules for the league we compete in most.",
      },
      {
        label: "SPARC Ruleset",
        href: "https://www.sparc.tools/",
        note: "The standard safety and design rules for small combat robots.",
      },
      {
        label: "NHRL Rules",
        href: "https://www.nhrl.io/",
        note: "Rules and weight limits for the National Havoc Robot League.",
      },
    ],
  },
  {
    title: "Competitions",
    text: "Where small robots fight.",
    links: [
      {
        label: "BotBrawl",
        href: botBrawlUrl,
        note: "Our main league. Full-contact robot fights in Hamilton, Ontario.",
      },
      {
        label: "NHRL",
        href: "https://www.nhrl.io/",
        note: "Monthly 3 lb, 12 lb and 30 lb tournaments in Norwalk, Connecticut.",
      },
    ],
  },
  {
    title: "Design tools",
    text: "Free for students.",
    links: [
      {
        label: "Onshape Education",
        href: "https://www.onshape.com/en/education/",
        note: "Browser-based CAD, easy to share across the team.",
      },
      {
        label: "Autodesk Fusion for Education",
        href: "https://www.autodesk.com/education/edu-software/overview",
        note: "CAD, simulation and CAM for machining parts.",
      },
    ],
  },
  {
    title: "Simulation and PCB",
    text: "Free for students.",
    links: [
      {
        label: "Altium Education",
        href: "https://www.altium.com/education/student-licenses",
        note: "PCB design for custom control boards and wiring.",
      },
      {
        label: "Ansys Student",
        href: "https://www.ansys.com/academic/students/ansys-student",
        note: "Stress and impact simulation for armour and weapon parts.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Start building."
        intro="Rules, tools and references for new members and anyone curious about combat robotics."
      />

      <Section tone="alt" width="wide">
        <div className={styles.groups}>
          {groups.map((g) => (
            <section key={g.title} className={styles.group}>
              <h2>{g.title}</h2>
              <p className={styles.groupText}>{g.text}</p>
              <ul>
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer">
                      <span className={styles.linkLabel}>{l.label}</span>
                      <span className={styles.linkNote}>{l.note}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section
        title="Member guides."
        intro="Build guides, our parts list and shop safety training will live here once the team is up and running."
      />
    </>
  );
}
