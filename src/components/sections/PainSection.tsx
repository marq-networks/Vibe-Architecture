export default function PainSection() {
  return (
    <section
      className="relative h-[100vh] bg-center  flex items-center justify-center"
      id="pain"
      style={{ backgroundImage: "url(/painsection/bg.png)", backgroundSize: "cover" ,backgroundRepeat:"no-repeat"}}
    >
      {/* <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-[#4B2E83]/10 to-[#070C20]/40" /> */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-2 leading-none">
          <span
            className="font-hero text-transparent text-[56px] md:text-[92px] font-black tracking-tight"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
          >
            The
          </span>
          <br />
          <span
            className="font-hero text-transparent text-[56px] md:text-[92px] font-black tracking-tight"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
          >
            Pain
          </span>
        </div>
        <h2 className="font-hero text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          When AI Builds Break, It’s Not
          <br className="hidden sm:block" />
          The Tech — It’s The Process.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300">
          You deliver an AI app — then hear, “That’s not what I asked for.” Revisions mean lost hours and
          inconsistent results. Even the same prompt gives a different outcome each time.
        </p>
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
  );
}