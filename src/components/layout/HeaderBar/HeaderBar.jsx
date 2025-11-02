import React from "react";
import styles from "./HeaderBar.module.css";

/**
 * HeaderBar
 * ----------
 * Props:
 * - title: string (required)
 * - subtitle?: string
 * - icon?: ReactNode (e.g., <i className="fas fa-tools" /> or an SVG)
 * - as?: "h1" | "h2" | "h3" (default "h2")
 * - align?: "left" | "center" (default "left")
 * - subtitleAlign?: "left" | "center" (default "center")
 * - width?: string (CSS length, default "70vw")
 * - stickLeftOnMobile?: boolean (default false; if true, stays left on small screens)
 * - id?: string (for anchors)
 * - aos?: {
 *     anchor?: string; offset?: number; duration?: number; mirror?: boolean;
 *     easing?: string; delay?: number; once?: boolean; anchorPlacement?: string;
 *   }
 */
export default function HeaderBar({
  title,
  subtitle,
  icon,
  as = "h2",
  align = "left",
  subtitleAlign = "center",
  width = "70vw",
  stickLeftOnMobile = false,
  id,
  aos = {},
}) {
  const Heading = as;

  // Map AOS props to data-* attributes
  const aosAttrs = Object.fromEntries(
    Object.entries(aos).map(([k, v]) => [
      `data-aos-${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`,
      v,
    ])
  );

  return (
    <div
      className={`${styles.headerWrap} ${
        stickLeftOnMobile ? styles.stickLeftMobile : ""
      }`}
    >
      <div
        className={`${styles.titleRow} ${
          align === "left" ? styles.left : styles.center
        }`}
        data-aos="fade-right"
        {...aosAttrs}
      >
        <Heading id={id} className={styles.title}>
          {title}
        </Heading>
        {icon ? (
          <span className={styles.iconRight} aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </div>

      {subtitle ? (
        <p
          className={`${styles.subtitle} ${
            subtitleAlign === "left" ? styles.subLeft : styles.subCenter
          }`}
          data-aos="fade-up"
          data-aos-delay="120"
          data-aos-duration="600"
          data-aos-mirror="true"
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
