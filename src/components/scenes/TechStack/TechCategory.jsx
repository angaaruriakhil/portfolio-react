import React, { useEffect, useMemo, useState } from "react";
import styles from "./TechStack.module.css";

export default function TechCategory({ name, items, index }) {
  const [expanded, setExpanded] = useState(false);
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      if (window.AOS?.refresh) window.AOS.refresh();
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // === Category wrapper delay (row-aware, not unbounded) ===
  // Assume 2 columns on desktop/tablet, 1 on mobile
  const catCols = vw >= 768 ? 2 : 1;
  const rowIndex = Math.floor(index / catCols);
  const colIndex = index % catCols;
  // small variance across columns + a tiny per-row bump, capped so nothing feels "last"
  const categoryDelay = Math.min(colIndex * 80 + rowIndex * 40, 200);

  const cols = useMemo(() => pickCols(items.length, vw), [items.length, vw]);
  const maxVisible = cols * 2; // 2 rows collapsed
  const hasOverflow = items.length > maxVisible;

  const visibleItems = expanded ? items : items.slice(0, maxVisible);
  const moreCount = items.length - visibleItems.length;

  useEffect(() => {
    if (window.AOS?.refresh) window.AOS.refresh();
  }, [expanded, visibleItems.length, cols]);

  const computeDelay = (i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    return 100 + col * 60 + row * 40; // ms
  };

  const categoryAos = index % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <div
      className={styles.category}
      data-aos={categoryAos}
      data-aos-delay={categoryDelay}
      data-aos-duration="700"
      data-aos-anchor-placement="top-bottom"
      data-aos-mirror="true"
    >
      <div className={styles.terminalHeader}>
        <span className={styles.prompt}>~</span>
        <span className={styles.prompt}>$</span>
        <span
          className={styles.typewrite}
          style={{ animationDelay: `${index * 0.25}s` }}
        >
          {` ${name}`}
        </span>
      </div>

      <div
        className={`${styles.grid} ${expanded ? styles.expanded : ""}`}
        style={{ ["--cols"]: cols }}
      >
        {visibleItems.map((t, i) => (
          <div
            key={`${t.n}-${i}`}
            className={styles.techItem}
            title={t.tip}
            data-aos="zoom-in"
            data-aos-delay={computeDelay(i)}
            data-aos-duration="500"
            data-aos-mirror="true"
          >
            {t.c ? (
              <t.c className={styles.devIcon} />
            ) : t.src ? (
              <img src={t.src} alt={t.n} className={styles.imgIcon} />
            ) : (
              <i className={`${t.i} ${styles.icon}`} aria-hidden="true" />
            )}
            <span className={styles.label}>{t.n}</span>
          </div>
        ))}

        {!expanded && hasOverflow && (
          <button
            className={styles.moreChip}
            onClick={() => setExpanded(true)}
            aria-label={`Show ${moreCount} more items`}
            title={`Show ${moreCount} more`}
            data-aos="fade"
            data-aos-delay={computeDelay(visibleItems.length - 1) + 80}
            data-aos-duration="400"
            data-aos-mirror="true"
          >
            +{moreCount} more
          </button>
        )}
      </div>
    </div>
  );
}

/* ===== helpers ===== */
function pickCols(count, width) {
  const allowed = width >= 1200 ? [6, 5, 4] : width >= 768 ? [4, 3] : [2];
  let best = allowed[0];
  let bestScore = Infinity;
  allowed.forEach((c) => {
    const r = count % c;
    const score = (r === 1 ? 100 : 0) + r - c * 0.001; // prefer bigger c on ties
    if (score < bestScore) {
      best = c;
      bestScore = score;
    }
  });
  return best;
}
