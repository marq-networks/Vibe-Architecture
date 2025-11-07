import CTAButton from "@/components/CTAButton";

export default function PricingSection() {
  const bullets = [
    'Blueprint templates & checklists',
    'Process guides and best practices',
    'Testing & observability patterns',
    'Community support and workshops',
  ];

  return (
    <section className="relative py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.35)]">
          <h3 className="font-display text-2xl bg-gradient-to-r from-primary-300 via-primary-500 to-accent bg-clip-text text-transparent">Start Free — Become A Founding Architect</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-zinc-300">
            {bullets.map((b) => (
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
  );
}