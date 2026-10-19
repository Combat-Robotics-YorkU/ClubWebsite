import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { navLinks, site } from "@/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <Link href="/" className={styles.logo} aria-label={`${site.name} home`}>
            <Logo />
          </Link>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.row} ${styles.bottom}`}>
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <ul className={styles.socials}>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} {...(s.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })} aria-label={s.label} title={s.label}>
                  <Image src={s.icon} alt="" width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
