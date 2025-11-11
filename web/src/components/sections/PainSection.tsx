export default function PainSection() {
  return (
    <section
      className="relative bg-center py-12 sm:py-16 md:py-20 "
      id="pain"
      style={{ backgroundImage: "url(/painsection/bg.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      {/* <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-[#4B2E83]/10 to-[#070C20]/40" /> */}
      <div className="relative min-h-[100vh] gap-6 z-10 max-w-7xl flex flex-col justify-center items-center mx-auto px-6 text-center">
        <div className="mb-2 gap-2">
          <span
            className="font-hero text-transparent text-[56px] md:text-[90px] lg:text-[130px] xl:text-[150px] font-black tracking-tight"
          
             style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
          >
            The
          </span>

          <span
            className="ml-4 font-hero text-white/20 text-[56px] md:text-[90px] lg:text-[130px] xl:text-[150px] font-black tracking-tight"
          >
            Pain
          </span>
        </div>
        <h2 className="font-hero text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          When AI Builds Break, It’s Not
          <br className="hidden sm:block" />
          The Tech — It’s The Process.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-300">
          You deliver an AI app — then hear, “That’s not what I asked for.” Revisions mean lost hours and
          inconsistent results. Even the same prompt gives a different outcome each time.
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="h-14 w-14 rounded-full bg-[#A78BFA] shadow-[0_0_24px_rgba(139,92,246,0.45)] flex items-center justify-center">
            <span className="text-white text-xl">↓</span>
          </div>
        </div>
        <p className="mt-4 text-lg text-zinc-400">
          That’s why we built Vibe Architect — to turn chaos into clarity.
        </p>
      </div>
    </section>
  );
}