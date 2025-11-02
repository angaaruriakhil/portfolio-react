import React, { useState } from "react";
import "./hamburgers.css"; // global import — affects all hamburger classes
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu({ onToggle }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const next = !active;
    setActive(next);
    onToggle?.(next);
  };

  return (
    <button
      type="button"
      aria-label="Menu"
      aria-expanded={active ? "true" : "false"}
      onClick={handleClick}
      className={`${styles.hamburgerFixed} hamburger hamburger--elastic ${
        active ? "is-active" : ""
      }`}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
