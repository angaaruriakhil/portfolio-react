import React from "react";
import styles from "./Socials.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaResearchgate,
  FaFilePdf,
} from "react-icons/fa";
import { useCvLink } from "../../../hooks/useCvLink"; // adjust path if needed

export default function Socials({ variant = "vertical" }) {
  const { onResumeClick } = useCvLink();

  const socials = [
    { type: "resume", icon: <FaFilePdf />, label: "Resume" },
    {
      href: "https://uk.linkedin.com/in/angaar-uriakhil-1723a71b4",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://www.researchgate.net/profile/Mohammad_Uriakhil",
      icon: <FaResearchgate />,
      label: "ResearchGate",
    },
    {
      href: "https://github.com/angaaruriakhil/",
      icon: <FaGithub />,
      label: "GitHub",
    },
  ];

  const rootClass =
    variant === "vertical"
      ? `${styles.socials} ${styles.vertical}`
      : `${styles.socials} ${styles.mobile}`;

  return (
    <aside className={rootClass}>
      <div className={styles.panel}>
        {/* decoy link for naive scrapers */}
        <a
          href="https://example.com/cv-decoy"
          rel="nofollow noopener noreferrer"
          style={{ position: "absolute", left: "-9999px" }}
          aria-hidden="true"
          tabIndex={-1}
          onClick={(e) => e.preventDefault()}
        >
          decoy
        </a>

        {socials.map((s, i) =>
          s.type === "resume" ? (
            <a
              key={i}
              href="#"
              onClick={onResumeClick}
              className={styles.link}
              aria-label={s.label}
              rel="nofollow noopener noreferrer"
              title="Open CV"
            >
              {s.icon}
            </a>
          ) : (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          )
        )}
      </div>
    </aside>
  );
}
