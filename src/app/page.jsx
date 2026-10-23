import Hero from "../components/home/Hero";
import ArchitectureOverview from "../components/home/ArchitectureOverview";
import PrinciplesSection from "../components/home/PrinciplesSection";
import CaseStudiesSection from "../components/home/CaseStudiesSection";
import ExperienceSection from "../components/home/ExperienceSection";
import SkillsSection from "../components/home/SkillsSection";
import CertificationsSection from "../components/home/CertificationsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with 3D Computer Visual */}
      <Hero />

      {/* 2. Platform Scope & High-Impact Metrics */}
      <ArchitectureOverview />

      {/* 3. Core Architecture & Engineering Principles */}
      <PrinciplesSection />

      {/* 4. Deep-Dive Architecture Case Studies (6 Studies) */}
      <CaseStudiesSection />

      {/* 5. Verified Experience (Mocha Technologies & Mirraw) */}
      <ExperienceSection />

      {/* 6. Technical Capabilities by Engineering Domain */}
      <SkillsSection />

      {/* 7. Verified Certifications & Accreditations */}
      <CertificationsSection />

      {/* 8. Secondary Systems & Preserved Projects */}
      <ProjectsSection />

      {/* 9. Contact Section with 3D Earth Visual */}
      <ContactSection />
    </>
  );
}
