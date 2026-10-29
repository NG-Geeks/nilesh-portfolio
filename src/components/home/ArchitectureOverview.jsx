'use client';

export default function ArchitectureOverview() {
  const metrics = [
    {
      value: "50,000+",
      label: "Enterprise Tenants",
      detail: "Reported platform scope across Mocha Technologies 6-product B2B SaaS suite.",
      tag: "Multi-Tenancy",
    },
    {
      value: "500,000+",
      label: "E-Commerce SKUs",
      detail: "Apache Solr faceted discovery across 220+ countries at Mirraw with ~40% faster catalog search.",
      tag: "Search Scale",
    },
    {
      value: "50,000+ rps",
      label: "Rate Limiter Benchmark",
      detail: "Tested concurrency benchmark with ~3ms P99 latency via Python asyncio & Redis Lua.",
      tag: "Benchmark Result",
    },
    {
      value: "200+",
      label: "Cross-Service Tests",
      detail: "Automated integration test harness validating tenant isolation and security boundaries.",
      tag: "Verification",
    },
  ];

  return (
    <section id="about" className="py-12 border-y border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider font-medium">
                    {item.tag}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-1.5">
                  {item.label}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-800/50">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
