import CTAButton from "@/components/CTAButton";

export default function PricingSection() {
  return (
    <section className="relativ" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        {/* Ghost heading */}
        <div className="text-center mb-8">
          <span
            className="font-display text-transparent text-[52px] md:text-[88px] font-black tracking-tight"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}
          >
            PRICING <span className="text-white/30">/ OFFER</span>
          </span>
        </div>

        {/* Start Free — Become A Founding Architect */}
        <div
          className="relative mx-auto  rounded-[28px] px-6 py-12 text-center min-h-[420px] sm:min-h-[480px] flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url(/pricing/pricingbg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="font-display text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold">
            Start Free — Become A Founding Architect
          </h3>
          <p className="mt-2 text-xs md:text-sm text-zinc-300">
            Be among the first 100 Founding Architects to experience the full framework.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[13px] text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/10 ring-1 ring-white/25">
                <span className="h-2 w-2 rounded-[2px] bg-[#A78BFA]"></span>
              </span>
              14-Day Free Trial
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/10 ring-1 ring-white/25">
                <span className="h-2 w-2 rounded-[2px] bg-[#A78BFA]"></span>
              </span>
              Bonus: "Rebuild-Ready AI" Live Workshop
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/10 ring-1 ring-white/25">
                <span className="h-2 w-2 rounded-[2px] bg-[#A78BFA]"></span>
              </span>
              Founding Member Pricing — $19/month (locked for life)
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <CTAButton href="#contact">Claim Founding Access</CTAButton>
          </div>
        </div>

        {/* Join The Movement */}
        <div
          className="relative mx-auto rounded-[28px] px-6 py-12 text-center min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url(/pricing/jointhemovementbg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="font-display text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold">
            Join The Movement
          </h3>
          <p className="mt-2 text-xs md:text-sm text-zinc-300">
            The next generation of AI builders won’t just prompt — they’ll architect.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="#contact">Sign Up Now</CTAButton>
          </div>
             <div className="mt-10 text-center">
          <p className="text-[11px] text-zinc-400">Powered by The Online Adjunct</p>
        </div>
        </div>

     
      </div>
    </section>
  );
}