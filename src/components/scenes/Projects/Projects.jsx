import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../panels/ProjectCard/ProjectCard";
import CalculatorImg from "../../../assets/images/projects/calculator.png";
import StudentPlatformImg from "../../../assets/images/projects/student-platform.jfif";
import ChemicalEngineeringToolkitImg from "../../../assets/images/projects/chemical-engineering-toolkit.png";
import BattleshipImg from "../../../assets/images/projects/battleship.png";
import MalignantKingdomImg from "../../../assets/images/projects/malignant-kingdom.png";
import BrewdogImg from "../../../assets/images/projects/brewdog.png";
import HangmanImg from "../../../assets/images/projects/hangman.png";
import MorseCodeTranslatorImg from "../../../assets/images/projects/morse-code-translator.png";
import PalaceImg from "../../../assets/images/projects/palace.png";
import PortfolioImg from "../../../assets/images/projects/readme_head.png";
import HeaderBar from "../../layout/HeaderBar/HeaderBar";
import PaperImg from "../../../assets/images/projects/pfas-paper.png";

/** breakpoint-aware helper so AOS feels right on mobile */
function useIsMobile(bp = 1200) {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= bp : false
  );
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= bp);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [bp]);
  return mobile;
}

export default function Projects() {
  const isMobile = useIsMobile(1200);
  const getAos = (i) =>
    isMobile ? "fade-up" : i % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <section id="projects" className={styles.projects}>
      <HeaderBar
        as="h1"
        title="Projects"
        icon={<i className="fas fa-tools" />}
        align="left"
        subtitle="Some of the things I've worked on in my spare time."
        subtitleAlign="left"
      />
      <div className={styles.grid}>
        {/* 0 */}
        <ProjectCard
          aos={getAos(0)}
          imgSrc={PaperImg}
          imgAlt="A picture of the PFAS paper project."
          title="Per- and poly-fluoroalkyl substance remediation from soil and sorbents: A review of adsorption behaviour and ultrasonic treatment"
          info={
            <>
              I worked as the lead author with distinguished researchers to
              publish a scientific paper in the well renowned journal,
              Chemosphere. Although not tech related, I still developed
              transferable skills I now apply in Platform Engineering, including
              problem solving, in-depth research, data analysis, evidence driven
              decision making.
            </>
          }
          links={[
            {
              href: "https://www.sciencedirect.com/science/article/abs/pii/S0045653521014971",
              label: "View Paper",
              highlight: true,
            },
            {
              href: "https://www.researchgate.net/publication/351950630_Per-_and_poly-fluoroalkyl_substance_remediation_from_soil_and_sorbents_A_review_of_adsorption_behaviour_and_ultrasonic_treatment",
              label: "ResearchGate (Citations)",
            },
          ]}
        />

        {/* 1 */}
        <ProjectCard
          aos={getAos(1)}
          imgSrc={PalaceImg}
          imgAlt="A picture of the SHED/Palace project."
          techIcons={
            <>
              <i className="devicon-react-original-wordmark colored" />
              <i className="devicon-reactnative-original-wordmark colored" />
              <i className="devicon-javascript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-css3-plain-wordmark colored" />
            </>
          }
          title="Palace"
          info={
            <>
              React-based implementation of the popular Palace card game,
              otherwise known as SHED. Coming soon!
              <br />
            </>
          }
          links={[
            { href: "", label: "Not live yet", highlight: true },
            { href: "", label: "Not live yet" },
          ]}
        />

        {/* 2 */}
        <ProjectCard
          aos={getAos(2)}
          imgSrc={PortfolioImg}
          imgAlt="A picture of the Portfolio project."
          techIcons={
            <>
              <i className="devicon-react-original-wordmark colored" />
              <i className="devicon-javascript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-vite-original-wordmark colored"></i>
            </>
          }
          title="Portfolio"
          info={
            <>
              The site you are currently browsing!
              <br />
            </>
          }
          links={[
            {
              href: "https://www.angaaruriakhil.com",
              label: "Live Page",
              highlight: true,
            },
            {
              href: "https://github.com/angaaruriakhil/portfolio-react",
              label: "Source Code",
            },
          ]}
        />

        {/* 3 */}
        <ProjectCard
          aos={getAos(3)}
          imgSrc={CalculatorImg}
          imgAlt="A picture of the Calculator project."
          techIcons={
            <>
              <i className="devicon-javascript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-sass-original colored" />
            </>
          }
          title="Calculator"
          info={
            <>
              Calculator with support for basic operations, decimal inputs,
              recurring decimals, negative number inputs and chaining
              operations.
              <br />
              Tested using Cypress and usable on PC or mobile.
            </>
          }
          links={[
            {
              href: "https://angaaruriakhil.github.io/js-calculator/",
              label: "Live Page",
              highlight: true,
            },
            {
              href: "https://github.com/angaaruriakhil/js-calculator",
              label: "Source Code",
            },
          ]}
        />

        {/* 4 */}
        <ProjectCard
          aos={getAos(4)}
          imgSrc={StudentPlatformImg}
          imgAlt="A picture of the client project."
          techIcons={
            <>
              <i className="devicon-java-plain colored" />
              <i className="devicon-react-original colored" />
              <i className="devicon-spring-plain-wordmark colored" />
              <i className="devicon-sass-original colored" />
              <i className="devicon-mysql-plain colored" />
              <i className="devicon-bootstrap-plain colored" />
            </>
          }
          title="_nology Student Platform"
          info={
            <>
              Student management platform built for _nology.
              <br />
              Allows you to view, edit, add or delete students from a database.
              <br />
              Made alongside an agile team of 6 in weekly sprints in 4 weeks.
            </>
          }
          links={[
            {
              href: "https://youtu.be/J8GxKbPHIjo",
              label: "Video Demo",
              highlight: true,
            },
            {
              href: "https://github.com/angaaruriakhil/_charlie",
              label: "Source Code",
            },
          ]}
        />

        {/* 5 */}
        <ProjectCard
          aos={getAos(5)}
          imgSrc={ChemicalEngineeringToolkitImg}
          imgAlt="A picture of the Chemical Engineering Toolkit project."
          techIcons={
            <>
              <i className="devicon-python-plain colored" />
              <i className="devicon-pandas-original colored" />
              <i className="devicon-matplotlib-plain colored" />
              <i className="devicon-windows8-original colored" />
            </>
          }
          title="Chemical Engineering Toolkit"
          info={
            <>
              A Windows application, written in Python that:
              <br />
              <br />
              <i className="fas fa-vial" /> Displays information about the
              chemical elements from a database.
              <br />
              <i className="fas fa-arrows-alt-h" /> Automates conversion between
              mass and mole fraction for a mixture of 2–4 constituents and up to
              5 elements per constituent.
            </>
          }
          links={[
            {
              href: "https://github.com/angaaruriakhil/Chemical-Engineering-Toolkit",
              label: "Source Code",
            },
          ]}
        />

        {/* 6 */}
        <ProjectCard
          aos={getAos(6)}
          imgSrc={BattleshipImg}
          imgAlt="A picture of the Battleship project."
          techIcons={
            <>
              <i className="devicon-javascript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-sass-original colored" />
            </>
          }
          title="Battleship"
          info={
            <>
              Face against the computer in a daring game of chance as you
              attempt to locate and sink each other&apos;s ships.
            </>
          }
          links={[
            {
              href: "https://angaaruriakhil.github.io/Battleship/",
              label: "Live Page",
              highlight: true,
            },
            {
              href: "https://github.com/angaaruriakhil/Battleship",
              label: "Source Code",
            },
          ]}
        />

        {/* 7 */}
        <ProjectCard
          aos={getAos(7)}
          imgSrc={MalignantKingdomImg}
          imgAlt="A picture of the Malignant Kingdom game."
          techIcons={<i className="devicon-java-plain colored" />}
          title="Malignant Kingdom"
          info={
            <>
              A Java adventure game playable via the console.
              <br />
              You are a criminal, tossed in jail for serious crimes against the
              realm.
              <br />
              Can you escape your fate and survive this malignant kingdom?
            </>
          }
          links={[
            {
              href: "https://github.com/angaaruriakhil/malignant-kingdom",
              label: "Source Code",
            },
          ]}
        />

        {/* 8 */}
        <ProjectCard
          aos={getAos(8)}
          imgSrc={BrewdogImg}
          imgAlt="A picture of the Brewdog Punk API project."
          techIcons={
            <>
              <i className="devicon-react-original colored" />
              <i className="devicon-javascript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-sass-original colored" />
            </>
          }
          title="Brewdog API Beer Selector"
          info={
            <>
              An application which pulls information about beers from the
              Brewdog Punk API and filters the data based on user-mandated
              search input and checkbox selection.
            </>
          }
          links={[
            {
              href: "https://angaaruriakhil.github.io/punk-api/",
              label: "Live Page",
              highlight: true,
            },
            {
              href: "https://github.com/angaaruriakhil/punk-api",
              label: "Source Code",
            },
          ]}
        />

        {/* 9 */}
        <ProjectCard
          aos={getAos(9)}
          imgSrc={HangmanImg}
          imgAlt="A picture of the Hangman project."
          techIcons={
            <>
              <i className="devicon-typescript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-sass-original colored" />
            </>
          }
          title="Hangman"
          info={
            <>
              Guess a random word generated from the Random Word API.
              <br />
              Can you guess correctly before all your lives are lost?
            </>
          }
          links={[
            {
              href: "https://angaaruriakhil.github.io/hangman/",
              label: "Live Page",
              highlight: true,
            },
            {
              href: "https://github.com/angaaruriakhil/hangman",
              label: "Source Code",
            },
          ]}
        />

        {/* 10 */}
        <ProjectCard
          aos={getAos(10)}
          imgSrc={MorseCodeTranslatorImg}
          imgAlt="A picture of the Morse Code Translator project."
          techIcons={
            <>
              <i className="devicon-javascript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-sass-original colored" />
              <i className="devicon-jest-plain colored" />
            </>
          }
          title="Morse Code Translator"
          info={
            <>
              Morse code translator, capable of converting English to Morse code
              and vice versa.
              <br />
              Tested using Jest.
              <br />
            </>
          }
          links={[
            {
              href: "https://angaaruriakhil.github.io/Morse-Code-Translator/",
              label: "Live Page",
              highlight: true,
            },
            {
              href: "https://github.com/angaaruriakhil/Morse-Code-Translator",
              label: "Source Code",
            },
          ]}
        />
      </div>
    </section>
  );
}
