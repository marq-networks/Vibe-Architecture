"use client";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="max-w-7xl mx-auto  px-6">
        {/* Top row */}
        <div className="mt-4 flex items-center justify-between px-4 py-3">
          {/* Brand */}
          <div className="flex items-center">
            <Image
              src="/navbar/logo.png"
              alt="Vibe Architects"
              width={220}
              height={28}
              priority
            />
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-lg opacity-90">
            <Link href="#hero" className="font-semibold">Home</Link>
            <Link href="#pricing" className="hover:opacity-100 opacity-80">Pricing</Link>
            <Link href="#about" className="hover:opacity-100 opacity-80">About</Link>
          </nav>

          {/* Button */}
          <CTAButton href="#contact">Contact Us</CTAButton>
        </div>

        {/* Bottom line graphic */}
        <div className="relative mt-1 mb-5 w-full">
          <img
            src="/navbar/bottomline.png"
            alt="Navbar underline"
            className="object-contain w-full"
          />
        </div>
      </div>
    </header>
  );
}