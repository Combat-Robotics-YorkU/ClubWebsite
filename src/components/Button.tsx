import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
};

export default function Button({ href, children, variant = "primary" }: Props) {
  // Plain links for other sites, email and jumps within the same page.
  const plain = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#");
  const className = styles[variant];
  if (plain) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
