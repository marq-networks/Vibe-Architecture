"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="mt-4 flex items-center justify-between px-4 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-techno tracking-widest text-sm">VIBE</span>
            <span className="font-techno tracking-widest text-sm opacity-80">ARCHITECTS</span>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm opacity-90">
            <Link href="#hero" className="font-semibold">Home</Link>
            <Link href="#pricing" className="hover:opacity-100 opacity-80">Pricing</Link>
            <Link href="#about" className="hover:opacity-100 opacity-80">About</Link>
          </nav>

          {/* Button */}
          <Link href="#contact" className="cta-btn group">
            <span>Contact Us</span>
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Bottom line graphic */}
        <div className="relative h-6 mt-3">
          <Image
            src="/navbar/bottomline.png"
            alt="Navbar underline"
            fill
            className="object-contain object-left"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </header>
  );
}