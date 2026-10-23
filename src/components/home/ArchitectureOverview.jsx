'use client';

export default function ArchitectureOverview() {
  const metrics = [
    {
      value: "50,000+",
      label: "Enterprise Tenants",
      detail: "Reported Mocha SaaS suite platform scope with zero cross-tenant leakage.",
      tag: "Multi-Tenancy",
    },
    {
      value: "500,000+",
      label: "E-Commerce SKUs",
      detail: "Indexed in Apache Solr with sub-100ms faceted discovery across 220+ countries.",
      tag: "Search Scale",
    },
    {
      value: "50k+ rps",
      label: "Rate Limiter Benchmark",
      detail: "Tested concurrency result with ~3ms P99 latency via Redis Lua & gRPC.",
      tag: "Throughput",
    },
    {
      value: "200+",
      label: "Cross-Service Tests",
      detail: "Automated integration suite validating security & tenant boundaries in CI/CD.",
      tag: "Verification",
    },
  ];

  return (
    <section className="py-16 border-y border-slate-800/80 bg-navy-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-tealAccent uppercase tracking-wider">
                  {item.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-tealAccent transition-colors" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono mb-1">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-2">
                {item.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
