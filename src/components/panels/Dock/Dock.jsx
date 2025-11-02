import React from "react";
import styles from "./Dock.module.css";

const StrokeIcon = (props) => ({
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props,
});

const Icon = {
  Terminal: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M7 8.5l3 2.5-3 2.5" />
      <path d="M12 15.5h5" />
    </svg>
  ),
  Socials: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <circle cx="7.5" cy="8" r="2.2" />
      <circle cx="16.5" cy="6.4" r="2.2" />
      <circle cx="16.5" cy="15.6" r="2.2" />
      <path d="M9.4 9l5.2-1.9M9.4 9l5.2 5.2" />
    </svg>
  ),
  Home: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M6 10.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8.5" />
    </svg>
  ),
  About: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <circle cx="12" cy="9" r="3" />
      <path d="M6.8 17c1.9-3.2 8.5-3.2 10.4 0" />
    </svg>
  ),
  Experience: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  ),
  Tech: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1.2" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 3v3M18 3v3M6 18v3M18 18v3" />
    </svg>
  ),
  Projects: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <path d="M3 7h6l2-2h4l2 2h4v12H3z" />
    </svg>
  ),
  Contact: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      {...StrokeIcon()}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
};

/* Map IDs to icons */
const ICON_MAP = {
  terminal: Icon.Terminal,
  socials: Icon.Socials,
  landing: Icon.Home,
  about: Icon.About,
  experience: Icon.Experience,
  projects: Icon.Projects,
  tech: Icon.Tech,
  techstack: Icon.Tech,
  contact: Icon.Contact,
};

/* Render either a JSX element (e.g. <Fa…/>) or a component type */
function renderIcon(iconLike, className) {
  if (!iconLike) return null;
  if (React.isValidElement(iconLike)) {
    const prev = iconLike.props.className || "";
    return React.cloneElement(iconLike, {
      className: [prev, className].filter(Boolean).join(" "),
      "aria-hidden": iconLike.props["aria-hidden"] ?? true,
      focusable: iconLike.props.focusable ?? "false",
    });
  }
  if (typeof iconLike === "function" || typeof iconLike === "string") {
    return React.createElement(iconLike, {
      className,
      "aria-hidden": true,
      focusable: "false",
    });
  }
  return null;
}

export default function Dock({ items = [] }) {
  return (
    <div className={styles.dock} role="toolbar" aria-label="Application dock">
      {items.map((it) => {
        const iconLike = it.icon || ICON_MAP[it.id] || Icon.Terminal;
        return (
          <button
            key={it.id}
            className={`${styles.tile} ${it.isOpen ? styles.open : ""}`}
            onClick={it.onClick}
            aria-label={it.label}
            title={it.label}
            type="button"
          >
            {renderIcon(iconLike, styles.icon)}
            {typeof it.isOpen === "boolean" && (
              <span
                className={`${styles.indicator} ${it.isOpen ? styles.on : ""}`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
