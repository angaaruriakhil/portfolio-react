import React from "react";
import styles from "./Footer.module.css";
import { useCvLink } from "../../../hooks/useCvLink";

// react-icons versions of your current footer icons
import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaFilePdf,
} from "react-icons/fa";

export default function Footer({
  name = "Angaar Uriakhil",
  year = new Date().getFullYear(),
}) {
  const { onResumeClick } = useCvLink();

  return (
    <footer className={styles.footer}>
      <p className={styles.info}>
        <span className={styles.muted}>Developed by</span>{" "}
        <strong className={styles.devName}>{name}</strong>, {year}
      </p>

      <div className={styles.socials} aria-label="Social links">
        <a
          href="https://uk.linkedin.com/in/angaar-uriakhil-1723a71b4"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className={styles.socialIcon}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.researchgate.net/profile/Mohammad_Uriakhil"
          target="_blank"
          rel="noreferrer"
          title="ResearchGate"
          className={styles.socialIcon}
        >
          <FaResearchgate />
        </a>

        <a
          href="https://github.com/angaaruriakhil"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          className={styles.socialIcon}
        >
          <FaGithub />
        </a>

        <a
          href="#"
          onClick={onResumeClick}
          rel="nofollow noreferrer"
          title="CV (PDF)"
          className={styles.socialIcon}
        >
          <FaFilePdf />
        </a>
      </div>
    </footer>
  );
}
