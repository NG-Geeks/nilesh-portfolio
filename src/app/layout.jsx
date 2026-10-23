import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import dynamic from "next/dynamic";

// Dynamically load stars canvas client-side only without SSR
const StarsCanvas = dynamic(() => import("../components/canvas/Stars"), {
  ssr: false,
});

export const metadata = {
  metadataBase: new URL("https://ng-geeks.github.io"),
  title: {
    default: "Nilesh | Software & Platform Architect • Senior Backend Engineer",
    template: "%s | Nilesh — Software & Solution Architecture",
  },
  description:
    "Engineering portfolio of Nilesh: Software & Solution Architect specializing in multi-tenant SaaS security, distributed rate limiting, Apache Solr commerce discovery, and subscription billing systems.",
  keywords: [
    "Software Architect",
    "Solution Architect",
    "Platform Engineer",
    "Senior Backend Engineer",
    "Distributed Systems",
    "Multi-Tenant SaaS",
    "IAM Security",
    "Usage-Based Billing",
    "Apache Solr",
    "Redis Lua",
    "Next.js App Router",
    "Three.js",
  ],
  authors: [{ name: "Nilesh", url: "https://github.com/Nilesh-geeks" }],
  creator: "Nilesh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ng-geeks.github.io/portfolio_Nilesh",
    title: "Nilesh | Software & Platform Architect",
    description:
      "I build secure platforms and design systems that scale. Explore architectural case studies in multi-tenant IAM, subscription billing, and distributed search.",
    siteName: "Nilesh Architecture Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilesh | Software & Platform Architect",
    description:
      "I build secure platforms and design systems that scale. Explore architectural case studies in multi-tenant IAM, subscription billing, and distributed search.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-navy-950 text-slate-100 min-h-screen flex flex-col relative selection:bg-tealAccent selection:text-navy-950 antialiased">
        {/* Background interactive particle constellation (Three.js) */}
        <StarsCanvas />

        {/* Global sticky navigation bar */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-1 w-full relative z-10">{children}</main>

        {/* Global architectural footer */}
        <Footer />
      </body>
    </html>
  );
}
