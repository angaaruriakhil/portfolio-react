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
      "Steered SonarQube SaaS evaluation, defining enterprise use-cases, SSO patterns, and platform guardrails.",
      "Architected a new VMSS image lifecycle, reducing rebuild time from ~6h to ~1h and enabling rapid zero-day patching.",
      "Designed a vulnerability management process for ephemeral CI VMSS agents, establishing repeatable monthly patching and audit assurance.",
      "Delivered APRA uplift by authoring platform recovery procedures, tightening platform controls and consolidating DR docs into a single governed format.",
      "Led org-wide AAD group enforcement for Azure DevOps, achieving ~68% compliance remediation via communication and clean audit closure via automation.",
      "Championed secure scaling of GitHub Copilot to 900+ engineers, validating new LLM models and features with Risk and Audit teams.",
      "Standardised onboarding to core DevSecOps services such as Artifactory, improving developer experience and reducing support overhead.",
      "Mentored peer engineers and represented DevSecOps across business forums, influencing platform direction and engineering culture.",
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
      "Co-led GitHub Copilot rollout (security, governance, adoption)",
      "Migrated legacy on-prem systems to secure cloud platforms; led change & comms.",
      "Cut Azure DevOps costs by ~$1.5k/month via user clean-up & automated license governance.",
      "Owned and developed VMSS image build pipelines (Windows/Ubuntu) for mission-critical CI agents.",
      "Became key SME during team restructure and improved cross-team collaboration.",
      "Built PowerBI DevSecOps dashboards backed by Azure SQL.",
      "Automated SonarQube upgrades with staged rollout & rollback protection.",
      "Top performer in 2024 (188 pts / 112 backlog items).",
      "Founded 'Team Huddle' forum to shape platform roadmap (20+ improvements adopted).",
      "Delivered clear platform comms for 2k+ and presentations to 200+ stakeholders.",
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
