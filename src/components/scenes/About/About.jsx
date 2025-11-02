import styles from "./About.module.css";
import HeaderBar from "../../layout/HeaderBar/HeaderBar";
import React, { useEffect, useMemo, useState } from "react";

export default function About() {
  // Core Themes state
  const CORE_THEMES = [
    "Developer experience",
    "Secure-by-default delivery",
    "Simple, scalable automation",
    "Cross-team collaboration",
    "Reliability & resilience",
    "Continuous improvement",
  ];

  const [activeTheme, setActiveTheme] = useState(() =>
    Math.floor(Math.random() * CORE_THEMES.length)
  );
  const [themesPaused, setThemesPaused] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || themesPaused || CORE_THEMES.length < 2) return;

    const id = setInterval(() => {
      setActiveTheme((prev) => {
        let n = prev;
        while (n === prev) n = Math.floor(Math.random() * CORE_THEMES.length);
        return n;
      });
    }, 2600);

    return () => clearInterval(id);
  }, [themesPaused]);
  return (
    <section id="about" className={styles.about}>
      <HeaderBar
        as="h1"
        title="About"
        icon={<i className="fas fa-user" />}
        align="left"
        subtitle="A little about me."
        subtitleAlign="left"
      />

      {/* Outer frosted container */}
      <div className={styles.panel} data-aos="zoom-in">
        {/* Two-column split (stacks on mobile) */}
        <div className={styles.split}>
          {/* LEFT — Narrative */}
          <div
            className={`${styles.card} ${styles.left}`}
            data-aos="fade-right"
            data-aos-delay="40"
          >
            <p>
              I’m a Senior Platform Engineer with a Chemical Engineering
              background and a proven track record of building reliable, secure
              delivery platforms that people actually enjoy working with.
            </p>
            <p>
              I’ve supported and scaled engineering platforms in a global
              environment, delivering improvements across CI/CD reliability,
              security and governance, cloud migration, developer tooling, and
              cost optimisation. I enjoy working where engineering meets
              enablement — bringing platform, security, and product teams
              together to solve real delivery problems with simplicity, intent
              and comprehensiveness.
            </p>
            <p>
              I care about calm problem-solving, clear communication, and
              building trust through consistency. I enjoy improving developer
              experience without compromising risk discipline, and helping teams
              move faster <strong>because they’re safer</strong>, not in spite
              of it.
            </p>
            <p>
              When I’m not engineering platforms, you’ll usually find me fixing
              electronics I probably shouldn’t have opened, watching cinema, or
              exploring how complex systems work — whether that’s
              infrastructure, hardware, or a story well told.
            </p>
          </div>

          {/* RIGHT — Minimal highlights */}
          <aside
            className={`${styles.card} ${styles.right}`}
            data-aos="fade-left"
            data-aos-delay="80"
            aria-label="Highlights and focus"
          >
            <h3 className={styles.rightTitle}>Highlights &amp; Focus</h3>
            <ul className={styles.highlightsList}>
              <li>
                <i className={`fas fa-cloud ${styles.icon}`}></i>
                Senior Platform Engineer at a global insurer.
              </li>
              <li>
                <i className={`fas fa-graduation-cap ${styles.icon}`}></i>
                ChemEng MEng alumni of the&nbsp;{" "}
                <a
                  className={styles.inlineLink}
                  href="https://www.surrey.ac.uk/undergraduate/chemical-engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Surrey
                </a>{" "}
                &nbsp;(First Class Honours).
              </li>
              <li>
                <i className={`fas fa-flask ${styles.icon}`}></i>
                Published researcher at&nbsp;{" "}
                <a
                  className={styles.inlineLink}
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0045653521014971"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chemosphere.
                </a>
              </li>
              <li>
                <i className={`fas fa-robot ${styles.icon}`}></i>
                Led secure AI enablement initiatives to enhance developer
                productivity.
              </li>
              <li>
                <i className={`fas fa-cogs ${styles.icon}`}></i>
                Automated secure CI image upgrades at scale.
              </li>
              <li>
                <i className={`fas fa-cloud-upload-alt ${styles.icon}`}></i>
                Cloud migration of core on-premise delivery tooling.
              </li>
              <li>
                <i className={`fas fa-shield-alt ${styles.icon}`}></i>
                Cost optimisation &amp; access governance improvements.
              </li>
              <li>
                <i className={`fas fa-handshake ${styles.icon}`}></i>
                Drove cross-team collaboration & incident resolution culture.
              </li>
              <li>
                <i className={`fas fa-book-open ${styles.icon}`}></i>
                Built developer-focused documentation, dashboards & tooling.
              </li>
              <li>
                <i className={`fas fa-landmark ${styles.icon}`}></i>
                Strengthened platform security posture & governance frameworks.
              </li>
              <li>
                <i className={`fas fa-sync-alt ${styles.icon}`}></i>
                Delivered major platform upgrades & changes safely at scale.
              </li>
              <li>
                <i className={`fas fa-users-cog ${styles.icon}`}></i>
                Enabled enterprise adoption of modern delivery practices.
              </li>
            </ul>

            <hr className={styles.hairline} aria-hidden="true" />

            <div className={styles.metaRow}>
              {/* CORE THEMES */}
              <span className={styles.metaLabel}>Core themes</span>

              <span
                className={styles.metaTags}
                aria-label="Core themes"
                onMouseEnter={() => setThemesPaused(true)}
                onMouseLeave={() => setThemesPaused(false)}
              >
                {CORE_THEMES.map((t, i) => (
                  <React.Fragment key={t}>
                    <span
                      className={`${styles.themeItem} ${
                        i === activeTheme ? styles.themeActive : ""
                      }`}
                      onMouseEnter={() => setActiveTheme(i)} // highlight hovered item
                    >
                      {t}
                    </span>
                    {i < CORE_THEMES.length - 1 && (
                      <span className={styles.sep} aria-hidden="true">
                        •
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
