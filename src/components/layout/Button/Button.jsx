import React from "react";
import styles from "./Button.module.css";

/**
 * Stand-alone Button component (no imports from ProjectCard)
 *
 * Props:
 * - children: inner content
 * - variant: "default" | "highlight"
 * - as: "button" | "a"
 * - href: URL when using anchor
 * - disabled: boolean
 */
export default function Button({
  children,
  variant = "default",
  as = "button",
  href,
  disabled = false,
  ...rest
}) {
  const classNames = [
    styles.button,
    variant === "highlight" && styles.buttonHighlight,
    disabled && styles.buttonDisabled,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    return (
      <a
        className={classNames}
        href={disabled ? undefined : href}
        onClick={disabled ? (e) => e.preventDefault() : rest.onClick}
        target={href && !disabled ? "_blank" : undefined}
        rel={href && !disabled ? "noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
