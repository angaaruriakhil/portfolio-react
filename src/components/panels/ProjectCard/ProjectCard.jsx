import React from "react";
import styles from "./ProjectCard.module.css";
import Button from "../../layout/Button/Button";

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
          {links.map((l, i) => {
            const isPlaceholder = l.href === "#" || !l.href;

            return (
              <Button
                as={isPlaceholder ? "button" : "a"}
                href={isPlaceholder ? undefined : l.href}
                variant={l.highlight ? "highlight" : "default"}
                disabled={isPlaceholder}
                key={i}
              >
                {l.label}
                {!isPlaceholder && (
                  <i
                    className={
                      l.label.toLowerCase().includes("source")
                        ? "fab fa-github-square"
                        : "fas fa-external-link-square-alt"
                    }
                  />
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
