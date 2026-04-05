import React from 'react';

export default function BridalPage() {
  // Curated bridal portfolio images for a luxury wedding aesthetic
  const portfolio = [
    {
      src: "https://images.unsplash.com/photo-1733937110329-7bfb323fc567?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Signature Glow",
      type: "Traditional Barat"
    },
    {
      src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      title: "Editorial Precision",
      type: "Nikah Elegance"
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      title: "Timeless Grace",
      type: "Reception Glam"
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
      title: "Modern Panache",
      type: "Engagement"
    },
    {
      src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
      title: "The Royal Finish",
      type: "Bridal Masterclass"
    },
    {
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
      title: "Classic Harmony",
      type: "Walima Look"
    },
  ];

  const WHATSAPP_LINK = "https://wa.me/923175656799";

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero / Editorial Header */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 text-center max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-rose-900 text-[10px] md:text-xs tracking-[0.8em] font-bold uppercase mb-8 animate-pulse">
            The Bridal Edit
          </span>
          <h1 className="text-5xl md:text-9xl font-serif text-zinc-900 mb-10 italic tracking-tighter leading-[0.9]">
            Defined by <br className="hidden md:block" /> 
            <span className="md:pl-20 text-rose-950">Artistry.</span>
          </h1>
          <div className="w-12 h-px bg-zinc-200 mb-10"></div>
          <p className="text-zinc-500 font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed italic">
            "Your wedding day is a masterpiece in the making. We specialize in creating a perfect harmony of tone and texture, ensuring you radiate confidence from the aisle to the stage."
          </p>
        </div>
      </section>

      {/* 2. Responsive Masonry Grid */}
      <section className="px-4 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolio.map((item, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group relative overflow-hidden bg-zinc-50 transition-all duration-700 hover:shadow-2xl"
            >
              <div className="relative aspect-auto overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-out group-hover:scale-110"
                />
                
                {/* Minimalist Mobile-Friendly Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                  <span className="text-rose-300 text-[9px] tracking-[0.4em] uppercase mb-2 font-bold">
                    {item.type}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-serif italic tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 3. Personalized Call to Action */}
        <div className="mt-32 md:mt-48 py-20 px-6 bg-zinc-50 text-center border-y border-zinc-100 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-6 italic tracking-tighter">Secure Your Date</h2>
            <p className="text-zinc-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-12 font-light">
              Limited availability for the 2026 wedding season
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto px-16 py-6 bg-zinc-900 text-white text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-rose-900 transition-all duration-500 shadow-2xl active:scale-95"
              >
                Book My Wedding
              </a>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-4">
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-zinc-400 uppercase mb-1">Direct Hotline</span>
                  <span className="text-sm font-bold text-zinc-900 tracking-wider">0317-5656799</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-zinc-400 uppercase mb-1">Studio Support</span>
                  <span className="text-sm font-bold text-zinc-900 tracking-wider">0315-1505838</span>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-zinc-200/30 pointer-events-none z-0 select-none">
            Bride
          </div>
        </div>
      </section>

      {/* 4. Elegant Footer Note */}
      <div className="pb-20 text-center">
        <p className="text-[9px] tracking-[0.5em] uppercase text-zinc-400 mb-2">
          Makeup Launch Luxury Collective
        </p>
        <p className="text-[10px] tracking-widest uppercase text-zinc-300">
          Curated by <span className="text-zinc-500 font-semibold">Glacia Labs</span>
        </p>
      </div>
    </main>
  );
}