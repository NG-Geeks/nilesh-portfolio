export const engineeringPrinciples = [
  {
    number: "01",
    title: "Security & Isolation by Default",
    tagline: "Never trust external parameters; enforce boundaries at the query layer.",
    description:
      "In multi-tenant SaaS, tenant isolation must never rely on frontend discretion. Boundaries are enforced at the database interceptor layer, paired with cryptographically verified short-lived tokens and Redis-backed instant revocation capabilities.",
    points: [
      "Row-level query filtering injected automatically via ORM/database interceptors",
      "Bitwise hierarchical permission matrices evaluated in sub-millisecond memory lookups",
      "Device fingerprinting and automated step-up challenges on behavioral anomalies",
    ],
  },
  {
    number: "02",
    title: "Idempotency & Financial Consistency",
    tagline: "Network calls will fail and retry; operations must produce deterministic state.",
    description:
      "Financial and subscription systems must tolerate arbitrary network replays and out-of-order deliveries. We treat state changes as immutable double-entry ledger rows protected by Redis idempotency locks and transactional outbox queues.",
    points: [
      "Atomic deduplication buffers with rolling TTL windows",
      "Immutable append-only ledger entries rather than mutable balance mutations",
      "Deterministic proration math computed in integer cents to avoid floating-point loss",
    ],
  },
  {
    number: "03",
    title: "Performance as a Function of Architecture",
    tagline: "Algorithmic efficiency and reduced round trips beat brute-force hardware.",
    description:
      "High throughput is not achieved by throwing CPU at slow queries, but by decomposing read paths from write paths. Decoupling search into inverted indexes (Solr), caching unranked filter bitsets, and using atomic Redis Lua scripts enables 50k+ rps with sub-5ms latency.",
    points: [
      "Solr filterCache pre-warming for instant faceted catalog exploration",
      "Single-round-trip atomic Lua scripts eliminating distributed locking races",
      "Two-tier data hydration: search engine returns IDs; Redis hydrators fill presentation models",
    ],
  },
  {
    number: "04",
    title: "Observability & Fault Containment",
    tagline: "Design systems that fail predictably, degrade gracefully, and recover autonomously.",
    description:
      "A failure in one microservice or third-party payment gateway must never cascade into a catastrophic platform outage. We implement configurable circuit breakers, dead-letter queues with exponential backoff, and fail-open telemetry buffers.",
    points: [
      "In-memory circuit breakers with automated half-open health checks",
      "Dead-letter queues (DLQ) with jittered exponential retries for billing events",
      "Decoupled telemetry ingestion ensuring analytics traffic never blocks checkouts",
    ],
  },
];

