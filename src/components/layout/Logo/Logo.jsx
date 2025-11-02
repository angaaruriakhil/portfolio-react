import React from "react";
import styles from "./Logo.module.css";

export default function Logo({ compact = false }) {
  return (
    <a href="#landing" className={styles.logo} aria-label="Go to Home">
      <div className={styles.icon}>P</div>
    </a>
  );
}
