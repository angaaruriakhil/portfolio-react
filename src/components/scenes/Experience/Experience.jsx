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
      "Led technical delivery of a reusable DevSecOps Pattern, establishing a self-service capability combining React app scaffolding, DevSecOps-enabled CI/CD and Azure IaC, integrated directly into an Azure DevOps project. Reduced onboarding time while embedding security and engineering standards by default, so developers can focus on application delivery.",
      "Strengthened the security posture of VMSS infrastructure powering application builds by hardening 4 Windows/Ubuntu images against hundreds of CIS controls, achieving 90%+ Qualys compliance. Assessed impacts and justified targeted exceptions where controls disrupted CI workloads.",
      "Optimized the CI VMSS platform for cost, reliability and connectivity, delivering six-figure quarterly savings through metrics-driven (Prometheus/Grafana) right-sizing of idle agents, off-hours scale-to-zero and efficient agent usage documentation.",
      "Scaled CI VMSS from centralized infra (NA) to regional (NA/AO/EO) using Terraform, improving scalability, reducing latency, improving cost/workload segregation and strengthening security through tighter, region-specific network controls.",
      "Championed secure scaling of GitHub Copilot to 1200+ users, evaluating emerging capabilities (Agents, MCP, CLI) for security and developer value. Established a cost model spanning automated license provisioning, budgets and power tiers. Built custom PowerBI usage dashboards for stakeholder visibility.",
      "Unblocked Azure infrastructure delivery by executing complex Terraform state migrations for critical resources (e.g., Key Vaults, VMSS, SQL), replacing deprecated internal modules with native code and validating changes via staged non-prod rollouts to maintain state integrity.",
      "Consulted on enterprise adoption of prospective SaaS platforms, assessing current business needs/challenges, authentication models, usage patterns, integration compatibility, pipeline impacts and reviewing firewall requirements to help define enterprise use cases and guardrails.",
      "Strengthened governance, compliance and auditability by integrating ServiceNow CMDB data with DevSecOps metrics and platforms, improving ownership/consumption visibility across 170+ Azure DevOps projects. Supported APRA compliance through enhanced security controls and DR plans.",
      "Mentored 3 peer engineers and acted as a senior SME supporting both development and operations teams, shaping future-state platform direction, unblocking complex work, and resolving technically challenging incidents to maintain business continuity.",
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
      "Orchestrated migration of legacy on-prem platforms (e.g., JFrog Artifactory) to secure cloud-native alternatives, resolving operational risks and improving reliability. Managed change via ServiceNow, writing risk assessments, communications and documentation to support adoption.",
      "Led a cost-saving and compliance initiative in Azure DevOps to remove 503 inactive/non-compliant accounts - saving ~$1,500/month. Converted 136 licenses to AD group management and automated user clean-up, strengthening license governance and cost accountability.",
      "Owned Windows and Ubuntu VMSS image builds powering core agents used for CI application builds across the estate. Built robust Packer-based CI/CD pipelines to automate patching, image testing, and lifecycle management, and custom image requirements, improving security.",
      "Co-led the technical implementation of GitHub Copilot, including policy enforcement, solution design, access management, security reviews and documentation. Delivered the PoC/PoV rollout, boosting developer productivity, and earned a DNA Champion Award nomination.",
      "Strengthened Platform-Operations collaboration by creating a Dev/Ops Bridge, a central hub for incident resolution and knowledge transfer. Stepped up as a key SME after a senior team member’s departure, ensuring continuity and strong cross-team relationships.",
      "Produced high-quality DevSecOps dashboards in PowerBI backed by Azure SQL, and automatically refreshed daily, giving developers and stakeholders clear visibility of Risk and Audit control standards, and enabling proactive remediation.",
      "Automated a complex on-premises SonarQube upgrade process, creating a Bash-driven, zero touch pipeline with staged rollouts across test/production and automated rollback safeguards, drastically reducing operational risk and improving upgrade reliability.",
      "Drove platform planning, innovation and stakeholder engagement through Epic authoring, Agile delivery and Team Huddle, fostering a proactive, innovation-driven culture while reviewing new platform features and shaping enhancements. Authored communications for 2000+ users and presented strategy to 200+ stakeholders covering technical context, timelines, impact and required actions to drive transparency and adoption.",
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
      "Contributed to a CI/CD pipeline to ensure iterative delivery of software.",
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
