export const caseStudies = [
  {
    slug: "multi-tenant-iam",
    title: "Multi-Tenant SaaS Security and Hierarchical IAM",
    shortTitle: "Multi-Tenant IAM & Security",
    category: "Identity & Platform Security",
    role: "Platform Engineer / IAM Architecture",
    company: "Mocha Technologies",
    headline: "Zero-leakage multi-tenant access control across 20+ microservices and 50k+ enterprise tenants.",
    overview:
      "Engineered application-layer tenant isolation, hierarchical role-based access control (RBAC), and session security for a six-product B2B SaaS suite. Solved the operational challenge of allowing enterprise customers to define custom granular permissions without introducing database schema fragmentation or tenant crosstalk.",
    reportedScope: {
      tenants: "50,000+ Enterprise Tenants",
      users: "1,000,000+ Active Users",
      suite: "6-Product Integrated SaaS Suite",
      services: "20+ Interconnected Microservices",
      tests: "200+ Cross-Service Integration Tests",
    },
    context:
      "As enterprise adoption expanded across financial services and healthcare clients, Mocha Technologies required SOC-2 and HIPAA-compliant data isolation. Individual tenant organizations required distinct organizational trees, department-level permission delegation, multi-factor authentication (MFA), and single-sign-on (SSO) through enterprise identity providers like Google Workspace and Microsoft Entra ID (Azure AD).",
    constraints: [
      "Zero shared-cache or database crosstalk across tenant boundaries in a pooled database model.",
      "Custom role definitions evaluate at runtime with sub-millisecond authorization overhead.",
      "Immediate session revocation across all distributed microservices upon suspicious device fingerprinting.",
      "Strict backward compatibility with legacy single-tenant API consumers.",
    ],
    personalContribution: [
      "Architected application-layer RBAC with row-level tenant filters injected into database query contexts.",
      "Implemented tenant-facing hierarchical role inheritance and custom permission matrix evaluators.",
      "Developed secure token lifecycle handling: signed short-lived JWTs paired with Redis-backed revocation lists.",
      "Integrated enterprise SSO (Google Workspace, Microsoft Entra ID) and TOTP/SMS multi-factor authentication.",
      "Engineered automated device lifecycle tracking that triggers session invalidation on fingerprint anomalies.",
      "Authored 200+ cross-service integration test suites validating tenant isolation boundaries against injection and IDOR attacks.",
    ],
    architecture: {
      description:
        "The architecture enforces authorization through a dual-tier Policy Enforcement Point (PEP) and Policy Decision Point (PDP) model. Incoming requests hit the API Gateway, which inspects JWT tokens, validates cryptographic signatures, and enriches downstream context with Tenant Context (Tenant ID, Role Set, Org Path). Database ORM interceptors dynamically append tenant scoping clauses to every query.",
      flow: [
        "Client Request (HTTPS / TLS 1.3 with Bearer JWT)",
        "API Gateway PEP verifies signature & checks Redis Session Revocation Blacklist",
        "Tenant Resolution Interceptor extracts Tenant UUID and Org Tree path",
        "PDP evaluates requested action against cached Redis hierarchical permission bitmaps",
        "Downstream Microservice receives authenticated Tenant Context header",
        "Data Access Layer Interceptor enforces row-level constraint (WHERE tenant_id = :tenant_id)",
        "Encrypted Audit Log captures user, tenant, action, and resource vector",
      ],
      diagram: `
+-----------------------------------------------------------------------------------+
|                            CLIENT / WEB / MOBILE BROWSER                          |
+-----------------------------------------------------------------------------------+
                                          |
                                          | HTTPS / Bearer Token
                                          v
+-----------------------------------------------------------------------------------+
|                        API GATEWAY & POLICY ENFORCEMENT                           |
|  - Token validation (Ed25519)         - Device fingerprint check                  |
|  - Redis revocation query (<1ms)      - Tenant ID extraction                      |
+-----------------------------------------------------------------------------------+
           |                                                      |
           | Authenticated Tenant Context                         | Token Revocation
           v                                                      v
+----------------------------------------+              +---------------------------+
|          MICROSERVICES MESH            |              |     REDIS CLUSTER         |
|  - Policy Decision Point (PDP)         |              |  - Active Session States  |
|  - Hierarchical Role Bitmaps           |              |  - Revoked Token JTI Set  |
|  - Tenant-scoped Service Interceptors  |              |  - Permission Bitmaps     |
+----------------------------------------+              +---------------------------+
                   |
                   | Contextual Query (Tenant Scoped)
                   v
+-----------------------------------------------------------------------------------+
|                     POOLED POSTGRESQL MULTI-TENANT STORAGE                         |
|  - Enforced Row-Level Isolation: SELECT ... WHERE tenant_id = $context.tenant_id  |
|  - Tenant-partitioned indexes for hot customer tables                             |
+-----------------------------------------------------------------------------------+
`,
    },
    decisions: [
      {
        decision: "Application-Layer Tenant Scoping vs Database-Per-Tenant",
        rationale:
          "Managing 50,000+ separate PostgreSQL databases would cause severe connection pool exhaustion and operational nightmare during schema migrations. Instead, pooled databases with row-level tenant identifiers enforced at the ORM/interceptor layer provided elastic scalability at a fraction of infrastructure cost.",
      },
      {
        decision: "Bitwise Permission Evaluation in Redis",
        rationale:
          "Rather than querying complex SQL permission joins on every API hit, permissions are compiled into bitmasks cached in Redis. Dynamic role evaluation executes in O(1) bitwise AND operations.",
      },
      {
        decision: "Short-Lived JWTs (15 min) with Redis Blacklisting",
        rationale:
          "Stateless JWTs provide high throughput for downstream microservices, but enterprise security requires instant kill switches. Pairing 15-minute access tokens with Redis revocation sets balances distributed verification with instant session termination.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Pooled Database Multi-Tenancy",
        chosen: "Shared database with ORM-enforced tenant filtering & partitioned indexes.",
        alternative: "Separate database or schema per tenant.",
        impact:
          "Drastically lowered RDS hosting costs and simplified deployments, but required rigorous automated regression testing (200+ tests) to guarantee zero leakage risk.",
      },
      {
        aspect: "Permission Cache Invalidation",
        chosen: "Event-driven Redis cache invalidation via pub/sub on role modification.",
        alternative: "Strict TTL expiration without pub/sub.",
        impact:
          "Permission changes take effect in milliseconds across all pods, with a minimal pub/sub overhead.",
      },
    ],
    reliabilityAndSecurity:
      "Zero-trust isolation is maintained by forbidding wildcards in SQL queries and rejecting any ORM query missing an explicit tenant context. Suspicious activity triggers an automated step-up challenge (MFA) and invalidates the session family across all active pods.",
    results: [
      "Reported Platform Scope: Supported 50k+ enterprise tenants and 1M+ active users across 6 SaaS products.",
      "Zero reported cross-tenant data leakage incidents during security audits.",
      "Sub-2ms authorization validation latency across internal microservice calls.",
      "200+ automated integration tests incorporated into the CI/CD deployment pipeline.",
    ],
    lessonsLearned:
      "Multi-tenancy cannot be treated as an afterthought or a frontend routing parameter. Security boundaries must be baked into the foundational query pipeline, token verification middleware, and automated integration harnesses.",
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
    shortTitle: "Subscription & Usage Billing",
    category: "Financial Infrastructure & Distributed Systems",
    role: "Backend & Systems Engineer",
    company: "Mocha Technologies (QuickBill)",
    headline: "Idempotent subscription lifecycle, real-time usage metering, and automated seat synchronization.",
    overview:
      "Designed and implemented the core billing reconciliation engine for QuickBill. Handled hybrid subscription models combining fixed monthly/annual seat-based licensing with dynamic, high-volume pay-per-use consumption metering.",
    reportedScope: {
      platform: "QuickBill Subscription Platform",
      features: "Hybrid Seat + Consumption Metering",
      lifecycle: "Automated Dunning & Proration Engine",
      resilience: "100% Idempotent Event Ingestion",
    },
    context:
      "Enterprise SaaS customers require flexible licensing: base team seats combined with per-gigabyte, per-API-call, or per-compute-hour billing. Inaccurate billing or out-of-order event delivery directly erodes customer trust and causes financial discrepancies.",
    constraints: [
      "Financial correctness: Zero double-billing under network retries, gateway drops, or worker crashes.",
      "High-throughput event ingestion without locking customer balance rows.",
      "Accurate second-by-second seat proration when team members are invited or removed mid-cycle.",
      "Resilient reconciliation with third-party payment gateways (Stripe / Razorpay).",
    ],
    personalContribution: [
      "Engineered the asynchronous usage metering pipeline processing consumption events with idempotency keys.",
      "Formulated mathematical seat proration logic calculating exact credit balances on mid-cycle additions and downgrades.",
      "Implemented a transactional outbox pattern to decouple event collection from billing ledger updates.",
      "Constructed automated webhook retry and dunning workers with exponential backoff and jitter.",
      "Created reconciliation jobs auditing third-party payment gateway state against the internal transaction ledger.",
    ],
    architecture: {
      description:
        "The billing pipeline decouples fast consumption ingestion from strict ledger calculation. Incoming usage events arrive via HTTP/gRPC, receive a deterministic SHA-256 idempotency key, and land in a durable queue. Worker pools aggregate usage into sliding billing windows and write immutable records to the accounting ledger.",
      flow: [
        "Product microservice emits usage event (tenant_id, metric, units, timestamp, event_id)",
        "API Gateway validates schema & checks Redis idempotency window (deduplicating retries)",
        "Durable message queue partitions events by tenant_id to preserve ordering",
        "Stream aggregator batches units into hourly consumption buckets",
        "Billing Worker performs mid-cycle seat proration computation",
        "Transactional Ledger records debit/credit entries in PostgreSQL with atomic locks",
        "Payment reconciliation worker synchronizes invoices with external gateways",
      ],
      diagram: `
+-----------------------------------------------------------------------------------+
|                        PRODUCT MICROSERVICES (EMITTERS)                           |
+-----------------------------------------------------------------------------------+
                                          |
                                          | POST /api/v1/usage/events (Idempotent UUID)
                                          v
+-----------------------------------------------------------------------------------+
|                        INGESTION GATEWAY & DEDUPLICATION                          |
|  - Redis SETNX idempotency check      - Schema & signature validation             |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                    DURABLE EVENT BROKER (TENANT PARTITIONED)                      |
|  - Partition Key: tenant_id           - Guaranteed in-order stream per tenant     |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                       BATCH AGGREGATOR & BILLING WORKERS                          |
|  - Time-bucketed accumulation         - Seat delta proration calculator           |
|  - Outbox pattern event publisher     - Circuit-breaker wrapped payment calls     |
+-----------------------------------------------------------------------------------+
           |                                                      |
           | Immutable Ledger Write                               | Synchronize
           v                                                      v
+----------------------------------------+              +---------------------------+
|      POSTGRESQL ACCOUNTING LEDGER      |              |   STRIPE / PAYMENT GW     |
|  - Double-entry debit/credit balance   |              |  - Invoices & Subscriptions|
|  - Optimistic locking on cycle close   |              |  - Webhook Delivery       |
+----------------------------------------+              +---------------------------+
`,
    },
    decisions: [
      {
        decision: "Append-Only Immutable Ledger Model",
        rationale:
          "Rather than updating a mutable 'account_balance' column, every billing action creates an immutable ledger row (debit/credit). Balances are computed deterministically, making audits and financial rollbacks foolproof.",
      },
      {
        decision: "Two-Phase Seat Proration Formulation",
        rationale:
          "Mid-cycle license seat changes compute unused seconds of the prior seat tier and credit them against the remaining seconds of the new tier. This eliminated customer billing disputes caused by rounding errors.",
      },
      {
        decision: "Redis Idempotency Buffer with 7-Day TTL",
        rationale:
          "Network hiccups frequently cause client libraries to retry webhook postbacks. An atomic Redis key check ensures each event UID is processed exactly once, even during gateway replay attacks.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Batch Aggregation vs Real-Time DB Writes",
        chosen: "In-memory time-bucket aggregation before writing ledger entries.",
        alternative: "Write SQL transaction on every single usage event.",
        impact:
          "Eliminated row lock contention on hot tenant records, introducing a predictable 60-second aggregation latency.",
      },
      {
        aspect: "Webhook Failure Recovery",
        chosen: "Dead-letter queues (DLQ) paired with automated exponential dunning jobs.",
        alternative: "Immediate synchronous payment failure cancellation.",
        impact:
          "Provided a 72-hour grace period that recovered involuntary subscription churn without manual human intervention.",
      },
    ],
    reliabilityAndSecurity:
      "All monetary values are stored in integer cents to prevent floating-point inaccuracies. Critical billing operations run under database transactions with strict row locks (`FOR UPDATE`) to prevent race conditions during concurrent seat additions.",
    results: [
      "Eliminated duplicate billing reports across all high-frequency API consumption clients.",
      "Supported hybrid seat-plus-usage subscription plans across enterprise accounts.",
      "Achieved sub-10ms event ingestion acknowledgment latency at the gateway.",
      "Automated 100% of webhook failure retries with graceful customer notification flows.",
    ],
    lessonsLearned:
      "Never store currency as floating-point numbers, and never rely on third-party webhook delivery order. Building distributed financial systems requires designing for idempotency and immutable ledgers from day one.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Message Queues",
      "Stripe API",
      "Docker",
      "Transactional Outbox",
      "REST / gRPC",
    ],
  },
  {
    slug: "commerce-discovery",
    title: "High-Throughput Commerce Discovery with Apache Solr",
    shortTitle: "Dynamic Commerce Discovery",
    category: "Search & Distributed Query Optimization",
    role: "Senior Backend Engineer",
    company: "Mirraw",
    headline: "Dynamic landing pages, faceted search, and sub-100ms catalog discovery across 500k+ SKUs.",
    overview:
      "Architected the search and dynamic catalog discovery tier for Mirraw, serving international e-commerce traffic across 220+ countries. Replaced slow relational catalog queries with a high-performance Apache Solr distributed search cluster featuring dynamic landing pages and intelligent facet caching.",
    reportedScope: {
      catalog: "500,000+ Active SKUs",
      reach: "Traffic from 220+ Countries",
      speedImprovement: "~40% Faster Catalog Discovery (Reported CV Benchmark)",
      architecture: "Distributed Solr Cluster + CDN Edge",
    },
    context:
      "Mirraw operates a massive marketplace of traditional ethnic wear with deep variations (fabric, color, occasion, price, delivery ETA, regional seller). Standard SQL queries for faceted filtering suffered severe degradation under seasonal holiday traffic surges. The marketing team required on-the-fly dynamic landing pages based on search trends and campaign tags.",
    constraints: [
      "Sub-100ms query response time for complex multi-attribute faceted queries.",
      "Real-time inventory changes (out of stock, price updates) must reflect in search indexes without heavy full rebuilds.",
      "Edge caching must accommodate country-specific currencies and localized pricing rules.",
      "High availability during flash sales with 10x normal traffic spikes.",
    ],
    personalContribution: [
      "Architected the Apache Solr schema and index structure optimized for multi-value faceted navigation.",
      "Engineered automated dynamic landing page generation matching campaign URL slugs to complex Solr filter queries.",
      "Implemented Solr filter cache (`fq`) pre-warming and field value caching strategies.",
      "Designed asynchronous CDC (Change Data Capture) workers propagating catalog and stock deltas into Solr.",
      "Configured multi-tier edge CDN caching for static category carousels with stale-while-revalidate policies.",
    ],
    architecture: {
      description:
        "Traffic from 220+ countries arrives through global edge CDN nodes. Anonymous category listings hit CDN edge caches. Dynamic and personalized searches pass to the Node.js API tier, which queries an Apache Solr master-replica cluster. Solr executes faceted counts and product IDs, and the API tier inflates lightweight display representations from high-speed Redis replicas.",
      flow: [
        "Shopper visits dynamic campaign URL (e.g. /designer-silk-sarees?color=maroon&price_tier=premium)",
        "Edge CDN checks for warmed cache copy matching normalized query parameters",
        "On cache miss, request hits Node.js Backend Discovery Service",
        "Service translates attributes into Solr Filter Queries (fq) and DisMax relevance query",
        "Solr Cluster utilizes warmed filterCache and documentCache to evaluate matches in <25ms",
        "Faceted counts (available fabrics, size counts, price distributions) returned in single response",
        "Product metadata hydrated from local Redis cache; response rendered with lazy carousel hooks",
        "Edge CDN stores response with localized cache key for subsequent regional shoppers",
      ],
      diagram: `
+-----------------------------------------------------------------------------------+
|                     GLOBAL SHOPPERS (220+ COUNTRIES)                              |
+-----------------------------------------------------------------------------------+
                                          |
                                          | HTTPS / Regional Request
                                          v
+-----------------------------------------------------------------------------------+
|                        EDGE CDN (CLOUDFLARE / FASTLY)                             |
|  - Query normalization                - Stale-while-revalidate rules              |
|  - Geo-IP currency routing            - Category carousel edge cache              |
+-----------------------------------------------------------------------------------+
                                          | (Cache Miss / Filtered Query)
                                          v
+-----------------------------------------------------------------------------------+
|                        BACKEND DISCOVERY API CLUSTER                              |
|  - Solr Query DSL builder             - Facet & ranking orchestrator              |
|  - Redis metadata hydration           - Dynamic landing page resolver             |
+-----------------------------------------------------------------------------------+
           |                                                      |
           | Solr Search Query (fq + DisMax)                      | Hydrate Metadata (<1ms)
           v                                                      v
+----------------------------------------+              +---------------------------+
|          APACHE SOLR CLUSTER           |              |       REDIS REPLICA       |
|  - Document Cache & Filter Cache       |              |  - SKU metadata, images   |
|  - Dynamic Schema (500k+ SKUs)         |              |  - Localized pricing      |
|  - Master-Replica Sharded Index        |              |  - Real-time stock status |
+----------------------------------------+              +---------------------------+
                   ^
                   | Asynchronous Delta Sync (CDC)
+-----------------------------------------------------------------------------------+
|                      PRIMARY INVENTORY & CATALOG DATABASE                         |
+-----------------------------------------------------------------------------------+
`,
    },
    decisions: [
      {
        decision: "Filter Query (`fq`) Isolation from Scoring Query (`q`)",
        rationale:
          "In Solr, `fq` results are cached in memory as unranked bitsets independently of the relevance query `q`. Isolating filters (e.g., in_stock:true, category:sarees) meant 90%+ of filter bitsets were served directly from memory, drastically reducing CPU load.",
      },
      {
        decision: "Two-Tier Catalog Hydration (Solr for IDs, Redis for Presentation)",
        rationale:
          "Storing large JSON product blobs inside Solr bloats the index size and degrades search speed. We configured Solr to return only SKU IDs and facet counts, hydrating the full presentation payload in parallel from Redis in under 2ms.",
      },
      {
        decision: "Delta Indexing via Change Data Capture Worker Queues",
        rationale:
          "Instead of triggering costly full collection rebuilds, inventory events push SKU delta updates to an asynchronous worker queue that commits micro-batches to Solr every 15 seconds.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Search Index Consistency",
        chosen: "Near-real-time (NRT) soft commits every 15 seconds.",
        alternative: "Strict synchronous commit on every inventory update.",
        impact:
          "Avoided disk thrashing on Solr replicas during peak sale events, accepting a maximum 15-second window where newly sold-out items might appear in search before cart validation catches them.",
      },
      {
        aspect: "Faceted Count Cardinality",
        chosen: "Pre-computed top facets with dynamic pagination.",
        alternative: "Computing all 80+ dynamic attribute facet combinations on every hit.",
        impact:
          "Halved query computation time while preserving customer satisfaction for 99% of search queries.",
      },
    ],
    reliabilityAndSecurity:
      "Solr query parsers sanitize user search inputs to prevent Solr injection vulnerabilities. Dedicated search read-replicas ensure that intensive marketing campaigns and automated scrapers never impact transactional checkout operations.",
    results: [
      "Reported CV Benchmark: Approximately ~40% faster catalog discovery compared to legacy SQL queries.",
      "Sub-60ms P95 search latency across 500k+ SKUs under peak holiday load.",
      "Seamlessly powered marketing campaigns generating hundreds of dynamic landing pages without code deployments.",
      "Maintained 99.95%+ search uptime across high-concurrency festival sale periods.",
    ],
    lessonsLearned:
      "Relational databases are built for transactional integrity, not multi-dimensional discovery. Decoupling search into a dedicated inverted-index engine like Solr or Elasticsearch is essential for modern high-catalog e-commerce.",
    technologies: [
      "Apache Solr",
      "Node.js",
      "Redis",
      "PostgreSQL / MySQL",
      "Docker",
      "Cloudflare CDN",
      "Faceted Navigation",
      "DisMax Query Parser",
    ],
  },
  {
    slug: "composable-cart",
    title: "Composable Cart Architecture & Multi-Addon Inventory Validation",
    shortTitle: "Composable Cart & Addons",
    category: "Transaction Systems & Inventory Logic",
    role: "Backend Engineer",
    company: "Mirraw",
    headline: "Hierarchical LineItem → LineItemAddon domain model with atomic checkout inventory reservations.",
    overview:
      "Redesigned the shopping cart and checkout pipeline to support customizable e-commerce purchases. Built the composable LineItem to LineItemAddon model, enabling shoppers to attach custom blouse stitching, fall/edging services, matching accessories, and gift wrapping to individual items with dynamic price recalculation and per-addon inventory locks.",
    reportedScope: {
      platform: "Mirraw Core Checkout & Cart",
      domainModel: "LineItem → LineItemAddon Hierarchy",
      catalogImpact: "Zero SKU Duplication for 100k+ Custom Combinations",
      checkoutIntegrity: "Atomic Multi-Item Inventory Locks",
    },
    context:
      "Traditional e-commerce carts assume static products. In Indian ethnic wear, garments frequently require customization: unstitched fabric requires stitching services, custom measurements, matching petticoats, or express gift wrapping. Creating unique database SKUs for every permutation caused massive catalog explosion. The business needed composable addons attached directly to cart line items.",
    constraints: [
      "Prevent overselling: Addon items (e.g. limited matching jewelry or specific fabric) must be inventory-locked alongside the primary garment.",
      "Complex price formulas: Custom tailoring fees vary by measurement tier, fabric complexity, and currency conversion.",
      "Cart state modifications (e.g. quantity changes or removing an item) must cascade cleanly to all child addons.",
      "Zero checkout race conditions during flash sales when multiple shoppers claim the last item simultaneously.",
    ],
    personalContribution: [
      "Architected the normalized relational domain schema representing LineItem and child LineItemAddon entities.",
      "Engineered the cart pricing engine calculating tiered customization charges and applying regional tax rules.",
      "Implemented a two-phase atomic inventory reservation flow using Redis distributed locks and database transactions.",
      "Built validation logic reconciling garment readiness dates with addon processing lead times.",
      "Designed checkout failure recovery handlers releasing reserved addon inventory if payment is abandoned.",
    ],
    architecture: {
      description:
        "The composable cart model treats the cart as a composite state machine. A Cart contains multiple LineItems, and each LineItem maintains a collection of LineItemAddons (services, physical accessories, gift packaging). At checkout, an Inventory Coordinator acquires atomic Redis locks across both the parent SKU and all attached addon SKUs, validating stock before initiating payment.",
      flow: [
        "Shopper selects Saree SKU and configures Custom Stitching (+ measurements) & Matching Clutch (+ SKU-902)",
        "API calls POST /api/v1/cart/items with nested addon payload",
        "Cart Domain Validator checks addon compatibility against parent category rules",
        "Pricing Engine computes aggregate line item total: base price + customization fee + physical addon",
        "On Proceed to Checkout, Inventory Lock Coordinator attempts atomic reservation of parent & addon items",
        "If all items lock successfully, payment intent is created with a 15-minute reservation TTL",
        "On successful webhook, reservation converts to confirmed OrderLineItem records; on timeout, locks auto-release",
      ],
      diagram: `
+-----------------------------------------------------------------------------------+
|                             SHOPPING CART INSTANCE                                |
+-----------------------------------------------------------------------------------+
                                          |
                        +-----------------+-----------------+
                        |                                   |
                        v                                   v
+-----------------------------------+   +-----------------------------------+
|         LINE ITEM #1              |   |         LINE ITEM #2              |
|  - SKU: Saree-Silk-01             |   |  - SKU: Kurta-Men-04              |
|  - Quantity: 1                    |   |  - Quantity: 1                    |
|  - Base Price: $120.00            |   |  - Base Price: $65.00             |
+-----------------------------------+   +-----------------------------------+
        |                   |
        | Child Addon #1    | Child Addon #2
        v                   v
+-------------------+   +-------------------+
|  SERVICE ADDON    |   |  PHYSICAL ADDON   |
|  - Type: Stitching|   |  - SKU: Clutch-09 |
|  - Custom Specs   |   |  - Price: $25.00  |
|  - Fee: $35.00    |   |  - Stock Req: 1   |
+-------------------+   +-------------------+
        |                   |
        +---------+---------+
                  |
                  v (Atomic Reservation Request)
+-----------------------------------------------------------------------------------+
|                       INVENTORY COORDINATOR & LOCK MANAGER                        |
|  - Multi-key Redis lock: [lock:saree-01, lock:clutch-09]                          |
|  - Atomic Lua evaluation: Ensure (stock_saree >= 1) && (stock_clutch >= 1)        |
|  - Rollback if ANY component is out of stock                                      |
+-----------------------------------------------------------------------------------+
`,
    },
    decisions: [
      {
        decision: "Relational LineItemAddon Structure vs Flat JSON Column",
        rationale:
          "Storing addons as an untyped JSON blob inside cart records would prevent SQL-level inventory validation and foreign key constraints. A first-class `line_item_addons` table with explicit foreign keys to products and service definitions ensured relational integrity.",
      },
      {
        decision: "Multi-Key Atomic Lua Reservation Script",
        rationale:
          "Reserving parent items and child addons sequentially opens race conditions where the parent is reserved but an addon fails, leaving dangling locks. An atomic Redis Lua script checks and decrements all related inventory counters in a single atomic operation.",
      },
      {
        decision: "Cascade Lifecycle Hook on LineItem Mutations",
        rationale:
          "If a user changes parent item quantity from 1 to 2, service addons (custom stitching) and physical addons scale appropriately or prompt for per-unit measurements. Deleting a parent item cascades and cleans up child attachments automatically.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Inventory Lock Expiration",
        chosen: "15-minute temporary reservation TTL backed by Redis keys with expiry events.",
        alternative: "Hard database locking until order cancellation.",
        impact:
          "Guaranteed that abandoned checkout carts release scarce inventory back to the marketplace within 15 minutes without requiring manual administrative intervention.",
      },
      {
        aspect: "Pricing Calculation Overhead",
        chosen: "On-demand recalculation with cached tax tables.",
        alternative: "Pre-computed pricing tables.",
        impact:
          "Slightly increased CPU compute per cart view (sub-5ms), but ensured 100% pricing accuracy under fluctuating exchange rates and coupon applications.",
      },
    ],
    reliabilityAndSecurity:
      "All price calculations execute exclusively on the backend; client-submitted price fields are discarded. Database transactions use optimistic concurrency controls (`version` checks) to reject stale cart checkout attempts.",
    results: [
      "Supported hundreds of thousands of customized product combinations without creating redundant catalog SKUs.",
      "Eliminated inventory mismatch incidents between garments and matching accessories during peak sales.",
      "Maintained sub-15ms cart item mutation latency across high-traffic flash sales.",
      "Directly empowered the business to offer high-margin tailoring services globally.",
    ],
    lessonsLearned:
      "Customizable products require a domain model that treats services and physical items as composable entities. Ensuring atomic multi-resource inventory locking is the single most critical safeguard in e-commerce checkout architecture.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Redis Lua Scripting",
      "Docker",
      "Transactional Outbox",
      "E-Commerce Cart Architecture",
      "Distributed Locks",
    ],
  },
  {
    slug: "distributed-analytics",
    title: "Distributed Geographic RPV Analytics & Ranking Feedback Loop",
    shortTitle: "Distributed RPV Analytics",
    category: "Distributed Data & Analytics",
    role: "Analytics Systems Engineer",
    company: "Mirraw",
    headline: "Country/timeframe Revenue-Per-Visitor analytics driving localized product ranking and ~20% conversion uplift.",
    overview:
      "Built a distributed event analytics aggregation pipeline at Mirraw that processes shopper behavior across 220+ countries. Captured granular impressions, cart additions, and purchase transactions to compute localized Revenue-Per-Visitor (RPV) metrics, feeding real-time regional weighting back into search and catalog ranking algorithms.",
    reportedScope: {
      reach: "Shoppers Across 220+ Countries",
      conversionImpact: "~20% Conversion Uplift (Reported CV Result)",
      pipeline: "Real-time Telemetry Ingestion to Ranking Feedback Loop",
      metric: "Localized Country/Timeframe Revenue Per Visitor (RPV)",
    },
    context:
      "Global consumers have distinctly different purchasing powers, regional festival dates, and stylistic preferences. A product that converts exceptionally well in the United States or the UK may languish in domestic Indian markets or the Middle East. Static global product rankings depressed international conversion rates. Mirraw needed localized product scoring powered by real-time RPV analytics.",
    constraints: [
      "Telemetry ingestion must never introduce latency into the shopper's page render or checkout path.",
      "High volume: Billions of raw browsing events per month across global mobile and web users.",
      "Cold-start handling: New products with zero historical data must receive fair visibility without polluting top slots.",
      "Time decay: Historical purchase spikes (e.g. Diwali season) must gracefully decay as seasonal trends shift.",
    ],
    personalContribution: [
      "Engineered the asynchronous telemetry collection endpoint receiving batched beacon pings from client browsers.",
      "Implemented stream aggregation workers computing rolling 7-day, 14-day, and 30-day RPV scores grouped by country.",
      "Formulated the exponential time-decay ranking algorithm balancing immediate conversion with historical stability.",
      "Integrated Google Analytics signals with internal transactional data to reconcile tracking discrepancies.",
      "Constructed a high-speed Redis ranking cache queried by the search and recommendation services during catalog retrieval.",
    ],
    architecture: {
      description:
        "Browsers transmit lightweight beacon events to an analytics gateway. Events are buffered in memory and flushed to ingestion workers that compute rolling Revenue-Per-Visitor (RPV = Total Revenue / Unique Country Visitors) for each SKU and geographic cohort. Localized scores are published to a Redis sorted set queried by Solr search rankers as dynamic boost factors.",
      flow: [
        "User browser fires non-blocking Navigator.sendBeacon payload (event, sku_id, country, timestamp)",
        "Edge Analytics Gateway validates payload and publishes to event stream broker",
        "Stream Processing Workers consume events and aggregate metrics in sliding time windows",
        "Worker calculates Country-RPV score with Bayesian smoothing for low-sample items",
        "Scores are normalized (0.0 to 1.0) and written to Redis Geo-Score Hash Maps",
        "When Solr executes a search query for a shopper in Country X, it injects an additive boost query: bf=product_geo_rpv_score",
        "Products with higher regional resonance rise to top positions, maximizing revenue per impression",
      ],
      diagram: `
+-----------------------------------------------------------------------------------+
|                       CLIENT BROWSERS (220+ COUNTRIES)                            |
+-----------------------------------------------------------------------------------+
                                          |
                                          | Non-blocking Navigator.sendBeacon()
                                          v
+-----------------------------------------------------------------------------------+
|                        LIGHTWEIGHT ANALYTICS INGESTION GATEWAY                    |
|  - In-memory event buffer             - Geo-IP lookup                             |
|  - Fast 204 No Content response       - Rate limiting & bot filtering             |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                     DISTRIBUTED AGGREGATION & STREAM WORKERS                      |
|  - Rolling time-bucket window (7d/30d)- Revenue reconciliation with order DB      |
|  - Bayesian smoothing for cold items  - Exponential time-decay weighting          |
+-----------------------------------------------------------------------------------+
           |                                                      |
           | Write Historical Analytics                           | Push Localized Boost Weights
           v                                                      v
+----------------------------------------+              +---------------------------+
|      ANALYTICS DATASTORE (WAREHOUSE)   |              |       REDIS GEO SCORES    |
|  - Long-term reporting & trend analysis|              |  - Key: rpv:{country}:{sku}|
|  - Offline model training data         |              |  - O(1) lookup during     |
+----------------------------------------+              |    catalog generation     |
                                                        +---------------------------+
                                                                      |
                                                                      v
                                                        +---------------------------+
                                                        |  SOLR SEARCH / DISCOVERY  |
                                                        |  - Injects dynamic boost  |
                                                        |    weights by user region |
                                                        +---------------------------+
`,
    },
    decisions: [
      {
        decision: "Bayesian Smoothing for Cold-Start Products",
        rationale:
          "Raw RPV computation causes volatile ranking: a single visitor who purchases a $300 item gives an unvetted product a massive artificial RPV score of $300. Implementing Bayesian average smoothing against the category prior prevented erratic ranking spikes.",
      },
      {
        decision: "Asynchronous Browser Beacons via `sendBeacon`",
        rationale:
          "Traditional synchronous XHR analytics calls delay page navigation and mobile unload handlers. Using `navigator.sendBeacon` guaranteed event delivery without degrading user experience or Core Web Vitals.",
      },
      {
        decision: "Dynamic Search Boost Injection vs Static Pre-Rendered Pages",
        rationale:
          "Injecting localized RPV scores as a dynamic Solr boost parameter during query execution allowed a single shared index to serve customized rankings across all 220+ countries without duplicating catalog pages.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Analytics Processing Cadence",
        chosen: "Hourly rolling batch recalculation of regional weights.",
        alternative: "Instant per-click stream updates.",
        impact:
          "Drastically reduced database write load and Redis churn, with an acceptable 1-hour delay in reflecting emerging viral product trends.",
      },
      {
        aspect: "Client Telemetry Privacy",
        chosen: "Anonymized session identifiers stripped of personal identifiable information.",
        alternative: "Tracking cross-site persistent cookies.",
        impact:
          "Full compliance with GDPR and international data privacy regulations while retaining statistical ranking efficacy.",
      },
    ],
    reliabilityAndSecurity:
      "Ingestion endpoints feature automated rate limiting and bot filtering to prevent malicious actors from artificially inflating product visibility. All telemetry queues are decoupled from the primary database to guarantee that analytics traffic never compromises transaction processing.",
    results: [
      "Reported CV Result: Approximately ~20% overall conversion uplift attributed to localized RPV product ranking.",
      "Processed tens of millions of monthly events without impacting transactional latency.",
      "Eliminated regional conversion dead zones for high-value international diaspora markets.",
      "Provided engineering and marketing leadership with verified country-level revenue metrics.",
    ],
    lessonsLearned:
      "Raw traffic volume is a vanity metric; revenue per visitor (RPV) is an architectural reality. Tailoring distributed discovery to regional purchasing habits creates direct, measurable business value.",
    technologies: [
      "Node.js",
      "Redis",
      "Apache Solr",
      "PostgreSQL",
      "Docker",
      "Google Analytics API",
      "Bayesian Statistics",
      "Stream Processing",
    ],
  },
  {
    slug: "distributed-rate-limiter",
    title: "High-Throughput Distributed Rate Limiter with Redis Lua & gRPC",
    shortTitle: "Distributed Rate Limiter",
    category: "High Concurrency & Resilience",
    role: "Systems Architect & Author",
    company: "Personal Systems Engineering Project",
    headline: "Low-latency API protection benchmarked at 50k+ req/sec with ~3ms P99 latency.",
    overview:
      "Engineered an ultra-low latency distributed rate limiting and API protection service using Python asyncio, gRPC, and atomic Redis Lua scripts. Designed to safeguard microservices against abusive traffic spikes, DDoS attempts, and API quota abuse in high-concurrency environments.",
    reportedScope: {
      projectType: "Personal Systems Engineering & Benchmark Project",
      throughput: "50,000+ Requests / Second (Benchmark Test Result)",
      latency: "~3 ms P99 Latency (Load-Tested Under Concurrency)",
      protocols: "gRPC (HTTP/2 Multiplexing) + REST Gateway",
    },
    context:
      "Modern microservices architectures require centralized rate limiting to protect downstream databases and third-party payment gateways. Naive client-side counters or distributed locks suffer severe race conditions and network round-trip overhead. This project was built to test the extreme limits of single-round-trip atomic sliding-window limiting under simulated flash-crowd conditions.",
    constraints: [
      "Sub-5ms P99 decision latency to avoid adding overhead to upstream reverse proxies.",
      "Strict zero race conditions across concurrent multi-threaded worker nodes.",
      "Sliding window accuracy rather than simplistic fixed-window bursts.",
      "Graceful fail-open / fail-closed configurable circuit breakers during Redis cluster degradation.",
    ],
    personalContribution: [
      "Designed and authored the Python asyncio gRPC server handling concurrent connection multiplexing.",
      "Authored optimized Redis Lua scripts executing atomic sliding-window timestamp evaluations in a single round trip.",
      "Configured protocol buffer definitions (`.proto`) for strongly-typed client-server contracts.",
      "Dockerized the architecture with horizontal pod scaling and local connection pooling.",
      "Conducted rigorous load testing using `ghz` and `locust`, measuring P50, P90, and P99 latency percentiles.",
    ],
    architecture: {
      description:
        "The service operates as a high-performance sidecar or ingress middleware. Upstream reverse proxies (NGINX / Envoy) emit lightweight gRPC `CheckRateLimit` calls over HTTP/2. The service executes an atomic Lua script on a Redis cluster, which maintains a sorted set of timestamps per client key, purging expired entries and deciding admissibility in O(log(N)) time.",
      flow: [
        "Upstream proxy or microservice makes gRPC CheckLimit(client_id, limit, window_seconds)",
        "Asyncio worker receives request over persistent HTTP/2 connection",
        "Worker executes pre-loaded Redis Lua script with client key SHA-256",
        "Lua script removes timestamps older than (current_time - window_seconds)",
        "Lua script counts remaining elements: if count < limit, adds current timestamp and sets TTL",
        "Lua script returns atomic tuple: [allowed: boolean, remaining: int, reset_ms: int]",
        "gRPC response delivered to caller; proxy permits or returns HTTP 429 Too Many Requests",
      ],
      diagram: `
+-----------------------------------------------------------------------------------+
|                        UPSTREAM API GATEWAY / REVERSE PROXY                       |
|                             (ENVOY / NGINX / INGRESS)                             |
+-----------------------------------------------------------------------------------+
                                          |
                                          | gRPC CheckRateLimit() over HTTP/2
                                          v
+-----------------------------------------------------------------------------------+
|                     DISTRIBUTED RATE LIMITER SERVICE PODS                         |
|  - Python Asyncio non-blocking loop   - Pre-compiled Protobuf stubs               |
|  - Thread-safe Redis connection pool  - Configurable Fail-Open Circuit Breaker    |
+-----------------------------------------------------------------------------------+
                                          |
                                          | Single Round-Trip EVALSHA
                                          v
+-----------------------------------------------------------------------------------+
|                        REDIS CLUSTER (ATOMIC LUA ENGINE)                          |
|  - Sorted Set (ZSET) per client key:  Scores = Timestamps (microsecond)           |
|  - ZREMRANGEBYSCORE: Purge expired entries outside sliding window                 |
|  - ZCARD: Count active events in current window                                   |
|  - ZADD: Conditionally append if below quota                                      |
|  - EXPIRE: Refresh sliding key TTL                                                |
+-----------------------------------------------------------------------------------+
                                          |
                                          | Atomic [Allowed, Remaining, ResetTime]
                                          v
+-----------------------------------------------------------------------------------+
|                     DECISION RETURNED TO UPSTREAM PROXY                           |
|  - Allow: Forward request to downstream microservices                             |
|  - Block: Return HTTP 429 Too Many Requests + Retry-After headers                 |
+-----------------------------------------------------------------------------------+
`,
    },
    decisions: [
      {
        decision: "Sliding-Window Log in Redis ZSET vs Token Bucket",
        rationale:
          "Fixed windows suffer 2x burst anomalies at boundary edges. A sliding-window log implemented via Redis Sorted Sets guarantees mathematically exact rate limits over any sliding duration, completely eliminating boundary burst exploits.",
      },
      {
        decision: "Atomic Lua Script Execution via `EVALSHA`",
        rationale:
          "Executing multiple Redis commands (ZREMRANGE, ZCARD, ZADD, EXPIRE) across network hops creates race conditions and multiplies network latency 4x. Encapsulating logic inside a pre-compiled Lua script guarantees atomic execution on the Redis thread in a single round-trip.",
      },
      {
        decision: "gRPC over HTTP/2 vs REST JSON",
        rationale:
          "Binary Protobuf serialization eliminates JSON parse overhead, and HTTP/2 connection multiplexing allows thousands of rate-check requests to reuse a single TCP connection without socket exhaustion.",
      },
    ],
    tradeoffs: [
      {
        aspect: "Memory Consumption in Redis",
        chosen: "Sorted set storing timestamp floats per request.",
        alternative: "Approximate sliding-window counter using two fixed windows.",
        impact:
          "Higher memory footprint per active key under heavy bursts, counteracted by aggressive ZREMRANGE purging and 60-second key expiration.",
      },
      {
        aspect: "Failure Strategy under Redis Outage",
        chosen: "Configurable fail-open with local in-memory fallback.",
        alternative: "Strict fail-closed blocking all platform traffic.",
        impact:
          "Prevents an infrastructure cache outage from taking down business-critical checkout and user authentication pipelines.",
      },
    ],
    reliabilityAndSecurity:
      "Implements client IP hashing with salt to protect client privacy. Incorporates an in-memory circuit breaker that automatically bypasses rate limiting (fail-open) if Redis response timeouts exceed 20ms over a 5-second interval.",
    results: [
      "Benchmark Test Result: Sustained 50,000+ requests/sec across containerized cluster nodes under load testing.",
      "Achieved ~3ms P99 latency and ~1.1ms P50 latency in local containerized benchmarks.",
      "Zero race condition overages observed during multi-threaded concurrent burst tests.",
      "Packaged with reproducible Docker Compose and Kubernetes deployment manifests.",
    ],
    lessonsLearned:
      "When designing distributed systems with sub-5ms latency budgets, reducing network round trips through atomic server-side scripts (Lua) and binary protocols (gRPC) is overwhelmingly more effective than simply adding more CPU cores.",
    technologies: [
      "Python 3.11",
      "Asyncio",
      "gRPC / Protocol Buffers",
      "Redis",
      "Lua Scripting",
      "Docker",
      "Locust / ghz Load Testing",
      "Linux Systems",
    ],
  },
];
