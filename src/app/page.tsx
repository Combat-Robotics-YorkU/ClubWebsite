import Button from "@/components/Button";
import Section from "@/components/Section";
import RobotCard from "@/components/RobotCard";
import RobotIllustration from "@/components/RobotIllustration";
import SponsorWall from "@/components/SponsorWall";
import { robots } from "@/robots";
import { site } from "@/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            YorkU Combat <em>Robotics</em>
          </h1>
          <p className={styles.heroLead}>We build robots that fight.</p>
          <div className={styles.heroActions}>
            <Button href="/robots">Meet the robots</Button>
            <Button href={site.discord} variant="link">
              Join our Discord
            </Button>
          </div>
        </div>
        <RobotIllustration className={styles.heroRobot} />
      </section>

      <Section tone="alt" width="wide" eyebrow="Robots" title="What we're building.">
        <div className={styles.robots}>
          {robots.map((r) => (
            <RobotCard key={r.name} robot={r} />
          ))}
        </div>
        <div className={styles.more}>
          <Button href="/robots" variant="link">
            See all robots
          </Button>
        </div>
      </Section>

      <Section width="wide" eyebrow="Sponsors" title="Thank you to our amazing sponsors.">
        <SponsorWall />
        <div className={styles.more}>
          <Button href="/sponsors" variant="secondary">
            Become a sponsor
          </Button>
        </div>
      </Section>

      <Section tone="alt" title={<>Join the <em>team</em>.</>} intro="Any program, any year. No experience needed.">
        <div className={styles.more}>
          <Button href={site.discord}>Join our Discord</Button>
        </div>
      </Section>
    </>
  );
}
