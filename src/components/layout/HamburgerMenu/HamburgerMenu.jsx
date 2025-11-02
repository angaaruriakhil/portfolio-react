// HamburgerMenu.jsx
import React, { useEffect, useState } from "react";
import "./hamburgers.css";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu({ isOpen = false, onToggle }) {
  const [active, setActive] = useState(isOpen);

  // keep internal animation state in sync with parent
  useEffect(() => {
    setActive(isOpen);
  }, [isOpen]);

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
