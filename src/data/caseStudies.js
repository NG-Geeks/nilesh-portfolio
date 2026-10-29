export const caseStudies = [
  {
    slug: "multi-tenant-iam",
    title: "Multi-Tenant SaaS Security & Hierarchical Access Control",
    shortTitle: "Multi-Tenant IAM",
    category: "Identity & Platform Security",
    role: "Platform Engineer — IAM & Tenant Isolation",
    company: "Mocha Technologies",
    headline: "Enforcing zero-leakage tenant boundaries and granular authorization across 20+ microservices.",
    overview:
      "Engineered application-layer tenant isolation, hierarchical role-based access control (RBAC), and session security for a six-product B2B SaaS suite. Solved the operational challenge of allowing enterprise clients to define custom granular permissions without creating schema fragmentation or cross-tenant data leaks.",
    reportedScope: {
      tenants: "50,000+ Enterprise Tenants (Platform Scope)",
      users: "1,000,000+ Active Users (Platform Scope)",
      suite: "6 Integrated SaaS Products",
      testing: "200+ Cross-Service Integration Tests",
    },
    context:
      "As Mocha Technologies expanded across enterprise accounts, clients required verified data isolation and customizable access control. Organizations required distinct permission hierarchies, departmental role delegation, multi-factor authentication (MFA), and single-sign-on (SSO) with Google Workspace and Microsoft Entra ID (Azure AD).",
    constraints: [
      "Zero cross-tenant data leakage within a pooled, shared-database infrastructure.",
      "Custom role permissions must evaluate with low latency on every authenticated request.",
      "Immediate session invalidation capability across all pods upon detected device anomalies.",
      "Full backward compatibility for legacy microservice endpoints during rollout.",
    ],
    personalContribution: [
      "Architected application-layer RBAC with tenant scoping injected into database query contexts.",
      "Implemented hierarchical role inheritance and custom permission matrix evaluators.",
      "Engineered token lifecycle management: short-lived signed JWTs paired with Redis revocation tracking.",
      "Integrated enterprise SSO (Google Workspace, Microsoft Entra ID) and MFA verification flows.",
      "Authored 200+ cross-service integration tests validating tenant isolation boundaries in CI/CD pipelines.",
    ],
    architecture: {
      description:
        "Requests enter via the API Gateway where authentication and session validity are verified. The Tenant Context Interceptor injects the verified Tenant ID and role permissions into downstream service calls. Every database query automatically applies row-level tenant filtering.",
      layers: [
        {
          name: "Client & Ingress Layer",
          items: ["Web & Mobile Clients", "API Gateway (TLS 1.3 / Ingress)"],
        },
        {
          name: "Security & Enforcement Layer",
          items: ["Token Verification (JWT)", "Tenant Context Interceptor", "Redis Revocation Cache"],
        },
        {
          name: "Microservices & Business Logic",
          items: ["Hierarchical Role Evaluator (PDP)", "Product Microservices Mesh"],
        },
        {
          name: "Persistence & Data Isolation",
          items: ["Scoped Query Interceptor (WHERE tenant_id = ?)", "Pooled PostgreSQL Storage"],
        },
      ],
      flow: [
        "Client transmits request with Bearer JWT token to API Gateway.",
        "Gateway verifies token signature and checks Redis session revocation status.",
        "Tenant Context Interceptor extracts Tenant ID and organizational tree path.",
        "Authorization engine evaluates requested resource action against cached permission roles.",
        "Downstream microservice executes data queries with enforced tenant-scoping clauses.",
        "Encrypted audit log records user ID, tenant ID, and action vector for compliance.",
      ],
    },
    decisions: [
      {
        decision: "Application-Layer Tenant Scoping vs Database-Per-Tenant",
        rationale:
          "Managing tens of thousands of individual PostgreSQL databases would cause connection pool exhaustion and complex operational overhead during migrations. A shared database with row-level tenant filtering enforced at the query interceptor layer provided efficient resource utilization with strict automated test verification.",
      },
      {
        decision: "In-Memory Permission Caching in Redis",
        rationale:
          "Evaluating complex multi-level organizational permission joins on every API hit is cost-prohibitive. Compiling evaluated roles into cached permission sets in Redis allows rapid authorization checks.",
      },
      {
        decision: "Short-Lived Access Tokens with Redis Revocation Tracking",
        rationale:
          "Stateless JWTs allow high-throughput verification, while Redis revocation tracking provides the enterprise requirement for instant session termination during security events.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Pooled Database Architecture",
        chosen: "Shared database tables with programmatic tenant filtering and scoped indexes.",
        alternative: "Separate database or schema per tenant.",
        impact:
          "Lowered infrastructure overhead and simplified migrations, requiring rigorous automated testing (200+ integration tests) to ensure zero data leakage.",
      },
      {
        aspect: "Role Modification Propagation",
        chosen: "Event-driven cache invalidation when administrative roles are altered.",
        alternative: "Strict time-to-live (TTL) polling without event invalidation.",
        impact:
          "Role updates take effect immediately across all pods, with a minimal pub/sub invalidation overhead.",
      },
    ],
    reliabilityAndSecurity:
      "Tenant scoping is enforced at the query layer, rejecting any data access missing an explicit tenant context. Suspicious activity triggers session termination across active pod instances.",
    results: [
      "Reported Platform Scope: Supported 50k+ enterprise tenants across 6 SaaS products.",
      "Zero cross-tenant data leakage incidents reported during security audits.",
      "Consistent low-latency authorization checks via in-memory caching.",
      "200+ automated integration tests integrated into continuous integration pipelines.",
    ],
    lessonsLearned:
      "Multi-tenancy and data isolation must be enforced systematically at the query and middleware layers rather than relying on individual developer query discipline.",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "JWT / OAuth2 / OIDC",
      "Docker",
      "Google Workspace SSO",
      "Microsoft Entra ID",
      "Microservices",
    ],
  },
  {
    slug: "usage-seat-billing",
    title: "Usage-Based & Seat Synchronization Billing Engine",
    shortTitle: "Usage & Seat Billing",
    category: "Financial Infrastructure & Distributed Systems",
    role: "Backend & Systems Engineer",
    company: "Mocha Technologies (QuickBill)",
    headline: "Idempotent event processing, consumption metering, and subscription proration reconciliation.",
    overview:
      "Engineered core components of the QuickBill subscription and usage-based billing platform. Supported hybrid licensing models combining base seat quantities with dynamic consumption metering, ensuring idempotent processing and automated failure recovery.",
    reportedScope: {
      platform: "QuickBill Subscription Platform",
      licensing: "Hybrid Seat-Based + Usage Metering",
      resilience: "Idempotent Event Ingestion Pipeline",
      recovery: "Automated Dunning & Retry Workflows",
    },
    context:
      "Enterprise SaaS customers require flexible licensing: base seats for team members combined with metered consumption (API hits, storage, compute). Inaccurate proration or duplicated events under network retries directly cause financial discrepancies.",
    constraints: [
      "Financial consistency: Prevent duplicate billing under network retries, gateway drops, or worker restarts.",
      "High-volume usage ingestion without creating row lock contention on customer account balances.",
      "Accurate mid-cycle seat proration when team members are added or removed.",
      "Reliable reconciliation with payment gateway webhooks (Stripe / Razorpay).",
    ],
    personalContribution: [
      "Engineered asynchronous usage metering pipeline processing consumption events with idempotency keys.",
      "Formulated seat proration calculation logic determining exact credit deltas during mid-cycle tier changes.",
      "Implemented asynchronous event publishing to decouple usage collection from billing updates.",
      "Constructed webhook retry and dunning workers with exponential backoff and jitter.",
      "Built reconciliation jobs verifying payment gateway subscription statuses against internal billing records.",
    ],
    architecture: {
      description:
        "The billing architecture decouples high-frequency usage event ingestion from billing calculations. Events arrive with unique idempotency keys, pass through deduplication buffers, and are aggregated by worker jobs before updating customer balances.",
      layers: [
        {
          name: "Usage Ingestion Layer",
          items: ["Product Services (Event Emitters)", "Idempotency Validation Gateway"],
        },
        {
          name: "Asynchronous Buffering Layer",
          items: ["Deduplication Store (Redis)", "Partitioned Event Queue"],
        },
        {
          name: "Billing & Proration Engine",
          items: ["Batch Usage Aggregator", "Seat Proration Calculation Worker"],
        },
        {
          name: "Reconciliation & Gateways",
          items: ["Customer Billing Database", "Payment Gateway (Stripe / Razorpay)"],
        },
      ],
      flow: [
        "Product service emits usage event with deterministic idempotency identifier.",
        "Ingestion gateway verifies event schema and checks deduplication store.",
        "Event queue partitions consumption streams by tenant to preserve operational order.",
        "Batch worker aggregates consumption units into billing period intervals.",
        "Proration engine calculates credit deltas when seat license counts change mid-cycle.",
        "Invoices and payment gateway transactions synchronize via automated webhooks.",
      ],
    },
    decisions: [
      {
        decision: "Idempotent Event Ingestion via Deduplication Keys",
        rationale:
          "Network drops cause client libraries and webhooks to retry requests. Validating an idempotency key prior to processing guarantees that repeated event transmissions are acknowledged without duplicating charge records.",
      },
      {
        decision: "Decoupled Asynchronous Batch Aggregation",
        rationale:
          "Writing directly to customer balance tables on every single consumption event creates high row-lock contention. Buffering events and aggregating in batches eliminated lock waits while maintaining accurate billing periods.",
      },
      {
        decision: "Integer Cent Currency Math",
        rationale:
          "Floating-point representation causes compounding rounding discrepancies. Storing all monetary values and proration calculations as integer cents ensures deterministic financial balance.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Batch Aggregation vs Real-Time DB Writes",
        chosen: "Asynchronous interval aggregation before writing balance updates.",
        alternative: "Synchronous database transaction on every usage event.",
        impact:
          "Eliminated database row-lock contention, introducing an acceptable operational aggregation window for usage displays.",
      },
      {
        aspect: "Payment Gateway Failure Recovery",
        chosen: "Automated retry workers with exponential backoff and customer notification flows.",
        alternative: "Immediate account cancellation on first payment gateway failure.",
        impact:
          "Recovered failed renewal payments gracefully without unnecessary administrative intervention.",
      },
    ],
    reliabilityAndSecurity:
      "All financial operations execute under database transactions with strict constraint validation. Webhooks from payment providers verify cryptographic signatures before triggering subscription updates.",
    results: [
      "Prevented duplicate billing reports across high-frequency API consumption clients.",
      "Supported hybrid seat-plus-usage subscription plans across enterprise customer tiers.",
      "Automated webhook failure retries with graceful notification flows.",
      "Eliminated proration rounding discrepancies through integer math calculation.",
    ],
    lessonsLearned:
      "In financial and subscription infrastructure, designing for idempotency and asynchronous decoupling from day one prevents costly billing reconciliation errors.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Message Queues",
      "Stripe API",
      "Docker",
      "REST APIs",
    ],
  },
  {
    slug: "commerce-discovery",
    title: "High-Throughput Commerce Discovery with Apache Solr",
    shortTitle: "Solr Commerce Discovery",
    category: "Search & Catalog Discovery",
    role: "Backend & Systems Engineer",
    company: "Mirraw",
    headline: "Dynamic landing pages, multi-faceted filtering, and catalog discovery across 500k+ SKUs.",
    overview:
      "Engineered search and catalog discovery infrastructure at Mirraw for global e-commerce traffic spanning 220+ countries. Implemented an Apache Solr distributed search tier with dynamic landing pages, multi-attribute faceted navigation, and catalog caching across 500,000+ active SKUs.",
    reportedScope: {
      catalog: "500,000+ Active SKUs",
      reach: "Traffic from 220+ Countries (Reported CV Scope)",
      speedImpact: "~40% Faster Catalog Discovery (Reported CV Benchmark)",
      architecture: "Distributed Apache Solr + Edge Caching",
    },
    context:
      "Mirraw operates an international marketplace with high-cardinality variations (fabric, color, occasion, price, regional seller). Standard relational database queries for multi-attribute faceted searches suffered severe response degradation during festive traffic spikes. The business required rapid, flexible dynamic landing pages based on search trends.",
    constraints: [
      "Fast response times for complex multi-attribute faceted queries across 500k+ SKUs.",
      "Inventory updates (stock changes, price deltas) must reflect in search indexes without heavy full rebuilds.",
      "Edge caching must accommodate multi-currency pricing for global visitors.",
      "Maintain high search availability during high-traffic festival sales.",
    ],
    personalContribution: [
      "Configured Apache Solr schema and index structures optimized for multi-value faceted filtering.",
      "Engineered dynamic landing page generation translating campaign parameters into Solr filter queries.",
      "Implemented Solr filter query caching strategies to maximize cache reuse on frequent filters.",
      "Built asynchronous worker jobs pushing stock and price updates to Solr in micro-batches.",
      "Coordinated edge CDN caching policies for category listings and promotional carousels.",
    ],
    architecture: {
      description:
        "Global visitor traffic reaches edge CDN nodes. Unfiltered category listings are served from edge caches. Filtered searches pass to the Backend Discovery Service, which queries the Apache Solr cluster for matching SKU IDs and facet counts, hydrating presentation data from high-speed cache replicas.",
      layers: [
        {
          name: "Global Edge & Ingress",
          items: ["Global Traffic (220+ Countries)", "Edge CDN (Query Normalization & Cache)"],
        },
        {
          name: "Discovery API Tier",
          items: ["Node.js Discovery Service", "Solr Query DSL Generator"],
        },
        {
          name: "Search Cluster Tier",
          items: ["Apache Solr Sharded Cluster", "Filter Cache (fq) & Document Cache"],
        },
        {
          name: "Data Hydration & Primary DB",
          items: ["Redis Metadata Cache", "Catalog & Inventory Primary Database"],
        },
      ],
      flow: [
        "Shopper accesses dynamic campaign URL with attribute filters (e.g., color, fabric, price range).",
        "Edge CDN checks for normalized cached response for anonymous traffic.",
        "On cache miss, request routes to Backend Discovery Service.",
        "Service constructs Solr Filter Queries (fq) isolating unranked filters from relevance queries.",
        "Solr evaluates matching documents and computes dynamic facet counts.",
        "Service hydrates product presentation metadata from Redis cache.",
        "Response returns to user and populates edge cache with regional cache headers.",
      ],
    },
    decisions: [
      {
        decision: "Separation of Filter Queries (`fq`) from Scoring Queries (`q`)",
        rationale:
          "In Apache Solr, `fq` results are cached as unranked bitsets independently of relevance scoring. Separating static attributes (category, stock status) into `fq` allowed high cache reuse across differing user searches.",
      },
      {
        decision: "Two-Tier Data Hydration (Search Index for IDs, Cache for Metadata)",
        rationale:
          "Storing large JSON product blobs inside Solr bloats the index and increases memory pressure. Solr returns SKU IDs and facet counts, while full product display objects are hydrated from Redis.",
      },
      {
        decision: "Micro-Batch Index Updates via Asynchronous Workers",
        rationale:
          "Executing commits on Solr for every individual inventory change causes excessive disk I/O. Asynchronous workers batch updates every few seconds, maintaining search performance during flash traffic.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Search Index Consistency",
        chosen: "Near-real-time index commits in micro-batches.",
        alternative: "Strict synchronous commit on every single stock change.",
        impact:
          "Protected Solr cluster stability during traffic surges, with an acceptable brief interval where cart checkout validation catches newly exhausted items.",
      },
      {
        aspect: "Faceted Count Cardinality",
        chosen: "Pre-configured primary facets with paginated secondary filters.",
        alternative: "Computing all possible dynamic attribute facet combinations on every query.",
        impact:
          "Reduced search CPU utilization while preserving deep faceted exploration for shoppers.",
      },
    ],
    reliabilityAndSecurity:
      "Query builders sanitize all search inputs to prevent injection vulnerabilities. Read replicas isolate search traffic so intense browsing never impacts transaction processing.",
    results: [
      "Reported CV Benchmark: Approximately ~40% faster catalog discovery compared to legacy relational queries.",
      "Maintained fast faceted search response times across 500,000+ SKUs.",
      "Enabled rapid dynamic landing page creation for marketing campaigns without code deployments.",
      "Supported reliable search uptime during peak seasonal shopping surges.",
    ],
    lessonsLearned:
      "Decoupling catalog search from relational transaction tables into a dedicated inverted-index search engine is essential for high-cardinality e-commerce discovery.",
    technologies: [
      "Apache Solr",
      "Node.js",
      "Redis",
      "PostgreSQL / MySQL",
      "Docker",
      "Edge CDN",
      "Faceted Search",
    ],
  },
  {
    slug: "composable-cart",
    title: "Composable Cart Architecture & Multi-Addon Inventory Validation",
    shortTitle: "Composable Cart & Addons",
    category: "Transaction Systems & Inventory Logic",
    role: "Backend Engineer",
    company: "Mirraw",
    headline: "Hierarchical LineItem → LineItemAddon domain model with multi-item checkout validation.",
    overview:
      "Engineered the shopping cart and checkout customization pipeline for Mirraw. Built the composable LineItem to LineItemAddon domain model, enabling shoppers to attach custom tailoring services, measurements, gift packaging, and matching accessories to individual items with dynamic price recalculation and per-addon inventory validation.",
    reportedScope: {
      platform: "Mirraw Core Checkout & Cart",
      domainModel: "LineItem → LineItemAddon Hierarchy",
      catalogEfficiency: "Supported Custom Combinations without Catalog Duplication",
      validation: "Multi-Item Inventory Validation on Checkout",
    },
    context:
      "Traditional e-commerce carts assume simple static products. In specialized apparel, garments often require customization: custom stitching measurements, accessory attachments, or packaging. Generating separate database SKUs for every permutation created catalog explosion. The business needed composable addons attached directly to cart items.",
    constraints: [
      "Prevent overselling: Physical addon items (e.g. matching accessories) must be inventory-validated alongside the primary garment.",
      "Customization fee calculations must reflect custom measurements and regional pricing.",
      "Cart operations (quantity changes, deletions) must cascade cleanly to child addons.",
      "Prevent race conditions when multiple shoppers attempt to checkout limited-stock items.",
    ],
    personalContribution: [
      "Architected the relational domain schema representing parent LineItems and child LineItemAddon entities.",
      "Engineered cart pricing engine calculating tiered customization charges and addon fees.",
      "Implemented inventory validation checks evaluating both primary and addon items prior to order confirmation.",
      "Built validation logic reconciling garment dispatch dates with custom tailoring lead times.",
      "Designed checkout failure recovery releasing reserved items if checkout is abandoned.",
    ],
    architecture: {
      description:
        "The cart model structures items hierarchically. A Cart contains LineItems, and each LineItem maintains associated LineItemAddons (services, physical accessories, packaging). At checkout, the validation coordinator evaluates stock availability across both the parent SKU and all associated addon items before payment processing.",
      layers: [
        {
          name: "Cart State & API Layer",
          items: ["Shopping Cart Controller", "Nested Addon Payload Validator"],
        },
        {
          name: "Domain & Pricing Engine",
          items: ["LineItem → LineItemAddon Domain Model", "Dynamic Pricing & Tax Calculator"],
        },
        {
          name: "Validation & Lock Coordinator",
          items: ["Inventory Validation Coordinator", "Atomic Checkout Reservation"],
        },
        {
          name: "Order & Inventory Store",
          items: ["PostgreSQL Order Store", "Inventory Delta Service"],
        },
      ],
      flow: [
        "Shopper selects garment SKU and adds custom stitching specifications and matching accessory.",
        "API validates addon compatibility against parent category rules.",
        "Pricing engine computes aggregated total: base price + customization fee + physical addon.",
        "On checkout initiation, validation coordinator verifies stock for both parent and child items.",
        "Temporary reservation holds stock during payment gateway redirect.",
        "Upon payment webhook confirmation, reservation converts to confirmed order records; otherwise stock is released.",
      ],
    },
    decisions: [
      {
        decision: "Relational LineItemAddon Model vs Untyped JSON Blob",
        rationale:
          "Storing addons as unstructured JSON within cart records prevents SQL-level foreign key enforcement and direct inventory verification. A normalized child table ensured database integrity and explicit relationship tracking.",
      },
      {
        decision: "Atomic Multi-Item Inventory Validation at Checkout",
        rationale:
          "Validating parent and child items sequentially creates race conditions where a parent item succeeds but an addon fails. Validating all items within an atomic transaction prevents partial order states.",
      },
      {
        decision: "Cascading Cart Lifecycle Operations",
        rationale:
          "Mutations on the parent LineItem (such as removing an item or modifying quantity) cascade predictably to child customization records to prevent orphaned service charges.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Stock Reservation Hold Duration",
        chosen: "Time-limited temporary stock hold during checkout with automatic expiration.",
        alternative: "Indefinite locking until manual administrative review.",
        impact:
          "Ensured that abandoned payment attempts automatically return scarce inventory to the catalog without manual intervention.",
      },
      {
        aspect: "Pricing Calculation Timing",
        chosen: "On-demand price recalculation on cart modification.",
        alternative: "Pre-computed static price matrices.",
        impact:
          "Accommodated fluctuating exchange rates and promotional discounts with minimal calculation overhead.",
      },
    ],
    reliabilityAndSecurity:
      "All pricing calculations execute exclusively on the backend; client-submitted price fields are ignored. Database transactions with optimistic locking prevent concurrent checkouts of exhausted stock.",
    results: [
      "Supported thousands of customized apparel combinations without creating duplicate catalog SKUs.",
      "Eliminated inventory mismatch incidents between garments and attached accessories.",
      "Maintained fast cart mutation response times during peak shopping traffic.",
      "Directly enabled international custom tailoring and gift options on the platform.",
    ],
    lessonsLearned:
      "Complex e-commerce products require domain models that treat customization services and physical accessories as composable entities with unified inventory validation.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST APIs",
      "Transaction Management",
      "E-Commerce Cart Architecture",
    ],
  },
  {
    slug: "distributed-analytics",
    title: "Distributed Geographic RPV Analytics & Ranking Feedback Loop",
    shortTitle: "Distributed RPV Analytics",
    category: "Analytics & Ranking Systems",
    role: "Analytics Systems Engineer",
    company: "Mirraw",
    headline: "Country/timeframe Revenue-Per-Visitor analytics driving localized product ranking and ~20% conversion uplift.",
    overview:
      "Built an analytics aggregation pipeline at Mirraw processing shopper behavior across 220+ countries. Captured product impressions, cart additions, and purchase transactions to compute localized Revenue-Per-Visitor (RPV) metrics, feeding regional weights back into search and catalog ranking algorithms.",
    reportedScope: {
      reach: "Shoppers Across 220+ Countries (Reported CV Scope)",
      conversionImpact: "~20% Conversion Uplift (Reported CV Result)",
      pipeline: "Behavioral Telemetry to Catalog Ranking Loop",
      metric: "Localized Country/Timeframe Revenue Per Visitor (RPV)",
    },
    context:
      "Global consumers have distinctly different purchasing power, regional festival dates, and stylistic preferences. A product that converts well in international diaspora markets may perform differently in domestic regions. Static global rankings depressed international conversion rates. Mirraw needed regional performance signals reflected in product discovery.",
    constraints: [
      "Telemetry ingestion must never introduce latency into the shopper's page render or checkout path.",
      "Handle high-volume browsing events across international web and mobile traffic.",
      "New catalog items with limited historical data must receive appropriate baseline visibility.",
      "Historical purchase spikes (e.g. Diwali season) must decay gracefully as seasonal demand shifts.",
    ],
    personalContribution: [
      "Engineered asynchronous telemetry collection endpoint receiving batched behavioral pings.",
      "Implemented stream aggregation workers computing rolling country-level RPV scores across rolling time windows.",
      "Formulated time-decay ranking adjustments balancing recent conversion with historical performance.",
      "Integrated Google Analytics signals with internal order transaction records to verify funnel accuracy.",
      "Maintained high-speed cached regional ranking weights queried during catalog retrieval.",
    ],
    architecture: {
      description:
        "Client browsers transmit non-blocking telemetry beacons to the analytics gateway. Events are buffered and processed by aggregation workers that calculate rolling Revenue-Per-Visitor (RPV) scores for each SKU and country cohort. Normalized weights are cached in Redis and applied as dynamic boost parameters in Solr search queries.",
      layers: [
        {
          name: "Telemetry Ingestion Layer",
          items: ["Global Browsers (220+ Countries)", "Non-blocking Beacon Ingestion Endpoint"],
        },
        {
          name: "Stream Processing & Aggregation",
          items: ["Event Buffer Queue", "Rolling RPV Computation Workers"],
        },
        {
          name: "Regional Score Cache",
          items: ["Redis Geo-Score Store", "Normalized Country Weights"],
        },
        {
          name: "Search & Discovery Feedback",
          items: ["Apache Solr Dynamic Boost Query", "Localized Catalog Presentation"],
        },
      ],
      flow: [
        "Client browser transmits non-blocking telemetry beacon (SKU ID, country, event type).",
        "Analytics gateway validates payload and buffers event into processing queue.",
        "Worker processes events in rolling time-windows, reconciling traffic with order revenue.",
        "Worker calculates Country-RPV scores with baseline smoothing for low-sample items.",
        "Normalized regional scores are updated in Redis cache.",
        "When a user from Country X queries the catalog, the search service applies localized boost weights to product results.",
      ],
    },
    decisions: [
      {
        decision: "Asynchronous Telemetry Ingestion via Non-Blocking Endpoints",
        rationale:
          "Traditional synchronous analytics calls risk delaying page transitions or mobile navigation. Using asynchronous, non-blocking telemetry endpoints ensured data collection without impacting user Core Web Vitals.",
      },
      {
        decision: "Rolling Time-Window RPV Scoring with Decay",
        rationale:
          "Lifetime revenue metrics fail to reflect emerging viral trends or changing seasons. A rolling 7-day and 30-day window with exponential decay allowed rankings to adapt dynamically to current demand.",
      },
      {
        decision: "Dynamic Search Boost Injection vs Pre-Rendered Pages",
        rationale:
          "Applying regional RPV scores as dynamic boost weights during search query execution allowed a single shared index to serve personalized rankings across 220+ countries without multiplying static pages.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Analytics Recalculation Cadence",
        chosen: "Periodic rolling aggregation of regional scores.",
        alternative: "Instant stream recalculation on every click.",
        impact:
          "Significantly reduced database write pressure and cache churn, with a brief, acceptable window in reflecting immediate micro-trends.",
      },
      {
        aspect: "Client Telemetry Privacy",
        chosen: "Anonymized session identifiers without cross-site persistent tracking.",
        alternative: "Third-party cross-site tracking cookies.",
        impact:
          "Maintained full alignment with international privacy standards while retaining aggregate ranking efficacy.",
      },
    ],
    reliabilityAndSecurity:
      "Ingestion endpoints incorporate automated rate limiting and bot filtering to prevent artificial manipulation of product scores. Telemetry queues are isolated so analytics activity never affects primary checkout traffic.",
    results: [
      "Reported CV Result: Approximately ~20% overall conversion uplift attributed to localized RPV product ranking.",
      "Processed millions of browsing and purchase events without impacting checkout latency.",
      "Improved catalog relevance for international diaspora shoppers across major global markets.",
      "Provided leadership with clear country-level revenue-per-visitor insights.",
    ],
    lessonsLearned:
      "Aligning distributed product discovery with localized regional purchasing behavior creates direct, measurable business value.",
    technologies: [
      "Node.js",
      "Redis",
      "Apache Solr",
      "PostgreSQL",
      "Docker",
      "Google Analytics API",
      "Stream Processing",
    ],
  },
  {
    slug: "distributed-rate-limiter",
    title: "High-Throughput Distributed Rate Limiter with Redis Lua & gRPC",
    shortTitle: "Distributed Rate Limiter",
    category: "High Concurrency & Systems Engineering",
    role: "Author & Systems Engineer",
    company: "Personal Systems Engineering Project",
    headline: "Low-latency API protection benchmarked at 50,000+ req/sec with ~3ms P99 latency.",
    overview:
      "Engineered an ultra-low latency distributed rate limiting and API protection service using Python asyncio, gRPC, and atomic Redis Lua scripts. Designed to safeguard microservices against abusive traffic spikes and quota abuse under high-concurrency loads.",
    reportedScope: {
      projectType: "Independent Systems Benchmark Project",
      throughput: "50,000+ Requests / Second (Benchmark Test Result)",
      latency: "~3 ms P99 Latency (Load-Tested Under Concurrency)",
      protocols: "gRPC (HTTP/2 Multiplexing) + REST Gateway",
    },
    context:
      "Modern microservices require centralized rate limiting to protect downstream databases and third-party services. Naive distributed locks or multiple round-trip checks introduce network overhead and race conditions. This project evaluated single-round-trip atomic sliding-window rate limiting under simulated high-concurrency loads.",
    constraints: [
      "Sub-5ms decision latency to avoid adding overhead to upstream reverse proxies.",
      "Zero race conditions across concurrent multi-threaded worker nodes.",
      "Sliding-window accuracy rather than coarse fixed-window bursts.",
      "Graceful fail-open circuit breaking during cache degradation.",
    ],
    personalContribution: [
      "Designed and authored Python asyncio gRPC server handling concurrent connection multiplexing.",
      "Authored optimized Redis Lua scripts executing atomic sliding-window timestamp evaluations in a single round trip.",
      "Configured Protocol Buffer definitions (`.proto`) for strongly-typed client-server contracts.",
      "Dockerized the service with horizontal container scaling and connection pooling.",
      "Conducted rigorous load testing using `ghz` and `locust`, measuring P50, P90, and P99 latency percentiles.",
    ],
    architecture: {
      description:
        "The service operates as a high-performance sidecar or ingress middleware. Upstream reverse proxies (NGINX / Envoy) emit lightweight gRPC `CheckRateLimit` calls over HTTP/2. An atomic Redis Lua script manages a sliding-window sorted set of timestamps per client key, determining admissibility in a single round trip.",
      layers: [
        {
          name: "Ingress & Upstream Proxy",
          items: ["Upstream Ingress / Reverse Proxy", "gRPC CheckLimit Client (HTTP/2)"],
        },
        {
          name: "Limiter Service Cluster",
          items: ["Python Asyncio Workers", "Circuit Breaker Middleware"],
        },
        {
          name: "Atomic State Engine",
          items: ["Redis Cluster", "Atomic Lua Sliding-Window Script (EVALSHA)"],
        },
        {
          name: "Decision & Downstream Protection",
          items: ["Allow: Forward to Services", "Block: Return HTTP 429 Too Many Requests"],
        },
      ],
      flow: [
        "Upstream proxy makes gRPC CheckLimit(client_id, limit, window_seconds) over persistent connection.",
        "Asyncio worker executes pre-compiled Redis Lua script with client key.",
        "Lua script purges expired timestamps older than the sliding window threshold.",
        "Lua script evaluates active entry count: if below limit, appends current timestamp and refreshes TTL.",
        "Lua script returns atomic tuple: [allowed: boolean, remaining: int, reset_ms: int].",
        "Decision returns to upstream proxy: permitted requests proceed; excess requests receive HTTP 429.",
      ],
    },
    decisions: [
      {
        decision: "Atomic Redis Lua Scripting via `EVALSHA`",
        rationale:
          "Executing multiple Redis commands (purge, count, add, expire) across network hops introduces race conditions and multiplies network latency. Encapsulating logic inside a pre-compiled Lua script guarantees atomic execution in a single network round-trip.",
      },
      {
        decision: "Sliding-Window Sorted Set vs Fixed Window",
        rationale:
          "Fixed windows suffer 2x burst anomalies at window boundary edges. A sliding-window log guarantees exact rate limits over any sliding duration, eliminating boundary burst vulnerabilities.",
      },
      {
        decision: "gRPC over HTTP/2 vs REST JSON",
        rationale:
          "Binary Protobuf serialization eliminates JSON parsing overhead, and HTTP/2 connection multiplexing allows thousands of rate-check requests to share persistent connections.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Memory Usage in Redis",
        chosen: "Sorted set storing timestamp entries per request.",
        alternative: "Approximated sliding-window counter using two fixed counters.",
        impact:
          "Higher memory footprint per active key under heavy bursts, counteracted by immediate pruning and 60-second key expiration.",
      },
      {
        aspect: "Failure Strategy during Cache Outage",
        chosen: "Configurable fail-open circuit breaker.",
        alternative: "Strict fail-closed blocking all platform traffic.",
        impact:
          "Prevents an infrastructure cache interruption from taking down business-critical authentication or checkout pipelines.",
      },
    ],
    reliabilityAndSecurity:
      "Implements client IP hashing with salt for privacy. Incorporates an in-memory circuit breaker that automatically bypasses rate limiting (fail-open) if Redis response timeouts exceed thresholds.",
    results: [
      "Benchmark Test Result: Sustained 50,000+ requests/sec across containerized cluster nodes under load testing.",
      "Achieved ~3ms P99 latency and ~1.1ms P50 latency in containerized benchmark testing.",
      "Zero race condition overages observed during concurrent burst tests.",
      "Packaged with reproducible Docker Compose deployment configurations.",
    ],
    lessonsLearned:
      "When building distributed systems with low latency budgets, reducing network round trips through atomic server-side scripts (Lua) and binary protocols (gRPC) is significantly more effective than merely adding compute resources.",
    technologies: [
      "Python 3.11",
      "Asyncio",
      "gRPC / Protocol Buffers",
      "Redis",
      "Lua Scripting",
      "Docker",
      "Locust / ghz Load Testing",
    ],
  },
];
