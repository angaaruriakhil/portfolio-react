import React, { useEffect, useRef, useState } from "react";
import styles from "./Landing.module.css";
import Terminal from "../../panels/Terminal/Terminal";
import Dock from "../../panels/Dock/Dock";
import Socials from "../../layout/Socials/Socials";

import { LuUser, LuFolderOpen } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { FaShareAlt } from "react-icons/fa";

export default function Landing() {
  const [bootPhase, setBootPhase] = useState("off");
  const [bootText, setBootText] = useState([]);

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalMinimized, setTerminalMinimized] = useState(false);
  const [terminalInstance, setTerminalInstance] = useState(0);

  // socials visibility controlled via body class so it hides both variants
  const [socialsHidden, setSocialsHidden] = useState(false);

  const timersRef = useRef([]);
  const clearTimers = () => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    document.body.classList.add("booting");
    return () => document.body.classList.remove("booting");
  }, []);

  useEffect(() => {
    const t1 = window.setTimeout(() => setBootPhase("flash"), 50);
    const t2 = window.setTimeout(() => setBootPhase("boot"), 1200);
    const t3 = window.setTimeout(() => {
      setBootPhase("terminal");
      document.body.classList.remove("booting");
      setTerminalOpen(true);
      setTerminalMinimized(false);
      // reveal socials by default on load
      document.body.classList.remove("hide-socials");
      setSocialsHidden(false);
    }, 5500);
    timersRef.current.push(t1, t2, t3);
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (bootPhase !== "boot") return;
    setBootText([]);
    const seq = [
      "Booting Angaar Portfolio OS v2.0...",
      "> Initializing kernel modules...",
      "> Loading /usr/local/portfolio/config...",
      "> Mounting system directory... done.",
      "> Starting network service... done.",
      "> Initializing user environment...",
      "> angaar@desktop: login successful",
      "System Online.",
    ];
    seq.forEach((line, i) => {
      const id = window.setTimeout(
        () => setBootText((prev) => [...prev, line]),
        400 + i * 420
      );
      timersRef.current.push(id);
    });
    return () => clearTimers();
  }, [bootPhase]);

  const handleTerminalMinimise = () => setTerminalMinimized(true);
  const handleTerminalClose = () => {
    setTerminalOpen(false);
    setTerminalMinimized(false);
    setTerminalInstance((k) => k + 1);
  };

  const handleDockTerminalClick = () => {
    if (!terminalOpen) return setTerminalOpen(true);
    if (terminalMinimized) return setTerminalMinimized(false);
    setTerminalMinimized(true);
  };

  const handleDockSocialsToggle = () => {
    setSocialsHidden((hidden) => {
      const next = !hidden;
      document.body.classList.toggle("hide-socials", next);
      return next;
    });
  };

  const goTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="landing" className={styles.landing}>
      <div className={styles.scanlines} aria-hidden />
      <div className={styles.vignette} aria-hidden />

      {bootPhase === "flash" && <div className={styles.crtFlash} />}

      {bootPhase === "boot" && (
        <div className={styles.bootText}>
          {bootText.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      )}

      {bootPhase === "terminal" && (
        <>
          {/* Mobile-only horizontal socials (Landing-only) */}
          <Socials variant="mobile" />

          {/* Terminal */}
          {terminalOpen && (
            <Terminal
              key={terminalInstance}
              visible={!terminalMinimized}
              onMinimise={handleTerminalMinimise}
              onClose={handleTerminalClose}
            />
          )}

          {/* Dock */}
          <div className={styles.dockRegion}>
            <Dock
              items={[
                {
                  id: "terminal",
                  label: terminalOpen
                    ? terminalMinimized
                      ? "Show Terminal"
                      : "Hide Terminal"
                    : "Open Terminal",
                  onClick: handleDockTerminalClick,
                  isOpen: terminalOpen && !terminalMinimized,
                },
                {
                  id: "socials",
                  label: socialsHidden ? "Show Socials" : "Hide Socials",
                  onClick: handleDockSocialsToggle,
                  isOpen: !socialsHidden,
                },
                { id: "about", label: "About", onClick: () => goTo("#about") },
                {
                  id: "experience",
                  label: "Experience",
                  onClick: () => goTo("#experience"),
                },
                {
                  id: "tech",
                  label: "Tech Stack",
                  onClick: () => goTo("#tech"),
                },
                {
                  id: "projects",
                  label: "Projects",
                  onClick: () => goTo("#projects"),
                },
                {
                  id: "contact",
                  label: "Contact",
                  onClick: () => goTo("#contact"),
                },
              ]}
            />

            <p className={`${styles.systemFooter} ${styles.blinkscroll}`}>
              Scroll ↓ or use the app dock to continue.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
