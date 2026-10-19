import Link from "next/link";
import RobotIllustration from "./RobotIllustration";
import type { Robot } from "@/robots";
import styles from "./RobotCard.module.css";

export default function RobotCard({ robot }: { robot: Robot }) {
  return (
    <Link href={`/robots/${robot.slug}`} className={styles.card}>
      <div className={styles.image}>
        <RobotIllustration className={styles.drawing} />
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          {robot.weightClass} · {robot.weight} · {robot.year}
        </p>
        <h3>{robot.name}</h3>
        <p className={styles.description}>{robot.description}</p>
        <span className={styles.more}>Read here</span>
      </div>
    </Link>
  );
}
