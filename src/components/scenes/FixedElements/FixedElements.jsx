import React, { useState } from "react";
import styles from "./FixedElements.module.css";

import Nav from "../../layout/Nav/Nav.jsx";
import HamburgerMenu from "../../layout/HamburgerMenu/HamburgerMenu.jsx";
import Socials from "../../layout/Socials/Socials.jsx";

export default function FixedElements() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className={`fixed_elements ${styles.root}`}>
      <Nav isOpen={mobileOpen} onNavigate={() => setMobileOpen(false)} />
      <HamburgerMenu onToggle={setMobileOpen} />
      <Socials variant="vertical" />
    </section>
  );
}
