"use client";

import { ALL_TOOLS } from "@/data/tools";
import { Search, Filter, ExternalLink } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Fuse from "fuse.js";

// Inline ToolCard component
function ToolCard({ tool }: { tool: any }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-b from-slate-900/30 to-slate-900/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-gradient-to-b hover:from-cyan-500/5 hover:to-slate-900/70 hover:shadow-2xl hover:shadow-cyan-500/20 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
    >
      {/* Pricing badge */}
      <span className="mb-4 inline-block rounded-full bg-slate-800/60 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-400/40 backdrop-blur-sm group-hover:bg-cyan-500/20">
        {tool.pricing}
      </span>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-white line-clamp-1 group-hover:text-cyan-300">
        {tool.name}
      </h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm text-slate-400 line-clamp-2 group-hover:text-slate-300">
        {tool.bestFor}
      </p>

      {/* Category & CTA */}
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-400">
          {tool.category}
        </span>
        <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="text-xs text-slate-500">Visit</span>
          <ExternalLink className="h-3 w-3 text-cyan-400 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}

// Inline search hook
function useSearch(initialTools: any[]) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [freeOnly, setFreeOnly] = useState(false);
  const [results, setResults] = useState(initialTools);

  const updateResults = useCallback(() => {
    let filtered = initialTools;

    if (activeCategory) {
      filtered = filtered.filter((tool: any) => tool.category === activeCategory);
    }

    if (freeOnly) {
      filtered = filtered.filter((tool: any) => 
        tool.pricing === "Free" || tool.pricing === "Free tier"
      );
    }

    if (query.trim()) {
      const fuse = new Fuse(filtered, {
        keys: ["name", "bestFor"],
        threshold: 0.4,
      });
      filtered = fuse.search(query).map((result: any) => result.item);
    }

    setResults(filtered);
  }, [query, activeCategory, freeOnly, initialTools]);

  useEffect(() => {
    updateResults();
  }, [updateResults]);

  return {
    results,
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    freeOnly,
    setFreeOnly,
  };
}

export default function Home() {
  const { 
    results, 
    query, 
    setQuery, 
    activeCategory, 
    setActiveCategory, 
    freeOnly, 
    setFreeOnly 
  } = useSearch(ALL_TOOLS);

  const categories = Array.from(new Set(ALL_TOOLS.map((t: any) => t.category)));

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated BG */}
      <div className="pointer-events-none fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
            <Search className="h-4 w-4" />
            AI Tools Hub 2026
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">
            50+ AI tools for <span className="text-cyan-400">developers</span>
            <br />
            <span className="font-display">& creators</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Curated by Babamosie333 • Instant links, pricing & use cases
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative mx-auto w-full max-w-2xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              className="w-full rounded-2xl border border-slate-800/50 bg-slate-900/50 px-14 py-4 text-lg text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              placeholder="Search tools… (Next.js, thumbnails, Cursor…)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setFreeOnly(!freeOnly)}
            className={`flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${
              freeOnly
                ? "border-cyan-400 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10"
                : "border-slate-800/50 bg-slate-900/30 text-slate-400 hover:border-slate-700 hover:text-slate-300"
            }`}
          >
            <Filter className="h-4 w-4" />
            {freeOnly ? "Free only" : "All pricing"}
          </button>
        </div>

        {/* Category tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 overflow-x-auto pb-4 sm:gap-3">
          <button
            onClick={() => setActiveCategory(null)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              !activeCategory
                ? "bg-cyan-500/10 text-cyan-300 ring-2 ring-cyan-400/30 shadow-lg"
                : "bg-slate-900/30 text-slate-400 hover:bg-slate-900 hover:text-slate-300"
            }`}
          >
            All ({ALL_TOOLS.length})
          </button>
          {categories.map((cat) => {
            const count = ALL_TOOLS.filter((t: any) => t.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-cyan-500/10 text-cyan-300 ring-2 ring-cyan-400/30 shadow-lg"
                    : "bg-slate-900/30 text-slate-400 hover:bg-slate-900 hover:text-slate-300"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((tool: any) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {results.length === 0 && (
          <div className="mt-32 text-center">
            <Search className="mx-auto mb-8 h-20 w-20 text-slate-600 opacity-50" />
            <h3 className="mb-4 text-2xl font-semibold text-slate-300">
              No tools match your search
            </h3>
            <p className="text-slate-500">
              Try different keywords or clear the filters above.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 text-center text-sm text-slate-500">
        <div className="mx-auto mb-4 max-w-md flex-wrap items-center justify-center gap-2 text-xs sm:flex">
          <span>Made with ❤️ by</span>
          <a href="https://github.com/babamosie333" className="font-semibold text-cyan-300 hover:text-cyan-200">
            Babamosie333
          </a>
          <span>• BCA Developer, Kanpur, India</span>
        </div>
        <p>Updated Jan 2026 • Data from 50+ battle-tested AI tools</p>
      </footer>
    </main>
  );
}
