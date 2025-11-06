import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      <main className="relative">
        {/* Hero */}
        <section className="relative py-20 pt-32" id="hero">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mx-auto mb-6">Vibe / Architects</p>
            <h1 className="mx-auto max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">
              Take Control Of Your AI Builds
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              When AI apps break, it’s rarely the model. It’s the process.
              Ship reproducible builds with a blueprint-first framework.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-400 transition-colors" href="#blueprint">Get The Blueprint</a>
              <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 hover:bg-white/10 transition-colors" href="#proof">See It In Action</a>
            </div>
          </div>
        </section>

        {/* Pain */}
        <section className="relative py-20" id="pain">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mb-4">The Pain</p>
                <h2 className="font-display text-3xl md:text-4xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">When AI Builds Break</h2>
                <p className="mt-3 text-zinc-300">
                  Mismatched specs, brittle orchestration, and missing observability cause chaos.
                  We turn it into a repeatable, testable process so your stack works under pressure.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Spec Drift','Glue Code','Opaque Failures','Prod Panic'].map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="p-10 text-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.35)]">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-tr from-primary-500 to-accent animate-float shadow-glow" />
                  <p className="text-sm text-zinc-400">Process chaos → predictable flow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="relative py-20" id="solution">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mx-auto mb-4">The Solution</p>
            <h2 className="font-display text-3xl md:text-4xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">A Framework That Makes AI Reproducible</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                {t:'Blueprints',d:'Requirements → Specs'},
                {t:'Orchestration',d:'Reliable flows'},
                {t:'Data & Prompts',d:'Versioned assets'},
                {t:'Testing & Observability',d:'Confident releases'},
                {t:'Ops',d:'Lifecycle & maintain'},
              ].map((c) => (
                <div key={c.t} className="p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="font-display text-lg">{c.t}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-400 transition-colors" href="#blueprint">Get The Framework</a>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative py-20" id="use-cases">
          <div className="max-w-7xl mx-auto px-6">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mb-4">Use Cases</p>
            <h2 className="font-display text-3xl md:text-4xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">Who It’s For</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {t:'Practitioners & Agencies',d:'Deliver client work reliably.'},
                {t:'Educators & Trainers',d:'Teach the real process.'},
                {t:'Product Teams & Innovators',d:'Ship fast without breaking.'},
              ].map((c) => (
                <div key={c.t} className="p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="font-display text-lg">{c.t}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof & Credibility */}
        <section className="relative py-20" id="proof">
          <div className="max-w-7xl mx-auto px-6 grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mb-4">Proof & Credibility</p>
              <h2 className="font-display text-3xl md:text-4xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">We Rebuilt A Full AI App In 48 Hours</h2>
              <p className="mt-3 text-zinc-300">Using the blueprint framework, we shipped a production-grade rebuild with traceable quality, tests, and observability baked in.</p>
              <div className="mt-6">
                <a className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-400 transition-colors" href="#blueprint">Read The Breakdown</a>
              </div>
            </div>
            <div className="p-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.35)]">
              <Image src="https://dummyimage.com/900x520/141026/ffffff&text=Dashboard+Screenshot" alt="Dashboard screenshot" width={900} height={520} className="rounded-xl" />
            </div>
          </div>
        </section>

        {/* Emotional Anchor */}
        <section className="relative py-20" id="blueprint">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mx-auto mb-4">Emotional Anchor</p>
            <h2 className="font-display text-3xl md:text-4xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">Get Your Blueprint</h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-300">Stop winging it. Start building with clarity and confidence.</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-400 transition-colors" href="#pricing">Start Free</a>
              <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 hover:bg-white/10 transition-colors" href="#pricing">Become A Founding Architect</a>
            </div>
          </div>
        </section>

        {/* Pricing / Offer */}
        <section className="relative py-20" id="pricing">
          <div className="max-w-7xl mx-auto px-6">
            <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.35)]">
              <h3 className="font-display text-2xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">Start Free — Become A Founding Architect</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-zinc-300">
                {[
                  'Blueprint templates & checklists',
                  'Process guides and best practices',
                  'Testing & observability patterns',
                  'Community support and workshops',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent"></span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-400 transition-colors" href="#">Join For Free</a>
                <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 hover:bg-white/10 transition-colors" href="#">Upgrade To Founding</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-zinc-400">Join The Movement</p>
            <p className="mt-2 text-xs text-zinc-500">Powered by Vibe Architects</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
