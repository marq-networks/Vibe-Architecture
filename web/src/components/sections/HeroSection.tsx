import Navbar from "@/components/Navbar";
import CTAButton from "@/components/CTAButton";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 pt-32 overflow-hidden bg-top bg-no-repeat min-h-[720px]"
      id="hero"
      style={{ backgroundImage: "url(/hero/bg.png)", backgroundSize: "contain", backgroundColor: "#070C20" }}
    >
      <Navbar />
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
  );
}