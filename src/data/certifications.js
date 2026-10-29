import associateImg from "../assets/associate.png";
import sreImg from "../assets/sre.png";
import iamImg from "../assets/IAM.png";
import fundamentalsImg from "../assets/fundamentals.png";
import wiproImg from "../assets/wipro.png";
import nptelImg from "../assets/nptel.png";

export const certifications = [
  {
    name: "Associate Cloud Engineer Program",
    issuer: "Google Cloud",
    type: "Cloud Architecture & Infrastructure",
    description: "Architecting scalable cloud infrastructure, IAM hierarchy, VPC networking, and compute workloads on Google Cloud Platform.",
    link: "https://drive.google.com/file/d/1IwGobDRMXTHz-yg0o6VwC2BXyaSh2YRh/view?usp=sharing",
    badge: "Google Cloud",
    image: associateImg,
    credentialId: "GCP-ACE-VERIFIED",
  },
  {
    name: "Developing SRE Culture",
    issuer: "Google Cloud",
    type: "Site Reliability Engineering",
    description: "Service level indicators (SLIs), SLOs, error budgets, blameless postmortems, and building high-reliability engineering cultures.",
    link: "https://drive.google.com/file/d/1dqwkx2bAGAZ8SF31_mJvN2qRJPsQM_FK/view?usp=drive_link",
    badge: "SRE & Reliability",
    image: sreImg,
    credentialId: "GCP-SRE-CULTURE",
  },
  {
    name: "Google Cloud IAM & AWS Professional",
    issuer: "Cloud Security Credential",
    type: "Identity & Cloud Security",
    description: "Deep dive into IAM policy evaluation, least-privilege role delegation, service account security, and multi-cloud access controls.",
    link: "https://drive.google.com/file/d/1Usuf0ksZamCAwANV-6atxsJMMtmPZ4_V/view?usp=drive_link",
    badge: "Cloud Security",
    image: iamImg,
    credentialId: "IAM-AWS-SECURITY",
  },
  {
    name: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Google Cloud",
    type: "Cloud Infrastructure",
    description: "Foundational principles of Google compute, storage, BigQuery analytics, containers (GKE), and secure network topologies.",
    link: "https://drive.google.com/file/d/1rGahUiJceNKH4i43YcHVFExYhPpLlxe1/view?usp=drive_link",
    badge: "Core Infrastructure",
    image: fundamentalsImg,
    credentialId: "GCP-CORE-INFRA",
  },
  {
    name: "Java Full Stack Engineering Training",
    issuer: "Wipro",
    type: "Enterprise Backend Training",
    description: "Comprehensive training in core Java, multithreading, enterprise backend frameworks, relational persistence, and clean code principles.",
    link: "https://drive.google.com/file/d/1QqHxT6vPqDDYjlxxeXilJ4iGqLFIrMCt/view?usp=drive_link",
    badge: "Java Full Stack",
    image: wiproImg,
    credentialId: "WIPRO-JAVA-FS",
  },
  {
    name: "Blockchain and its Architecture",
    issuer: "NPTEL",
    type: "Distributed Ledger Architecture",
    description: "Study of distributed consensus protocols, cryptography, smart contracts, Byzantine fault tolerance, and verifiable decentralization.",
    link: "https://drive.google.com/file/d/1yCTUxQ-KVfEtlm72LpX6wGGMksE5NFGh/view?usp=drive_link",
    badge: "Distributed Consensus",
    image: nptelImg,
    credentialId: "NPTEL-BC-ARCH",
  },
];
