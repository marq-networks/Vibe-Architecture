import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="relative">
        {/* Hero */}
        <section
          className="relative py-20 pt-32 overflow-hidden bg-top bg-no-repeat min-h-[720px]"
          id="hero"
          style={{ backgroundImage: "url(/hero/bg.png)", backgroundSize: "contain", backgroundColor: "#070C20" }}
        >
          {/* Navbar sits inside hero so they share the same background */}
          <Navbar />
          {/* Soft gradient to match reference and keep text readable */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-[#4B2E83]/20 to-[#070C20]/60" />
          <div className="relative h-[100vh] z-10 max-w-7xl mx-auto px-6 text-center py-20">
            <h1 className="mx-auto max-w-4xl font-display text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Take Control Of Your
              <br className="hidden sm:block" />
              AI Builds
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Vibe Architect captures every decision — every prompt, stack, and safeguard — so when your project pivots, you can rebuild the exact same app in hours, not weeks.  No chaos. No drift. Just reliable, repeatable creation.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href="#contact">Start Architecting Today</CTAButton>
            </div>
          </div>
        </section>

        {/* Pain */}
        <section
          className="relative min-h-[720px] bg-center bg-no-repeat flex items-center justify-center"
          id="pain"
          style={{ backgroundImage: "url(/painsection/bg.png)", backgroundSize: "cover" }}
        >
          {/* Soft overlay to keep text readable over background */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-[#4B2E83]/10 to-[#070C20]/40" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mx-auto mb-6">The Pain</p>
            <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
              When AI Builds Break, It’s Not
              <br className="hidden sm:block" />
              The Tech — It’s The Process.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300">
              You deliver an AI app — then hear, “That’s not what I asked for.” Revisions mean lost hours and
              inconsistent results. Even the same prompt gives a different outcome each time.
            </p>
            {/* Decorative arrow circle */}
            <div className="mt-8 flex justify-center">
              <div className="h-14 w-14 rounded-full bg-[#A78BFA] shadow-[0_0_24px_rgba(139,92,246,0.45)] flex items-center justify-center">
                <span className="text-white text-xl">↓</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-zinc-400">
              That’s why we built Vibe Architect — to turn chaos into clarity.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="relative py-20" id="solution">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase mx-auto mb-4">The Solution</p>
            <h2 className="font-display text-3xl md:text-4xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">A Framework That Makes AI Reproducible</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { t: 'Blueprints', d: 'Requirements → Specs' },
                { t: 'Orchestration', d: 'Reliable flows' },
                { t: 'Data & Prompts', d: 'Versioned assets' },
                { t: 'Testing & Observability', d: 'Confident releases' },
                { t: 'Ops', d: 'Lifecycle & maintain' },
              ].map((c) => (
                <div key={c.t} className="p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="font-display text-lg">{c.t}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="#blueprint">Get The Framework</CTAButton>
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
                { t: 'Practitioners & Agencies', d: 'Deliver client work reliably.' },
                { t: 'Educators & Trainers', d: 'Teach the real process.' },
                { t: 'Product Teams & Innovators', d: 'Ship fast without breaking.' },
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
                <CTAButton href="#blueprint">Read The Breakdown</CTAButton>
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
              <CTAButton href="#pricing">Start Free</CTAButton>
              <CTAButton href="#pricing">Become A Founding Architect</CTAButton>
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
                <CTAButton href="#">Join For Free</CTAButton>
                <CTAButton href="#">Upgrade To Founding</CTAButton>
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
