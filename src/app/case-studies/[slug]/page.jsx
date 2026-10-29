import { notFound } from "next/navigation";
import { caseStudies } from "../../../data/caseStudies";
import CaseStudyTemplate from "../../../components/case-studies/CaseStudyTemplate";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.overview,
    openGraph: {
      title: `${study.title} | Case Study`,
      description: study.headline,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }) {
  const currentIndex = caseStudies.findIndex((s) => s.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const study = caseStudies[currentIndex];
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <CaseStudyTemplate
      study={study}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
    />
  );
}

