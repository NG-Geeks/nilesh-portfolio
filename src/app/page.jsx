import Hero from "../components/home/Hero";
import ArchitectureOverview from "../components/home/ArchitectureOverview";
import CaseStudiesSection from "../components/home/CaseStudiesSection";
import ExperienceSection from "../components/home/ExperienceSection";
import PrinciplesSection from "../components/home/PrinciplesSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import CertificationsSection from "../components/home/CertificationsSection";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Identity, Value Prop, Two Primary CTAs & 3D Workstation */}
      <Hero />

      {/* 2. Platform Scope & High-Impact Verified Metrics */}
      <ArchitectureOverview />

      {/* 3. Deep-Dive Architecture Case Studies */}
      <CaseStudiesSection />

      {/* 4. Professional Experience (Mocha Technologies & Mirraw) */}
      <ExperienceSection />

      {/* 5. Core Architecture & Engineering Principles */}
      <PrinciplesSection />

      {/* 6. Technical Stack & Capabilities by Domain */}
      <SkillsSection />

      {/* 7. Systems Projects & Open Source Repositories */}
      <ProjectsSection />

      {/* 8. Verified Accreditations & Certifications */}
      <CertificationsSection />

      {/* 9. Direct Hiring & Contact CTA Banner */}
      <ContactSection />
    </>
  );
}
