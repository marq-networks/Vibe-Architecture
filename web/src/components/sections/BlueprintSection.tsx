import CTAButton from "@/components/CTAButton";

export default function BlueprintSection() {
  return (
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
  );
}