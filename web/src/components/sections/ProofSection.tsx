import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function ProofSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="proof"
      style={{ backgroundImage: "url(/proof/bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      

      <div className="  mx-auto pl-8 grid items-center gap-10 md:grid-cols-2">
        {/* Left copy block */}
        <div className=" z-10">
           <div className="">
         <span
              className="font-display text-transparent text-[56px] md:text-[92px] font-black tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
            >
            PROOF <span className="text-white/20">& CREDIBILITY</span>
          </span>
        </div>
          <h2 className="font-display text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.15]">
            How We Rebuilt A Full
            <br className="hidden sm:block" />
            AI App In 48 Hours
          </h2>
          <div className="mt-5 space-y-3 text-sm text-zinc-300 max-w-xl">
            <p>
              We delivered a complete AI workflow app — and the VP said, “This isn’t what I asked for.” Instead of starting from scratch,
              we ran the Vibe Architect framework through our AI agent. It rebuilt the same app: same logic, same flow, same performance.
              Only the colors changed.
            </p>
            <p className="font-medium text-white/90">That’s reproducible AI.</p>
          </div>
          <div className="mt-8 flex justify-start">
            <CTAButton href="#blueprint">Start Architecting Today</CTAButton>
          </div>
        </div>

        {/* Right laptop image */}
        <div className="relative z-10">
          <Image
            src="/proof/Macbook Air (2022).png"
            alt="Macbook with dashboard screenshot"
            width={900}
            height={520}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}