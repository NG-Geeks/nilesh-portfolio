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
    default: "Nilesh Gupta | Backend Software Engineer",
    template: "%s | Nilesh Gupta",
  },
  description:
    "Engineering portfolio of Nilesh Gupta: Backend Software Engineer specializing in multi-tenant SaaS security, distributed systems, usage billing, and scalable backend infrastructure.",
  keywords: [
    "Nilesh Gupta",
    "Backend Software Engineer",
    "Backend Engineering",
    "Platform Engineering",
    "Distributed Systems",
    "Multi-Tenant SaaS",
    "IAM Security",
    "Usage-Based Billing",
    "Apache Solr",
    "Redis Lua",
    "Next.js App Router",
    "Three.js",
  ],
  authors: [{ name: "Nilesh Gupta", url: "https://github.com/ng-geeks" }],
  creator: "Nilesh Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ng-geeks.github.io/portfolio_Nilesh",
    title: "Nilesh Gupta | Backend Software Engineer",
    description:
      "Building Secure, Scalable Backend Systems. Multi-Tenant SaaS · IAM & Security · Billing Systems · Distributed Systems.",
    siteName: "Nilesh Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilesh Gupta | Backend Software Engineer",
    description:
      "Building Secure, Scalable Backend Systems. Multi-Tenant SaaS · IAM & Security · Billing Systems · Distributed Systems.",
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
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col relative selection:bg-teal-500 selection:text-slate-950 antialiased font-sans">
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
