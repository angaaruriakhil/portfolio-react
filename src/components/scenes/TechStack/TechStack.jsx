import React from "react";
import styles from "./TechStack.module.css";
import { techCategories } from "./techData";
import TechCategory from "./TechCategory";
import HeaderBar from "../../layout/HeaderBar/HeaderBar";

export default function TechStack() {
  return (
    <section id="tech" className={styles.techSection}>
      <HeaderBar
        title="Tech Stack"
        subtitle="Tools I use to build secure, reliable, and developer-friendly platforms."
        icon={<i className="fas fa-microchip" />}
        align="left"
        subtitleAlign="left"
      />

      <div className={styles.columns}>
        {techCategories.map((cat, i) => (
          <TechCategory
            key={cat.name}
            name={cat.name}
            items={cat.items}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
