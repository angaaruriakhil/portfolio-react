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
      {
        lead: "Led technical delivery of a reusable DevSecOps Pattern",
        text: "establishing a self-service capability combining React app scaffolding, DevSecOps-enabled CI/CD and Azure IaC, integrated directly into an Azure DevOps project. Reduced onboarding time while embedding security and engineering standards by default, so developers can focus on application delivery.",
      },
      {
        lead: "Strengthened the security posture of VMSS infrastructure powering application builds",
        text: "by hardening 4 Windows/Ubuntu images against hundreds of CIS controls, achieving 90%+ Qualys compliance. Assessed impacts and justified targeted exceptions where controls disrupted CI workloads.",
      },
      {
        lead: "Optimized the CI VMSS platform for cost, reliability and connectivity",
        text: "delivering six-figure quarterly savings through metrics-driven (Prometheus/Grafana) right-sizing of idle agents, off-hours scale-to-zero and efficient agent usage documentation.",
      },
      {
        lead: "Scaled CI VMSS from centralized infrastructure in NA to regional infrastructure across NA/AO/EO",
        text: "using Terraform, improving scalability, reducing latency, improving cost/workload segregation and strengthening security through tighter, region-specific network controls.",
      },
      {
        lead: "Championed secure scaling of GitHub Copilot to 1200+ users",
        text: "evaluating emerging capabilities (Agents, MCP, CLI) for security and developer value. Established a cost model spanning automated license provisioning, budgets and power tiers. Built custom PowerBI usage dashboards for stakeholder visibility.",
      },
      {
        lead: "Unblocked Azure infrastructure delivery through complex Terraform state migrations",
        text: "for critical resources (e.g., Key Vaults, VMSS, SQL), replacing deprecated internal modules with native code and validating changes via staged non-prod rollouts to maintain state integrity.",
      },
      {
        lead: "Consulted on enterprise adoption of prospective SaaS platforms",
        text: "assessing business needs, authentication models, usage patterns, integration compatibility, pipeline impacts and firewall requirements to help define enterprise use cases and guardrails.",
      },
      {
        lead: "Strengthened governance, compliance and auditability",
        text: "by integrating ServiceNow CMDB data with DevSecOps metrics and platforms, improving ownership/consumption visibility across 170+ Azure DevOps projects. Supported APRA compliance through enhanced security controls and DR plans.",
      },
      {
        lead: "Mentored 3 peer engineers and acted as a senior SME",
        text: "supporting both development and operations teams, shaping future-state platform direction, unblocking complex work, and resolving technically challenging incidents to maintain business continuity.",
      },
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
      {
        lead: "Orchestrated migration of legacy on-prem platforms to secure cloud-native alternatives",
        text: "resolving operational risks and improving reliability. Managed change via ServiceNow, writing risk assessments, communications and documentation to support adoption.",
      },
      {
        lead: "Led a cost-saving and compliance initiative in Azure DevOps",
        text: "to remove 503 inactive/non-compliant accounts, saving ~$1,500/month. Converted 136 licenses to AD group management and automated user clean-up, strengthening license governance and cost accountability.",
      },
      {
        lead: "Owned Windows and Ubuntu VMSS image builds powering core CI agents",
        text: "across the estate. Built robust Packer-based CI/CD pipelines to automate patching, image testing, lifecycle management and custom image requirements, improving security.",
      },
      {
        lead: "Built an AKS-based observability platform for VMSS agents",
        text: "automating Prometheus/Grafana/exporter deployment and ACR image management via Azure DevOps pipelines. Built dashboards and threshold-based MS Teams alerts for health/queues, enabling centralized, proactive monitoring.",
      },
      {
        lead: "Co-led the technical implementation of GitHub Copilot",
        text: "including policy enforcement, solution design, access management, security reviews and documentation. Delivered the PoC/PoV rollout, boosting developer productivity, and earned a DNA Champion Award nomination.",
      },
      {
        lead: "Strengthened Platform-Operations collaboration",
        text: "by creating a Dev/Ops Bridge, a central hub for incident resolution and knowledge transfer. Stepped up as a key SME after a senior team member’s departure, ensuring continuity and strong cross-team relationships.",
      },
      {
        lead: "Produced DevSecOps dashboards in PowerBI",
        text: "backed by Azure SQL and automatically refreshed daily, giving developers and stakeholders visibility of Risk and Audit control standards and enabling proactive remediation.",
      },
      {
        lead: "Automated a complex on-premises SonarQube upgrade process",
        text: "creating a Bash-driven, zero-touch pipeline with staged rollouts across test/production and automated rollback safeguards, reducing operational risk and improving upgrade reliability.",
      },
      {
        lead: "Drove platform planning, innovation and stakeholder engagement",
        text: "through Epic authoring, Agile delivery and Team Huddle, while reviewing new platform features and shaping enhancements. Authored communications for 2000+ users and presented strategy to 200+ stakeholders covering technical context, timelines, impact and required actions.",
      },
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
