import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import RobotCard from "@/components/RobotCard";
import { robots } from "@/robots";
import styles from "./robots.module.css";

export const metadata: Metadata = { title: "Robots" };

export default function RobotsPage() {
  return (
    <>
      <PageHero eyebrow="Robots" title={<>Our <em>robots</em>.</>} />

      <Section tone="alt" width="wide">
        <div className={styles.grid}>
          {robots.map((r) => (
            <RobotCard key={r.name} robot={r} />
          ))}
        </div>
      </Section>
    </>
  );
}
