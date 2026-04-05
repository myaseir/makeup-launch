"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Added : string type here
  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-700 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-zinc-100 shadow-sm" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-10">
          
          {/* 1. Desktop Left Navigation */}
          <div className="hidden md:flex gap-10 items-center flex-1">
            <Link 
              href="/bridal" 
              className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
                isActive("/bridal") ? "font-bold text-zinc-900" : "font-semibold text-zinc-500 hover:text-zinc-900"
              }`}
            >
              The Bridal Edit
            </Link>
            <Link 
              href="/services" 
              className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
                isActive("/services") ? "font-bold text-zinc-900" : "font-semibold text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Services
            </Link>
          </div>

          {/* 2. Central Logo */}
          <div className="flex-shrink-0 z-50">
            <Link 
              href="/" 
              onClick={closeMenu}
              className="text-2xl md:text-3xl font-serif tracking-[-0.05em] text-zinc-900 transition-opacity hover:opacity-80 uppercase italic"
            >
              Makeup Launch
            </Link>
          </div>

          {/* 3. Desktop Right Navigation */}
          <div className="hidden md:flex gap-10 items-center justify-end flex-1">
            <Link 
              href="/about" 
              className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
                isActive("/about") ? "font-bold text-zinc-900" : "font-semibold text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Our Story
            </Link>
            <Link 
              href="https://wa.me/923175656799" 
              className="px-8 py-3 bg-zinc-900 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-rose-950 transition-all duration-500 shadow-lg"
            >
              Book My Date
            </Link>
          </div>

          {/* 4. Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 focus:outline-none p-2 relative z-[110]"
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-[1px] bg-zinc-900 transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                <span className={`h-[1px] bg-zinc-900 transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}></span>
                <span className={`h-[1px] bg-zinc-900 transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[105] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

        <nav className="relative z-10 flex flex-col items-center gap-10 text-center">
          <div className={`transition-all duration-700 delay-100 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Link href="/" onClick={closeMenu} className={`text-[10px] tracking-[0.5em] uppercase font-bold ${isActive("/") ? "text-zinc-900 underline underline-offset-8" : "text-rose-900"}`}>
              Welcome
            </Link>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Link href="/bridal" onClick={closeMenu} className={`text-4xl tracking-tighter font-serif italic transition-colors ${isActive("/bridal") ? "text-zinc-950 font-bold" : "text-zinc-500"}`}>
              The Bridal Edit
            </Link>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Link href="/portfolio" onClick={closeMenu} className={`text-4xl tracking-tighter font-serif italic transition-colors ${isActive("/portfolio") ? "text-zinc-950 font-bold" : "text-zinc-500"}`}>
              Wedding Gallery
            </Link>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Link href="/services" onClick={closeMenu} className={`text-4xl tracking-tighter font-serif italic transition-colors ${isActive("/services") ? "text-zinc-950 font-bold" : "text-zinc-500"}`}>
              The Studio
            </Link>
          </div>

          <div className={`transition-all duration-700 delay-500 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
            <a 
              href="https://wa.me/923175656799" 
              onClick={closeMenu}
              className="mt-8 px-14 py-5 bg-rose-950 text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-zinc-900 transition-all shadow-2xl active:scale-95"
            >
              Book My Wedding
            </a>
          </div>
        </nav>
        
        <div className={`absolute bottom-12 flex flex-col items-center gap-4 transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>
          <div className="h-[1px] w-12 bg-rose-900/20"></div>
          <span className="text-[10px] tracking-[0.4em] text-zinc-400 uppercase font-light">
            Rawalpindi • Bridal Mastery • Est 2020
          </span>
        </div>
      </div>
    </nav>
  );
}