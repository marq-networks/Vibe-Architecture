import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function ProofSection() {
  return (
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
  );
}