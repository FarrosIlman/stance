import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  ChevronDown,
  Sparkles,
  ExternalLink,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- KONFIGURASI LINK ---
const EXTERNAL_LINKS = {
  shopee: "https://shopee.co.id/stance.id",
  tiktok: "https://www.tiktok.com/@stance.id",
  instagram: "https://instagram.com/stance.idn",
  whatsapp: "https://wa.me/6285866038102",
  linktree: "/linktree",
};

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-[#2D2D2D]" : "text-white";

  // Fungsi Smooth Scroll
  const scrollToId = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-colors duration-500 ${textColor}`}>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}><Menu size={24} /></button>
          
          <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold cursor-pointer">
            <a onClick={() => scrollToId("#collection")} className="hover:text-[#C5A059] transition-colors">Collection</a>
            <a onClick={() => scrollToId("#about")} className="hover:text-[#C5A059] transition-colors">About</a>
            <a href={EXTERNAL_LINKS.linktree} className="hover:text-[#C5A059] transition-colors">Store</a>
          </div>

          <div className="flex flex-col items-center">
            <a href="/" className="text-xl md:text-2xl font-serif tracking-[0.4em] uppercase font-light">Stance<span className="text-[#C5A059]">.id</span></a>
          </div>

          <div className="flex items-center space-x-6">
            <a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href={EXTERNAL_LINKS.linktree} className={`text-[9px] px-6 py-2.5 uppercase tracking-widest font-bold transition-all hidden sm:block border ${isScrolled ? "bg-[#2D2D2D] text-white border-[#2D2D2D]" : "bg-white/10 backdrop-blur-md text-white border-white/40"} hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white`}>Order Now</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Animasi */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "-100%" }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: "-100%" }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col text-[#2D2D2D]"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif tracking-widest uppercase text-lg">Stance.id</span>
              <button onClick={() => setMobileMenuOpen(false)}><X size={28} /></button>
            </div>
            <div className="flex flex-col space-y-8 text-2xl font-serif uppercase tracking-widest">
              <button onClick={() => scrollToId("#collection")} className="text-left">Collection</button>
              <button onClick={() => scrollToId("#about")} className="text-left">About</button>
              <a href={EXTERNAL_LINKS.linktree}>Order Hub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  // Fungsi Smooth Scroll untuk tombol Explore
  const scrollToCatalog = (e) => {
    e.preventDefault();
    const element = document.querySelector("#collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2D2D2D]">
      <motion.img 
        initial={{ scale: 1.2, opacity: 0 }} 
        animate={{ scale: 1, opacity: 0.6 }} 
        transition={{ duration: 2 }} 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover grayscale" 
        alt="Fashion Stance.id" 
      />
      <div className="relative z-10 text-center text-white px-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }} 
          className="text-[10px] uppercase tracking-[0.8em] mb-8 block font-bold"
        >
          Dress with Stance. Define your future.
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }} 
          className="text-5xl md:text-8xl font-serif font-light mb-12 tracking-tight leading-tight uppercase tracking-[0.1em]"
        >
          Modern & <br /> <span className="italic text-[#C5A059]">Classy</span>
        </motion.h1>

        {/* Animasi Tombol Explore Catalog yang diperbarui */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a 
            href="#collection"
            onClick={scrollToCatalog}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#C5A059",
              color: "#FFFFFF",
              boxShadow: "0px 10px 30px rgba(197, 160, 89, 0.3)"
            }} 
            whileTap={{ scale: 0.95 }} 
            className="bg-white text-[#2D2D2D] px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 shadow-xl inline-block"
          >
            Explore Catalog
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

const AboutSection = () => (
  <motion.section 
    id="about" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }} 
    variants={fadeInUp}
    className="py-24 bg-[#FBFBF9] border-y border-zinc-100 px-6"
  >
    <article className="max-w-4xl mx-auto text-center">
      <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto mb-10 opacity-50" />
      <h2 className="text-[11px] uppercase tracking-[0.6em] text-[#C5A059] font-bold mb-12">The Stance Identity</h2>
      <p className="text-lg md:text-xl font-serif leading-[2.2] text-[#2D2D2D] text-justify md:text-center italic">
        "Stance.id adalah destinasi fashion wanita kekinian yang menghadirkan koleksi dengan desain <span className="text-[#C5A059] font-medium uppercase tracking-widest px-2">Modern, Elegan, dan Rapi</span> sebagai solusi cerdas OOTD kuliah hingga kerja."
      </p>
    </article>
  </motion.section>
);

const CollectionGrid = () => {
  const products = [
    { name: "Luna Stripe", price: "Rp 189.000", tag: "Kemeja Stripe", url: "https://i.pinimg.com/1200x/e2/fc/8e/e2fc8e17972c200e8edba889ae2deb6a.jpg" },
    { name: "Etta Pants", price: "Rp 215.000", tag: "Celana Highwaist", url: "https://i.pinimg.com/1200x/5c/a8/ff/5ca8ff9ef07d79e51bc27e1f6e11c4c3.jpg" },
    { name: "Minimalist Shirt", price: "Rp 175.000", tag: "Blouse Minimalis", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjv7_6JEwKGRxjDC5VaA3CWZw6UDHKp63ag&s" },
  ];

  return (
    <section id="collection" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.header initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block mb-4">Curated Catalog</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2D2D2D]">Essential Pieces</h2>
          </div>
          <a href={EXTERNAL_LINKS.linktree} className="text-[10px] uppercase tracking-widest font-bold border-b border-zinc-200 pb-1 hover:border-[#C5A059] transition-all flex items-center gap-2">View Catalog <ArrowUpRight size={14} /></a>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:px-12">
          {products.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.2 }}
              className="group mx-auto w-full max-w-[320px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm mb-6 shadow-sm">
                <img src={p.url} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-4 left-4"><span className="bg-white/90 backdrop-blur-md text-[#A8883B] text-[8px] px-3 py-1 font-bold tracking-[0.2em] shadow-sm uppercase">{p.tag}</span></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-6 gap-3">
                  <motion.a whileHover={{ scale: 1.05 }} href={EXTERNAL_LINKS.linktree} className="bg-white text-[#2D2D2D] w-full py-3 text-[9px] uppercase tracking-widest font-bold text-center shadow-xl">Check on Store</motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} href={EXTERNAL_LINKS.whatsapp} target="_blank" className="bg-[#C5A059] text-white w-full py-3 text-[9px] uppercase tracking-widest font-bold text-center shadow-xl">Order via WA</motion.a>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[12px] uppercase tracking-[0.2em] mb-2 font-bold text-[#2D2D2D]">{p.name}</h3>
                <p className="text-[10px] text-[#C5A059] tracking-widest font-medium">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BannerCTA = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-32 bg-[#2D2D2D] text-white text-center px-6">
    <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-[#C5A059]">Ready to Upgrade Your Style?</h2>
    <p className="text-[10px] uppercase tracking-[0.6em] mb-12 opacity-60 font-bold">DAPATKAN SILUET SEMPURNA HANYA DI STANCE.ID</p>
    <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={EXTERNAL_LINKS.linktree} className="inline-block bg-[#C5A059] text-white px-16 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-[#2D2D2D] transition-all shadow-lg">GO TO STORE</motion.a>
  </motion.section>
);

const Footer = () => (
  <footer className="bg-white pt-20 pb-12 px-8 md:px-12 border-t border-zinc-100">
    <div className="max-w-7xl mx-auto text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 mb-24">
        <div className="space-y-8">
          <div className="text-2xl font-serif tracking-[0.4em] uppercase text-[#C5A059]">STANCE<span className="text-[#2D2D2D]">.ID</span></div>
          <p className="text-[13px] text-zinc-500 leading-[1.8] max-w-xs">Definisikan gaya profesional Anda bersama Stance.id sekarang!</p>
          <div className="flex space-x-6">
            <a href={EXTERNAL_LINKS.instagram} target="_blank" className="hover:text-[#C5A059] transition-colors"><Instagram size={22} /></a>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2D2D2D]">SHOPPING HUB</h4>
          <nav className="flex flex-col space-y-4 text-[11px] text-zinc-400 uppercase tracking-widest font-bold">
            <a href={EXTERNAL_LINKS.shopee} target="_blank" className="hover:text-[#C5A059] flex items-center gap-2">SHOPEE STORE <ExternalLink size={12}/></a>
            <a href={EXTERNAL_LINKS.linktree} className="hover:text-[#C5A059] flex items-center gap-2">OFFICIAL LINKTREE <ExternalLink size={12}/></a>
          </nav>
        </div>
        <div className="space-y-8">
          <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2D2D2D]">CONTACT US</h4>
          <address className="not-italic text-[11px] text-zinc-400 font-bold tracking-widest uppercase space-y-4">
             <p className="normal-case tracking-normal text-zinc-500 font-sans">Jl. Karya Bakti, Medono, Kota Pekalongan, Jawa Tengah</p>
             <a href={EXTERNAL_LINKS.whatsapp} target="_blank" className="hover:text-[#C5A059]">ADMIN WHATSAPP</a>
          </address>
        </div>
      </div>
      <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-zinc-400 font-bold uppercase tracking-[0.5em]">
        <p>&copy; 2026 STANCE.ID — MODERN WOMEN'S WEAR</p>
        <div className="flex space-x-12"><span>OFFICIAL STORE</span><span>VERIFIED MERCHANT</span></div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] selection:bg-[#C5A059]/10 selection:text-[#A8883B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        :root { --font-serif: 'Cormorant Garamond', serif; --font-sans: 'Inter', sans-serif; }
        body { font-family: var(--font-sans); color: #2D2D2D; scroll-behavior: smooth; overflow-x: hidden; }
        .font-serif { font-family: var(--font-serif); }
      `}</style>
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <CollectionGrid />
        <BannerCTA />
        <div className="py-20 overflow-hidden bg-white">
          <div className="flex whitespace-nowrap text-7xl md:text-9xl font-serif uppercase tracking-[0.5em] font-bold pointer-events-none">
            <motion.div className="text-[#C5A059]/7" animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
              Modern Elegan Rapi Classy Modern Elegan Rapi Classy Modern Elegan Rapi Classy
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}