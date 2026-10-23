export const skillCategories = [
  {
    category: "Backend & Core APIs",
    description: "High-concurrency services, strong typing, clean domain models, and binary/REST protocols.",
    skills: [
      { name: "Node.js / Express", level: "Advanced", note: "Async event loop, streams, microservices" },
      { name: "Python", level: "Advanced", note: "Asyncio, FastAPI, distributed benchmarking" },
      { name: "TypeScript", level: "Proficient", note: "Type-safe domain schemas, contract enforcement" },
      { name: "Go", level: "Intermediate", note: "Concurrent workers, goroutines, micro-daemons" },
      { name: "Java", level: "Proficient", note: "Core Java, OOP, Spring concepts, training accredited" },
      { name: "gRPC & Protocol Buffers", level: "Proficient", note: "Binary serialization, HTTP/2 multiplexing" },
      { name: "RESTful APIs", level: "Advanced", note: "Idempotent design, OpenAPI schemas, versioning" },
    ],
  },
  {
    category: "Architecture & Distributed Systems",
    description: "Multi-tenant isolation, consistency patterns, rate limiting, and failure containment.",
    skills: [
      { name: "Multi-Tenant Architecture", level: "Advanced", note: "Row-level isolation, pooled multi-tenancy" },
      { name: "Distributed Rate Limiting", level: "Advanced", note: "Sliding-window Lua logs, Redis clusters" },
      { name: "Event-Driven & Outbox Pattern", level: "Proficient", note: "Asynchronous queues, reliable event publishing" },
      { name: "Idempotency & Reconciliation", level: "Advanced", note: "Financial ledger safety, webhook deduplication" },
      { name: "Microservices & Domain Modeling", level: "Advanced", note: "Bounded contexts, service mesh concepts" },
      { name: "Circuit Breakers & Retries", level: "Proficient", note: "Exponential backoff, jitter, fail-open fallbacks" },
    ],
  },
  {
    category: "Identity & Application Security",
    description: "Zero-trust principles, token lifecycles, enterprise SSO, and defense-in-depth.",
    skills: [
      { name: "RBAC & Hierarchical Permissions", level: "Advanced", note: "Dynamic role matrices, bitwise PDP evaluators" },
      { name: "OAuth2 / OIDC & JWT", level: "Advanced", note: "Short-lived tokens, Redis revocation lists" },
      { name: "Enterprise SSO", level: "Proficient", note: "Google Workspace & Microsoft Entra ID SAML/OIDC" },
      { name: "MFA & Session Anomaly Detection", level: "Proficient", note: "TOTP, device fingerprinting, session termination" },
      { name: "API Security & OWASP Top 10", level: "Advanced", note: "IDOR mitigation, input sanitization, rate limiting" },
    ],
  },
  {
    category: "Databases, Search & Caching",
    description: "High-cardinality indexing, search clustering, atomic caching, and relational integrity.",
    skills: [
      { name: "PostgreSQL & MySQL", level: "Advanced", note: "Row-level security, indexing, locks, query plans" },
      { name: "Redis & Lua Scripting", level: "Advanced", note: "Atomic EVALSHA scripts, sorted sets, sliding windows" },
      { name: "Apache Solr", level: "Advanced", note: "Faceted search, filterCache pre-warming, DisMax" },
      { name: "MongoDB", level: "Proficient", note: "Document store, aggregation pipelines" },
      { name: "Elasticsearch Concepts", level: "Proficient", note: "Inverted index architectures, text tokenization" },
    ],
  },
  {
    category: "Cloud, DevOps & Observability",
    description: "Containerization, cloud infrastructure, automated testing, and reliability practices.",
    skills: [
      { name: "Docker & Containerization", level: "Advanced", note: "Multi-stage builds, compose clusters, optimization" },
      { name: "Google Cloud Platform", level: "Certified", note: "Cloud Run, IAM, VPC, Cloud Storage" },
      { name: "AWS Fundamentals", level: "Proficient", note: "S3, EC2, RDS, IAM security policies" },
      { name: "CI/CD & Automated Testing", level: "Advanced", note: "200+ integration test suites, GitHub Actions" },
      { name: "SRE & Reliability Practices", level: "Certified", note: "Google Developing SRE Culture credentialed" },
    ],
  },
  {
    category: "Frontend & Visualization",
    description: "Responsive interfaces, interactive 3D rendering, and modern Next.js App Router.",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", note: "Server/Client boundaries, dynamic routes, SEO" },
      { name: "React 18", level: "Advanced", note: "Hooks, state management, suspense, performance" },
      { name: "Three.js / React Three Fiber", level: "Proficient", note: "Interactive 3D workstations, globes, shaders" },
      { name: "Tailwind CSS", level: "Advanced", note: "Editorial design systems, dark modes, animations" },
      { name: "Framer Motion", level: "Proficient", note: "Accessible spring animations, layout transitions" },
    ],
  },
  {
    category: "AI & Emerging Systems",
    description: "Integration of modern language model workflows and vector knowledge bases.",
    skills: [
      { name: "LLM Orchestration & Tool Calling", level: "In Progress", note: "Structured output pipelines, LangChain/LlamaIndex" },
      { name: "RAG & Vector Retrieval", level: "Planned", note: "Embedding pipelines, semantic search over documentation" },
    ],
  },
];
