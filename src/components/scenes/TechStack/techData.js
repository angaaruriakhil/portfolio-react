import {
  ChatGPT,
  ClaudeAI,
  Copilot,
  Postman,
  Figma,
  Ubuntu,
} from "developer-icons";

import PowerBIIcon from "../../../assets/icons/PowerBI_scalable.svg";
import OfficeIcon from "../../../assets/icons/office.svg";
import ArtifactoryIcon from "../../../assets/icons/artifactory.svg";

// 8 categories, in the exact order they should appear (4 left column, 4 right column)

export const techCategories = [
  // LEFT COLUMN
  {
    name: "cloud-and-iac",
    items: [
      {
        n: "Azure",
        i: "devicon-azure-plain colored",
        tip: "Cloud compute, networking, IAM, managed services",
      },
      {
        n: "VMSS",
        i: "devicon-azure-plain colored",
        tip: "Azure VM Scale Sets for scalable compute",
      },
      {
        n: "Key Vault",
        i: "devicon-azure-plain colored",
        tip: "Secret storage and key management",
      },
      {
        n: "AKS",
        i: "devicon-azure-plain colored",
        tip: "Managed Kubernetes workloads and cluster ops",
      },
      {
        n: "Kubernetes",
        i: "devicon-kubernetes-plain colored",
        tip: "K8s for container orchestration",
      },
      {
        n: "Terraform",
        i: "devicon-terraform-plain colored",
        tip: "Infrastructure as code for platform provisioning",
      },
      {
        n: "Packer",
        i: "devicon-packer-plain colored",
        tip: "Golden image builds for VMs and CI runners",
      },
    ],
  },
  {
    name: "devsecops-tooling",
    items: [
      {
        n: "Azure DevOps",
        i: "devicon-azuredevops-plain colored",
        tip: "CI/CD governance, pipelines, platform automation",
      },
      {
        n: "Artifactory",
        src: ArtifactoryIcon,
        tip: "Artifact registry, dependency storage",
      },
      {
        n: "SonarQube",
        i: "devicon-sonarqube-original colored",
        tip: "Code quality and security scanning",
      },
      {
        n: "Fortify",
        i: "fas fa-shield-alt",
        tip: "Static code analysis (AppSec)",
      },
    ],
  },
  {
    name: "observability-data-and-reporting",
    items: [
      {
        n: "Prometheus",
        i: "devicon-prometheus-plain colored",
        tip: "Monitoring and metrics",
      },
      {
        n: "Grafana",
        i: "devicon-grafana-plain colored",
        tip: "Dashboards and observability",
      },
      {
        n: "PowerBI",
        src: PowerBIIcon,
        tip: "Business intelligence dashboards and data reporting",
      },
      { n: "MS Office", src: OfficeIcon, tip: "Docs, diagrams, reports" },
      {
        n: "SQL",
        i: "devicon-azuresqldatabase-plain",
        tip: "Database queries and dashboards",
      },
      {
        n: "Trello",
        i: "devicon-trello-plain colored",
        tip: "Project management platform",
      },
    ],
  },
  {
    name: "programming-and-scripting",
    items: [
      {
        n: "YAML",
        i: "devicon-yaml-plain colored",
        tip: "Pipeline as code and config management",
      },
      {
        n: "PowerShell",
        i: "devicon-powershell-plain colored",
        tip: "Automation and scripting for Windows/Cloud",
      },
      {
        n: "Bash",
        i: "devicon-bash-plain colored",
        tip: "Terminal scripts and automation tooling",
      },
      {
        n: "Python",
        i: "devicon-python-plain colored",
        tip: "Scripting and automation utilities",
      },
      {
        n: "Java",
        i: "devicon-java-plain colored",
        tip: "JVM ecosystem exposure",
      },
      {
        n: "Markdown",
        i: "devicon-markdown-original colored",
        tip: "Runbooks, documentation, READMEs",
      },
    ],
  },

  // RIGHT COLUMN
  {
    name: "ai-assistants",
    items: [
      {
        n: "GitHub Copilot",
        i: "devicon-github-original colored",
        tip: "Developer assistant for code, PRs, context",
      },
      {
        n: "Microsoft Copilot",
        c: Copilot,
        tip: "Productivity assistant in M365 stack",
      },
      {
        n: "ChatGPT",
        c: ChatGPT,
        tip: "Reasoning, coding help, doc generation",
      },
      { n: "Claude", c: ClaudeAI, tip: "Long-context analysis & code support" },
    ],
  },
  {
    name: "developer-experience-toolchain",
    items: [
      { n: "VS Code", i: "devicon-vscode-plain colored", tip: "Primary IDE" },
      {
        n: "IntelliJ",
        i: "devicon-intellij-plain colored",
        tip: "Java + JetBrains suite",
      },
      {
        n: "Postman",
        c: Postman,
        tip: "API request testing tool",
      },
      {
        n: "Figma",
        c: Figma,
        tip: "Sketching layouts",
      },
      {
        n: "npm",
        i: "devicon-npm-original-wordmark colored",
        tip: "Package manager & script runner for JS/TS workflows",
      },
    ],
  },
  {
    name: "web-development",
    items: [
      {
        n: "React",
        i: "devicon-react-original colored",
        tip: "Frontend applications and portfolio UI",
      },
      { n: "HTML5", i: "devicon-html5-plain colored", tip: "Web markup" },
      { n: "CSS", i: "devicon-css3-plain colored", tip: "UI styling" },
      {
        n: "SASS",
        i: "devicon-sass-original colored",
        tip: "Scalable stylesheet patterns",
      },
      {
        n: "Vite",
        i: "devicon-vitejs-plain colored",
        tip: "Frontend build tooling",
      },
      {
        n: "JS/TS",
        i: "devicon-javascript-plain colored",
        tip: "Frontend tools, automation utilities",
      },
    ],
  },
  {
    name: "source-control-and-sysadmin",
    items: [
      {
        n: "Git",
        i: "devicon-git-plain colored",
        tip: "Version control",
      },
      {
        n: "Ubuntu",
        c: Ubuntu,
        tip: "Linux distribution",
      },
      {
        n: "Windows",
        i: "devicon-windows11-original colored",
        tip: "Linux distribution",
      },
      {
        n: "GitHub",
        i: "devicon-github-original colored",
        tip: "Source code management",
      },
    ],
  },
];
