import React, { useEffect, useRef, useState } from "react";
import interact from "interactjs";
import TypeIt from "typeit-react";
import "animate.css";
import styles from "./Terminal.module.css";

export default function Terminal({ visible = true, onMinimise, onClose }) {
  const terminalRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);

  // draggable (init once, clean up on unmount)
  useEffect(() => {
    const node = terminalRef.current;
    if (!node) return;
    const interactable = interact(node).draggable({
      listeners: {
        move(event) {
          if (isMaximized) return;
          posRef.current.x += event.dx;
          posRef.current.y += event.dy;
          node.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
        },
      },
    });
    return () => {
      try {
        interactable.unset();
      } catch {}
      if (node) node.style.transform = "";
      posRef.current = { x: 0, y: 0 };
    };
  }, [isMaximized]);

  // trigger minimize animation then callback
  const handleMinimise = () => {
    setIsMinimizing(true);
    setTimeout(() => {
      setIsMinimizing(false);
      onMinimise?.();
    }, 250); // match CSS duration
  };

  return (
    <div
      ref={terminalRef}
      className={[
        styles.terminal,
        isMaximized ? styles.maximise : "",
        isMinimizing ? styles.minimizing : "",
        !visible ? styles.hidden : "",
        "animate__animated",
        "animate__fadeIn",
      ].join(" ")}
      aria-hidden={!visible}
    >
      {/* Title bar */}
      <div className={styles.bar}>
        <div className={styles.barButtons}>
          <button
            className={`${styles.barButton} ${styles.closeBtn}`}
            onClick={onClose}
            aria-label="Close terminal"
            type="button"
          />
          <button
            className={`${styles.barButton} ${styles.minBtn}`}
            onClick={handleMinimise}
            aria-label="Minimize terminal"
            type="button"
          />
          <button
            className={`${styles.barButton} ${styles.maxBtn}`}
            onClick={() => setIsMaximized((v) => !v)}
            aria-label="Maximize terminal"
            type="button"
          />
        </div>
        <span className={styles.barUser}>angaar@desktop:~</span>
      </div>

      <div className={styles.body}>
        <pre className={styles.commandLine}>
          <span className={styles.prompt}>angaar@desktop:~$ </span>
          <TypeIt
            as="span"
            options={{ speed: 45, waitUntilVisible: true, html: true }}
            getBeforeInit={(instance) => {
              return instance
                .type("cat './profiledata.json'")
                .break()
                .type("{")
                .break()
                .type(
                  '<span style="color:#29b6f6;">&nbsp;&nbsp;Name:</span> ' +
                    '<span style="color:#b3e5fc;">"Angaar Uriakhil"</span>,'
                )
                .break()
                .type(
                  '<span style="color:#9CCC65;">&nbsp;&nbsp;Occupation:</span> ' +
                    '<span style="color:#c5e1a5;">"Platform Engineer"</span>,'
                )
                .break()
                .type(
                  '<span style="color:#EF5350;">&nbsp;&nbsp;Datatype:</span> ' +
                    '<span style="color:#ef9a9a;">"Portfolio"</span>'
                )
                .break()
                .type(
                  '<span style="color:#BA68C8;">&nbsp;&nbsp;Message:</span> ' +
                    '<span style="color:#E1BEE7;">"Welcome to my Portfolio!"</span>'
                )
                .break()
                .type("}");
            }}
          />
        </pre>
      </div>
    </div>
  );
}
