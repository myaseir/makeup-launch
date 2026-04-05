import React from 'react';

export default function ServicesPage() {
  const WHATSAPP_LINK = "https://wa.me/923175656799";

  // Rebranded categories for Makeup Launch
  const serviceCategories = [
    {
      category: "The Bridal Studio",
      tagline: "Bridal mastery focused on your most precious moments.",
      image: "https://images.unsplash.com/photo-1733937110329-7bfb323fc567?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        { name: "Traditional Barat", detail: "Majestic, high-definition bridal transformations." },
        { name: "Nikah & Engagement", detail: "Soft, luminous looks focused on natural glow." },
        { name: "Reception Glam", detail: "Contemporary, high-fashion artistry for the final walk." },
        { name: "Bridal Consultations", detail: "One-on-one sessions to map your perfect wedding look." }
      ]
    },
    {
      category: "Hair & Nail Art",
      tagline: "Couture styling and precision finishing.",
      image: "https://images.unsplash.com/photo-1549236177-f9b0031756eb?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        { name: "Luxury Nail Art", detail: "Acrylics, gel extensions, and bespoke hand-painted designs." },
        { name: "Couture Styling", detail: "From silk presses to intricate wedding updos." },
        { name: "Technical Colour", detail: "Expert balayage and corrective color treatments." },
        { name: "Manicure & Pedicure", detail: "Spiritual relaxation for hands and feet." }
      ]
    },
    {
      category: "The Spa Retreat",
      tagline: "A sanctuary for rejuvenation and skin health.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200",
      services: [
        { name: "Signature Facials", detail: "Deep cleansing and hydration for a bridal glow." },
        { name: "Hydra-Refinement", detail: "Advanced skin resurfacing and rejuvenation." },
        { name: "Body Relaxation", detail: "Therapeutic treatments to melt away wedding stress." },
        { name: "Glow Essentials", detail: "Meticulous grooming and skin prep services." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Header Section */}
      <section className="pt-32 pb-20 md:pt-56 md:pb-40 px-6 text-center max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-rose-900 text-[10px] md:text-xs tracking-[0.8em] font-bold uppercase mb-8 block">
            The Luxury Suite
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-zinc-900 mb-10 italic tracking-tighter leading-[0.8]">
            Our <br className="md:hidden" /><span className="text-rose-950 md:pl-16">Services.</span>
          </h1>
          <div className="w-16 h-px bg-zinc-200 mb-10"></div>
          <p className="text-zinc-500 font-light leading-relaxed text-base md:text-xl max-w-2xl mx-auto italic">
            "At Makeup Launch, we offer a curated selection of beauty rituals designed for the modern bride and the woman of style."
          </p>
        </div>
      </section>

      {/* 2. Alternating Editorial Layout */}
      <section className="py-20 md:py-32 px-4 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-40 md:gap-64">
          
          {serviceCategories.map((cat, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden bg-zinc-50 shadow-2xl group">
                  <img 
                    src={cat.image} 
                    alt={cat.category} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-rose-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <span className="text-zinc-300 text-6xl md:text-8xl font-serif mb-6 opacity-30">0{index + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-4 italic tracking-tight">
                  {cat.category}
                </h2>
                <p className="text-rose-900 text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold mb-12">
                  {cat.tagline}
                </p>
                
                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  {cat.services.map((item, idx) => (
                    <div key={idx} className="group border-b border-zinc-100 pb-8 hover:border-rose-900 transition-all duration-500">
                      <h3 className="text-lg font-serif text-zinc-900 mb-2 italic">
                        {item.name}
                      </h3>
                      <p className="text-zinc-500 font-light text-sm leading-loose">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <a 
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center text-zinc-900 text-[10px] tracking-[0.5em] uppercase font-bold group"
                  >
                    Inquire via WhatsApp
                    <span className="ml-6 h-px w-12 bg-rose-900 group-hover:w-24 transition-all duration-700"></span>
                  </a>
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </section>

      {/* 3. Footer Booking Section */}
      <section className="bg-zinc-950 py-32 md:py-48 px-6 text-center relative overflow-hidden">
         {/* Subtle background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif italic text-white/[0.03] pointer-events-none select-none">
            Glamour
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 italic tracking-tighter">
            Ready to Begin?
          </h2>
          <p className="text-zinc-400 font-light mb-12 text-sm md:text-lg tracking-widest uppercase opacity-70">
            Book your bridal date or a luxury session today.
          </p>
          
          <div className="flex flex-col items-center gap-12">
            <a 
              href={WHATSAPP_LINK}
              className="px-16 py-6 bg-white text-zinc-950 text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-rose-900 hover:text-white transition-all duration-500 shadow-2xl"
            >
              Reserve Your Appointment
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/50 text-[10px] tracking-[0.3em] uppercase font-bold pt-12 border-t border-white/10 w-full">
                <div className="flex flex-col gap-2">
                    <span className="text-rose-900">Direct Call</span>
                    <span className="text-white text-base font-medium tracking-normal">0317-5656799</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-rose-900">Inquiries</span>
                    <span className="text-white text-base font-medium tracking-normal">0315-1505838</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Software House Note */}
      <div className="py-12 text-center bg-zinc-950 border-t border-white/5">
        <p className="text-[9px] tracking-[0.5em] uppercase text-zinc-600">
          Digital Presence by <span className="text-white font-semibold">Glacia Labs</span>
        </p>
      </div>
      
    </main>
  );
}