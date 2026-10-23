export const experiences = [
  {
    company: "Mocha Technologies",
    role: "Platform & Backend Engineer",
    period: "2023 — Present",
    location: "Bengaluru, India (Hybrid)",
    badge: "Enterprise SaaS & Security",
    summary:
      "Core engineering across multi-tenant platform infrastructure, IAM security boundaries, and subscription billing engines serving 50k+ enterprise tenants.",
    highlights: [
      "Architected application-layer RBAC and row-level data isolation across 20+ microservices and a 6-product B2B SaaS suite.",
      "Engineered the QuickBill subscription and usage-based billing platform with idempotent event ingestion and automated seat proration.",
      "Implemented enterprise SSO integrations (Google Workspace, Microsoft Entra ID) and session lifecycle anomaly detection.",
      "Built an automated test harness with 200+ cross-service integration tests validating security and isolation boundaries.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "OAuth2 / OIDC",
      "Microservices",
      "Stripe API",
    ],
  },
  {
    company: "Mirraw",
    role: "Backend & Systems Engineer",
    period: "2023",
    location: "Mumbai, India",
    badge: "High-Scale E-Commerce",
    summary:
      "Engineered high-throughput search discovery, composable cart transaction models, and distributed geographic analytics for global e-commerce traffic.",
    highlights: [
      "Architected Apache Solr faceted discovery cluster handling 500k+ SKUs across 220+ countries, achieving ~40% faster catalog search.",
      "Designed the composable 'LineItem → LineItemAddon' domain model and atomic multi-resource inventory locking for custom tailored products.",
      "Developed rolling country/timeframe Revenue-Per-Visitor (RPV) analytics pipeline feeding localized boost weights into search ranking.",
      "Formulated Redis Lua scripts and edge CDN caching strategies maintaining sub-60ms P95 search latency during festival traffic surges.",
    ],
    technologies: [
      "Apache Solr",
      "Node.js",
      "Redis Lua",
      "PostgreSQL",
      "Docker",
      "Cloudflare CDN",
      "Distributed Systems",
    ],
  },
];
