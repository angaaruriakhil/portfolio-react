import React from "react";
import styles from "./Footer.module.css";

export default function Footer({
  name = "Angaar Uriakhil",
  year = new Date().getFullYear(),
  cvHref = "",
}) {
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
        >
          <i className={`fab fa-linkedin ${styles.socialIcon}`} />
        </a>

        <a
          href="https://www.researchgate.net/profile/Mohammad_Uriakhil"
          target="_blank"
          rel="noreferrer"
          title="ResearchGate"
        >
          <i className={`fab fa-researchgate ${styles.socialIcon}`} />
        </a>

        <a
          href="https://github.com/angaaruriakhil"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className={`fab fa-github ${styles.socialIcon}`} />
        </a>

        {cvHref && (
          <a href={cvHref} target="_blank" rel="noreferrer" title="CV (PDF)">
            <i className={`far fa-file-pdf ${styles.socialIcon}`} />
          </a>
        )}
      </div>
    </footer>
  );
}
