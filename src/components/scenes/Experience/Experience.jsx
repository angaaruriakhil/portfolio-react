import React from "react";
import styles from "./Experience.module.css";
import HeaderBar from "../../layout/HeaderBar/HeaderBar";
import ExperienceCard from "../../panels/ExperienceCard/ExperienceCard";
import { techCategories } from "../../scenes/TechStack/techData";

const items = [
  {
    role: "Senior Platform Engineer",
    org: "QBE Insurance",
    timeline: "Sept 2025 — present",
    icon: "fa-solid fa-cloud-arrow-up",
    stack: [
      "Packer",
      "Azure",
      "Azure DevOps",
      "Terraform",
      "YAML",
      "Artifactory",
      "SonarQube",
      "PowerShell",
      "Bash",
      "GitHub Copilot",
      "PowerBI",
      "SQL",
      "Prometheus",
      "Grafana",
      "VS Code",
      "Postman",
      "Git",
      "Ubuntu",
      "Windows",
    ],
    bullets: [
      "Championed secure scaling of GitHub Copilot to 900+ engineers by evaluating new LLMs, features, analysing dashboard/API telemetry and collaborating with GitHub and Risk. Achieved 62% adoption of Agent Mode following approved rollout.",
      "Executed complex Terraform state migrations for critical Azure resources by moving from deprecated internal modules to native HashiCorp code and validating changes through staged non-production rollouts.",
      "Consulted on SaaS platform ratifications by assessing authentication models, compatibility, pipeline impacts and firewall requirements to help define enterprise use cases and guardrails.",
      "Reduced VMSS cloud costs by right-sizing agent capacity using Prometheus/Grafana, implementing off-hours scale-to-zero and writing efficient usage guidance.",
      "Resolved long-standing networking failures on CI VMSS agents by partnering with Cyber Security and authoring a risk-based exception proposal to restore stability.",
      "Delivered APRA uplift by authoring platform recovery procedures, strengthening platform controls and consolidating docs into a governed single-source format.",
      "Designed a vulnerability-management process for ephemeral CI VMSS agents, enabling consistent monthly patching and audit-ready assurance.",
      "Led AAD group enforcement for Azure DevOps, achieving clean audit closure through communication, automation and PowerBI reporting.",
      "Mentored engineers and provided high-calibre, ownership-driven support by deep-diving complex platform and CI/CD issues across dev and ops teams.",
    ],
  },
  {
    role: "Platform Engineer",
    org: "QBE Insurance",
    timeline: "Mar 2022 — Sept 2025",
    icon: "fa-solid fa-cloud",
    stack: [
      "Packer",
      "Azure",
      "Azure DevOps",
      "Terraform",
      "YAML",
      "Artifactory",
      "SonarQube",
      "PowerShell",
      "Bash",
      "GitHub Copilot",
      "PowerBI",
      "SQL",
      "Prometheus",
      "Grafana",
      "VS Code",
      "Postman",
      "Git",
      "Ubuntu",
      "Windows",
    ],
    bullets: [
      "Co-led the technical rollout of GitHub Copilot, covering security architecture, governance, access management, onboarding and documentation.",
      "Migrated legacy on-prem tooling (e.g., Artifactory) to cloud-native equivalent, leading risk assessment, change management, communications and post-migration documentation.",
      "Reduced Azure DevOps licensing costs by ~$1.5k/month by removing inactive/third-party accounts and automating daily licence governance.",
      "Developed and maintained Packer-based VMSS image pipelines (Windows/Ubuntu), including automated patching, testing and upgrades across complex firewall layers.",
      "Acted as a key SME for CI agent image builds and DevOps operations during team restructuring, strengthening cross-team collaboration and continuity.",
      "Delivered DevSecOps dashboards and compliance reporting using PowerBI backed by Azure SQL, improving visibility and decision-making.",
      "Automated on-prem SonarQube upgrades with staged rollout, Java dependency upgrades and full rollback protection, significantly reducing operational risk.",
      "Delivered the highest team contribution in 2024 (188 points / 112 PBIs), demonstrating ownership, planning strength and consistent delivery.",
      "Founded and led the 'Team Huddle' forum to review platform features and drive improvements, with 20+ enhancements adopted.",
      "Authored clear platform communications for 2,000+ users and delivered presentations to 200+ stakeholders to drive transparency and engagement.",
    ],
  },
  {
    role: "Junior Developer",
    org: "QBE Insurance",
    timeline: "Jan 2022 — Mar 2022",
    icon: "fa-solid fa-code",
    stack: ["Angular", "React", "HTML", "CSS", "C#", "SQL", "Selenium"],
    bullets: [
      "Worked Agile and remotely with a team in Brussels to upgrade a platform from Angular to React.",
      "Contributed to enhancements to rewrite Selenium tests and refactor ancient SQL queries to improve reliability and performance.",
      "Contributed to a CI/CD pipeline to ensure iterative delivery of software and implemented features based on user feedback.",
    ],
  },
  {
    role: "_nology: Tech Consultant Programme",
    org: "London",
    timeline: "Aug 2021 — Nov 2021",
    icon: "fa-solid fa-graduation-cap",
    stack: [
      "React",
      "HTML5",
      "JavaScript",
      "CSS",
      "Java",
      "Sass",
      "Spring",
      "Figma",
      "Trello",
    ],
    bullets: [
      "Completed a full-time, 12-week coding bootcamp. Participated in agile practices: Stand-ups, retrospectives, and pair programming.",
      "Developed a student management platform using React, Spring, SQL for the client project.",
      "Won awards: 'Most Valuable Programmer' & 'Best Project'.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <HeaderBar
        as="h1"
        title="Experience"
        icon={<i className="fas fa-suitcase" />}
        align="left"
        subtitle="Where I've worked and some of my impact."
        subtitleAlign="left"
      />

      <div className={styles.grid}>
        {items.map((x, i) => (
          <ExperienceCard
            key={`${x.role}-${i}`}
            role={x.role}
            org={x.org}
            timeline={x.timeline}
            bullets={x.bullets}
            icon={x.icon}
            stack={x.stack}
            techCatalog={techCategories}
            aosDelay={i * 60}
          />
        ))}
      </div>
    </section>
  );
}
