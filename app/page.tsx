import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* 1. Philosophy Section: The "Makeup Launch" Statement */}
      <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-px h-16 bg-rose-900/30 mb-10"></div>
          <h4 className="text-rose-900 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-8">
            The Vision
          </h4>
          <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 mb-10 italic tracking-tighter leading-tight">
            Unveiling Radiance. <br/> 
            Mastering Elegance.
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto italic">
            "At Makeup Launch, we redefine beauty through a lens of sophistication. From bespoke makeup artistry to rejuvenating spa rituals, we provide a sanctuary where your individuality is celebrated and your glow is perfected."
          </p>
        </div>
      </section>

      {/* 2. Services: Editorial Alternating Layout */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32 md:space-y-48">
        
        {/* Category 01: Makeup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-zinc-300 text-5xl md:text-7xl font-serif mb-6 opacity-50">01</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic text-zinc-900">The Makeup Studio</h3>
            <p className="text-zinc-500 font-light leading-loose mb-8 text-base md:text-lg">
              Signature bridal transformations, high-fashion editorial looks, and personalized glam for every milestone. Experience professional artistry that lasts.
            </p>
            <ul className="grid grid-cols-1 gap-4 text-[11px] tracking-[0.3em] uppercase text-rose-900 font-semibold mb-10">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Luxe Bridal Glam
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Editorial & Fashion
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Party & Occasion Wear
              </li>
            </ul>
            <Link href="/portfolio" className="text-zinc-900 text-[10px] tracking-[0.4em] uppercase font-bold border-b border-zinc-900 pb-1 hover:text-rose-800 hover:border-rose-800 transition-all">
              View Artistry
            </Link>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden bg-zinc-100 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200" 
              alt="Makeup Launch Artistry" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
            />
          </div>
        </div>

        {/* Category 02: Nails & Hair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-zinc-100 shadow-2xl group">
            <img 
              src="https://plus.unsplash.com/premium_photo-1675107358035-fbd55fbfd92a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Nail and Hair Care" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-zinc-300 text-5xl md:text-7xl font-serif mb-6 opacity-50">02</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic text-zinc-900">Nails & Hair</h3>
            <p className="text-zinc-500 font-light leading-loose mb-8 text-base md:text-lg">
              Precision manicures and couture hair styling. We blend technical skill with creative flair to ensure you leave polished from head to toe.
            </p>
            <ul className="grid grid-cols-1 gap-4 text-[11px] tracking-[0.3em] uppercase text-rose-900 font-semibold mb-10">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Luxury Nail Art
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Couture Hair Styling
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Silk Press & Treatments
              </li>
            </ul>
          </div>
        </div>

        {/* Category 03: The Spa Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-zinc-300 text-5xl md:text-7xl font-serif mb-6 opacity-50">03</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic text-zinc-900">The Spa Retreat</h3>
            <p className="text-zinc-500 font-light leading-loose mb-8 text-base md:text-lg">
              A serene escape designed to refresh the body and mind. Our specialized spa treatments focus on rejuvenation and skin health.
            </p>
            <ul className="grid grid-cols-1 gap-4 text-[11px] tracking-[0.3em] uppercase text-rose-900 font-semibold mb-10">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Hydra-Facials
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Body Relaxation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Holistic Skin Care
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden bg-zinc-100 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200" 
              alt="Spa Services" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
            />
          </div>
        </div>

      </section>

      {/* 3. Global CTA with Contact Numbers */}
      <section className="bg-zinc-50 py-32 px-6 text-center border-t border-zinc-100">
        <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-6 italic">Begin Your Transformation</h2>
        <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-zinc-600 text-sm tracking-widest font-light">BOOKING HOTLINES:</p>
            <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:03175656799" className="text-rose-900 font-bold hover:text-zinc-900 transition-colors">0317-5656799</a>
                <a href="tel:03151505838" className="text-rose-900 font-bold hover:text-zinc-900 transition-colors">0315-1505838</a>
            </div>
        </div>
        <Link 
          href="https://wa.me/923175656799"
          className="inline-block px-14 py-5 bg-zinc-900 text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-rose-900 transition-all duration-500 shadow-2xl"
        >
          Book An Appointment
        </Link>
      </section>
    </main>
  );
}