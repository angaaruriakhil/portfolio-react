import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  aos = "fade-left",
  imgSrc,
  imgAlt,
  techIcons,
  title,
  info,
  links = [],
}) {
  return (
    <div className={`${styles.card} ${styles.frostedGlass}`} data-aos={aos}>
      <img src={imgSrc} alt={imgAlt} className={styles.img} />

      <div className={styles.text}>
        <div>
          <h3 className={styles.subheader}>
            <span className={styles.featured}>Featured Project</span>{" "}
            <span className={styles.icons}>
              <span className={styles.colored}>{techIcons}</span>
            </span>
          </h3>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <p className={styles.info}>{info}</p>

        <div className={styles.links}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`${styles.linkBtn} ${l.highlight ? styles.linkBtnHighlight : ""}`}
            >
              {l.label}{" "}
              <i
                className={`${
                  l.label.toLowerCase().includes("source")
                    ? "fab fa-github-square"
                    : "fas fa-external-link-square-alt"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
