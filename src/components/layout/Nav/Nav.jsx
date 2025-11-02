import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import useNavObserver from "../../../hooks/useNavObserver";
import Logo from "../../layout/Logo/Logo";

const WifiIcon = ({ online }) => (
  <svg
    className={styles.trayIcon}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 8c5.5-5.3 14.5-5.3 20 0" opacity=".35" />
      <path d="M5 11c4-3.9 10-3.9 14 0" opacity=".6" />
      <path d="M8 14c2.5-2.4 5.5-2.4 8 0" opacity=".85" />
      <circle
        cx="12"
        cy="18"
        r="1.6"
        fill="currentColor"
        opacity={online ? 1 : 0.25}
      />
    </g>
  </svg>
);

const BatteryIcon = ({ pct = 100 }) => (
  <svg
    className={styles.trayIcon}
    width="22"
    height="18"
    viewBox="0 0 28 16"
    aria-hidden="true"
  >
    <rect
      x="1"
      y="3"
      width="22"
      height="10"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect x="24" y="6" width="3" height="4" rx="1" fill="currentColor" />
    <rect
      x="3"
      y="5"
      height="6"
      width={Math.max(0, Math.min(18, (pct / 100) * 18))}
      rx="1"
      fill="currentColor"
      opacity=".9"
    />
  </svg>
);

export default function Nav({ isOpen = false, onNavigate }) {
  useNavObserver([
    "landing",
    "about",
    "experience",
    "tech",
    "projects",
    "contact",
  ]);

  const [dateStr, setDateStr] = useState("");
  const [timeStr, setTimeStr] = useState("");
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setDateStr(
        now.toLocaleString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  return (
    <nav className={styles.nav} role="navigation" aria-label="Primary">
      <div className={styles.leftCluster}>
        <Logo compact />
        <span className={styles.brandTag} aria-label="OS build">
          Portfolio OS v2.0
        </span>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className={styles.meta}>{dateStr}</span>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className={styles.meta}>{timeStr}</span>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className={styles.tray}>
          <WifiIcon online={online} />
          <BatteryIcon pct={100} />
        </span>
      </div>

      <span className={styles.brandCenter}>Portfolio OS v2.1</span>

      <ul className={`${styles.listMaster} ${isOpen ? "display_navbar" : ""}`}>
        <li className={styles.listItem}>
          <a
            id="landing-link"
            href="#landing"
            className={styles.link}
            onClick={onNavigate}
          >
            <span className={styles.itemNumber}>01</span>.Welcome
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            id="about-link"
            href="#about"
            className={styles.link}
            onClick={onNavigate}
          >
            <span className={styles.itemNumber}>02</span>.About
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            id="experience-link"
            href="#experience"
            className={styles.link}
            onClick={onNavigate}
          >
            <span className={styles.itemNumber}>03</span>.Experience
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            id="tech-link"
            href="#tech"
            className={styles.link}
            onClick={onNavigate}
          >
            <span className={styles.itemNumber}>04</span>.Tech
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            id="projects-link"
            href="#projects"
            className={styles.link}
            onClick={onNavigate}
          >
            <span className={styles.itemNumber}>05</span>.Projects
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            id="contact-link"
            href="#contact"
            className={styles.link}
            onClick={onNavigate}
          >
            <span className={styles.itemNumber}>06</span>.Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
