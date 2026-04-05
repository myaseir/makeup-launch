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
  const isActive = (path: string) => pathname === path;

  const menuLinks = [
    { href: "/bridal", label: "The Bridal Edit" },
    { href: "/services", label: "Our Services" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Get in touch" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-[130] transition-all duration-700 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-zinc-100 shadow-sm" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-10">
            
            {/* Desktop Left */}
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

            {/* Central Logo */}
            <div className="flex-shrink-0 z-[140]">
              <Link 
                href="/" 
                onClick={closeMenu}
                className="text-xl md:text-3xl font-serif tracking-[-0.05em] text-zinc-900 transition-opacity hover:opacity-80 uppercase italic"
              >
                Makeup Launch
              </Link>
            </div>

            {/* Desktop Right */}
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

            {/* Mobile Toggle Button - The Cross Icon */}
            <div className="md:hidden flex items-center z-[140]">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-900 focus:outline-none p-2 relative"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                <div className="w-6 flex flex-col items-end gap-1.5">
                  <span className={`h-[1px] bg-zinc-900 transition-all duration-500 ease-in-out ${
                    isOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                  }`}></span>
                  <span className={`h-[1px] bg-zinc-900 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "w-4"
                  }`}></span>
                  <span className={`h-[1px] bg-zinc-900 transition-all duration-500 ease-in-out ${
                    isOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5"
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[120] md:hidden transition-all duration-700 ease-in-out bg-white ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="relative h-full flex flex-col items-center justify-center px-10">
          
          <div className="mb-12 flex flex-col items-center gap-4 transition-all duration-700 delay-100">
            <span className="text-rose-900/40 text-[9px] tracking-[0.5em] uppercase font-bold">Welcome</span>
            <div className="w-px h-10 bg-zinc-100"></div>
          </div>

          <nav className="flex flex-col gap-10 items-center">
            {menuLinks.map((item, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center"
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`, 
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)', 
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                <Link 
                  href={item.href} 
                  onClick={closeMenu} 
                  className={`text-2xl font-serif italic tracking-wide antialiased transition-all duration-500 ${
                    isActive(item.href) ? "text-rose-950 scale-110" : "text-zinc-400 font-light"
                  }`}
                >
                  {item.label}
                </Link>
                {/* Cute underline for active state */}
                <div className={`h-px bg-rose-900/30 transition-all duration-700 mt-1 ${isActive(item.href) ? "w-full" : "w-0"}`}></div>
              </div>
            ))}
          </nav>

          <div className={`mt-20 w-full max-w-[240px] transition-all duration-1000 delay-600 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href="https://wa.me/923175656799" 
              onClick={closeMenu}
              className="flex items-center justify-center w-full py-4 bg-zinc-950 text-white text-[10px] tracking-[0.4em] uppercase font-bold shadow-xl active:scale-95 transition-all"
            >
              Reserve My Date
            </a>
            <p className="mt-8 text-[8px] tracking-[0.3em] uppercase text-zinc-300 text-center">
              Bahria Town • Rawalpindi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}