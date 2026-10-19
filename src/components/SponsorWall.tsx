import Image from "next/image";
import styles from "./SponsorWall.module.css";

// Sponsor logos. Empty slots until the first sponsors sign on.
const sponsors: { name: string; logo?: string }[] = [];
const emptySlots = 8;

export default function SponsorWall() {
  return (
    <ul className={styles.wall}>
      {sponsors.map((s) => (
        <li key={s.name}>{s.logo ? <Image src={s.logo} alt={s.name} width={240} height={120} /> : s.name}</li>
      ))}
      {Array.from({ length: Math.max(0, emptySlots - sponsors.length) }, (_, i) => (
        <li key={`empty-${i}`} className={styles.empty}>
          Your logo here
        </li>
      ))}
    </ul>
  );
}
