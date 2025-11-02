import React, { useMemo } from "react";
import styles from "./ExperienceCard.module.css";

export default function ExperienceCard({
  role,
  org,
  dates,
  timeline,
  bullets,
  icon = "fa-solid fa-briefcase",
  stack = [],
  techCatalog = [],
  aosDelay = 0,
}) {
  // Build a lookup map from techData once
  const techMap = useMemo(() => {
    const m = new Map();
    techCatalog.forEach((cat) =>
      cat.items.forEach((it) => m.set(it.n.toLowerCase(), it))
    );
    // Aliases
    const alias = {
      js: "JS/TS",
      javascript: "JS/TS",
      html: "HTML5",
      prom: "Prometheus",
      "github copilot": "GitHub Copilot",
      copilot: "GitHub Copilot",
      "c#": "C#",
    };
    Object.entries(alias).forEach(([k, v]) => {
      const hit = m.get(v.toLowerCase());
      if (hit) m.set(k, hit);
    });
    // Fallbacks for items not in techData
    const fallbacks = {
      angular: {
        n: "Angular",
        i: "devicon-angularjs-plain colored",
        tip: "Angular",
      },
      "c#": { n: "C#", i: "devicon-csharp-plain colored", tip: "C#" },
      selenium: {
        n: "Selenium",
        i: "devicon-selenium-plain colored",
        tip: "Selenium",
      },
      spring: {
        n: "Spring",
        i: "devicon-spring-original colored",
        tip: "Spring Boot / Java backend",
      },
    };
    Object.entries(fallbacks).forEach(([k, v]) => {
      if (!m.has(k)) m.set(k, v);
    });
    return m;
  }, [techCatalog]);

  const resolvedStack = (stack || []).map((name) => {
    const key = String(name).toLowerCase();
    return { name, def: techMap.get(key) || techMap.get(name.toLowerCase()) };
  });

  const maxIcons = 20;
  const shown = resolvedStack.slice(0, maxIcons);
  const hiddenCount = Math.max(0, resolvedStack.length - shown.length);

  const renderIcon = (def, name, idx) => {
    if (!def) return null;
    const title = name;
    if (def.c)
      return (
        <def.c
          key={`${name}-${idx}`}
          className={styles.stackDevIcon}
          title={title}
        />
      );
    if (def.src)
      return (
        <img
          key={`${name}-${idx}`}
          src={def.src}
          alt={name}
          title={title}
          className={styles.stackImgIcon}
        />
      );
    if (def.i)
      return (
        <i
          key={`${name}-${idx}`}
          className={`${def.i} ${styles.stackIcon}`}
          title={title}
          aria-hidden="true"
        />
      );
    return null;
  };

  return (
    <article
      className={styles.card}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className={styles.headerRow}>
        <h3 className={styles.role}>
          <i className={`${icon} ${styles.roleIcon}`} aria-hidden="true" />
          {role}
        </h3>
      </div>

      {(shown.length > 0 || hiddenCount > 0) && (
        <div className={styles.stackRow} aria-label="Tech used">
          {shown.map((s, i) => renderIcon(s.def, s.name, i))}
          {hiddenCount > 0 && (
            <button
              type="button"
              className={styles.stackMore}
              title={resolvedStack
                .slice(maxIcons)
                .map((x) => x.name)
                .join(", ")}
              aria-label={`Show ${hiddenCount} more tools: ${resolvedStack
                .slice(maxIcons)
                .map((x) => x.name)
                .join(", ")}`}
            >
              +{hiddenCount}
            </button>
          )}
        </div>
      )}

      {timeline ? <p className={styles.timeline}>{timeline}</p> : null}
      {org ? <p className={styles.meta}>{org}</p> : null}

      {bullets?.length > 0 && (
        <ul className={styles.list}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
