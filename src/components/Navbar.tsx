"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navLinks, site } from "@/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`${styles.header} ${open ? styles.open : ""}`}>
      <nav className={styles.nav} aria-label="Main">
        <Link href="/" className={styles.logo} aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <ul id="site-menu" className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? styles.active : undefined}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
