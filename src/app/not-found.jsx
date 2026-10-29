import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
          <span>Error 404 • Resource Boundary Violation</span>
        </div>

        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Route Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          The requested path does not map to an active architectural service or documented case study.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-tealAccent text-navy-950 font-semibold text-xs hover:bg-tealAccent-light transition-all"
          >
            ← Return to System Overview
          </Link>
          <Link
            href="/#case-studies"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs hover:text-white transition-colors"
          >
            Explore Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}

