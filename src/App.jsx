import React from "react";
import About from "./components/scenes/About/About.jsx";
import Projects from "./components/scenes/Projects/Projects.jsx";
import Contact from "./components/scenes/Contact/Contact.jsx";
import FixedElements from "./components/scenes/FixedElements/FixedElements.jsx";
import Landing from "./components/scenes/Landing/Landing.jsx";
import AOS from "aos";
import { useEffect } from "react";
import Experience from "./components/scenes/Experience/Experience.jsx";
import TechStack from "./components/scenes/TechStack/TechStack.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false, // allow replay
      offset: 120,
      easing: "ease",
      mirror: true, // <<< animate out on scroll up
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <FixedElements />
      <Landing />
      <main>
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
