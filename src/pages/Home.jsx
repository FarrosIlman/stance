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

// --- SEO & KONFIGURASI LINK ---
const SEO_DATA = {
  title: "Stance.id | Fashion Wanita Modern, Elegan & Rapi",
  description:
    "Destinasi fashion wanita muda dinamis. Temukan koleksi kemeja premium, blouse minimalis, dan celana highwaist untuk OOTD kuliah & baju kerja kantor. 100% Real Picture & Ready Stock.",
  keywords:
    "Stance.id, fashion wanita, OOTD kuliah, baju kerja kantor, kemeja wanita premium, blouse minimalis, celana highwaist",
  url: "https://stance.id",
};

const EXTERNAL_LINKS = {
  shopee: "https://shopee.co.id/stance.id",
  tiktok: "https://www.tiktok.com/@stance.id",
  instagram: "https://instagram.com/stance.idn",
  whatsapp: "https://wa.me/6285866038102",
  linktree: "/linktree", // Diarahkan ke rute internal page.jsx kamu
};

// --- SCHEMA MARKUP (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Stance.id",
  image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  description: SEO_DATA.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pekalongan",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  url: SEO_DATA.url,
};

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15c0 2.22-1.03 4.41-2.91 5.63-1.88 1.22-4.39 1.43-6.44.53-2.05-.9-3.53-3.03-3.61-5.28-.08-2.25 1.18-4.48 3.2-5.49 1.4-.7 3.01-.83 4.51-.4v4.04c-1.12-.34-2.34-.14-3.26.6-.92.74-1.35 1.95-1.15 3.09.2 1.14 1.12 2.11 2.22 2.45 1.1.34 2.37.07 3.22-.73.85-.8 1.13-2.04 1.13-3.18V.02h-.48z" />
  </svg>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-[#2D2D2D]" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}
        role="navigation"
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-colors duration-500 ${textColor}`}
        >
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold">
            <a
              href="#collection"
              className="hover:text-[#C5A059] transition-colors"
            >
              Collection
            </a>
            <a href="#about" className="hover:text-[#C5A059] transition-colors">
              About
            </a>
            <a
              href={EXTERNAL_LINKS.linktree}
              target=""
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              Store
            </a>
            <a
              href={EXTERNAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="text-xl md:text-2xl font-serif tracking-[0.4em] uppercase font-light"
            >
              Stance<span className="text-[#C5A059]">.id</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Stance.id"
              className="hover:text-[#C5A059] transition-colors"
            >
              <Instagram size={20} />
            </a>
            {/* Tombol Order Now mengarah ke internal Linktree */}
            <a
              href={EXTERNAL_LINKS.linktree}
              className={`text-[9px] px-6 py-2.5 uppercase tracking-widest font-bold transition-all hidden sm:block border ${isScrolled ? "bg-[#2D2D2D] text-white border-[#2D2D2D]" : "bg-white/10 backdrop-blur-md text-white border-white/40"} hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white`}
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col text-[#2D2D2D]"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif tracking-widest uppercase text-lg">
                Stance.id
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 text-2xl font-serif uppercase tracking-widest">
              <a href="#collection" onClick={() => setMobileMenuOpen(false)}>
                Collection
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a
                href={EXTERNAL_LINKS.linktree}
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Hub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => (
  <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2D2D2D]">
    <motion.img
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
      className="absolute inset-0 w-full h-full object-cover grayscale"
      alt="Fashion wanita modern dan berkelas dari Stance.id"
    />
    <div className="relative z-10 text-center text-white px-6">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-[10px] uppercase tracking-[0.8em] mb-8 block font-bold"
      >
        Dress with Stance. Define your future.
      </motion.span>
      <h1 className="text-5xl md:text-8xl font-serif font-light mb-12 tracking-tight leading-tight uppercase tracking-[0.1em]">
        Modern & <br /> <span className="italic text-[#C5A059]">Classy</span>
      </h1>
      <a
        href="#collection"
        className="bg-white text-[#2D2D2D] px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-white transition-all shadow-xl inline-block"
      >
        Explore Catalog
      </a>
    </div>
  </header>
);

const AboutSection = () => (
  <section
    id="about"
    className="py-24 bg-[#FBFBF9] border-y border-zinc-100 px-6"
  >
    <article className="max-w-4xl mx-auto text-center">
      <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto mb-10 opacity-50" />
      <h2 className="text-[11px] uppercase tracking-[0.6em] text-[#C5A059] font-bold mb-12">
        The Stance Identity
      </h2>
      <p className="text-lg md:text-xl font-serif leading-[2.2] text-[#2D2D2D] text-justify md:text-center italic">
        "Stance.id adalah destinasi fashion wanita kekinian bagi wanita muda
        dinamis yang menghadirkan koleksi atasan dan bawahan wanita dengan
        desain{" "}
        <span className="text-[#C5A059] font-medium uppercase tracking-widest px-2">
          Modern, Elegan, dan Rapi
        </span>{" "}
        sebagai solusi cerdas OOTD kuliah, baju kerja kantor, hingga gaya kasual
        yang classy. Dengan jaminan{" "}
        <span className="underline decoration-[#C5A059]/30 underline-offset-8 font-semibold">
          100% Real Picture
        </span>{" "}
        dan status{" "}
        <span className="underline decoration-[#C5A059]/30 underline-offset-8 font-semibold">
          Ready Stock
        </span>
        , kami memastikan setiap kemeja wanita premium, blouse minimalis, dan
        celana highwaist yang Anda terima memiliki potongan clean yang
        memberikan siluet sempurna serta kenyamanan maksimal sepanjang hari."
      </p>
    </article>
  </section>
);

const CollectionGrid = () => {
  const products = [
    {
      name: "Luna Stripe",
      price: "Rp 189.000",
      tag: "Kemeja Stripe",
      url: "https://i.pinimg.com/1200x/e2/fc/8e/e2fc8e17972c200e8edba889ae2deb6a.jpg",
    },
    {
      name: "Etta Pants",
      price: "Rp 215.000",
      tag: "Celana Highwaist",
      url: "https://i.pinimg.com/1200x/5c/a8/ff/5ca8ff9ef07d79e51bc27e1f6e11c4c3.jpg",
    },
    {
      name: "Minimalist Shirt",
      price: "Rp 175.000",
      tag: "Blouse Minimalis",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjv7_6JEwKGRxjDC5VaA3CWZw6UDHKp63ag&s",
    },
  ];

  return (
    <section id="collection" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block mb-4">
              Curated Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2D2D2D]">
              Essential Pieces
            </h2>
          </div>
          {/* Link Catalog diarahkan ke internal linktree */}
          <a
            href={EXTERNAL_LINKS.linktree}
            className="text-[10px] uppercase tracking-widest font-bold border-b border-zinc-200 pb-1 hover:border-[#C5A059] transition-all flex items-center gap-2"
          >
            View Catalog <ArrowUpRight size={14} />
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:px-12">
          {products.map((p, i) => (
            <motion.div key={i} className="group mx-auto w-full max-w-[320px]">
              {" "}
              {/* Ukuran card diperkecil */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm mb-6 shadow-sm">
                <img
                  src={p.url}
                  alt={`${p.tag} Stance.id - ${p.name}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#A8883B] text-[8px] px-3 py-1 font-bold tracking-[0.2em] shadow-sm uppercase">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-6 gap-3">
                  {/* Button Check on Store mengarah ke internal linktree */}
                  <a
                    href={EXTERNAL_LINKS.linktree}
                    className="bg-white text-[#2D2D2D] w-full py-3 text-[9px] uppercase tracking-widest font-bold text-center shadow-xl"
                  >
                    Check on Store
                  </a>
                  <a
                    href={EXTERNAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C5A059] text-white w-full py-3 text-[9px] uppercase tracking-widest font-bold text-center shadow-xl"
                  >
                    Order via WA
                  </a>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[12px] uppercase tracking-[0.2em] mb-2 font-bold text-[#2D2D2D]">
                  {p.name}
                </h3>
                <p className="text-[10px] text-[#C5A059] tracking-widest font-medium">
                  {p.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BannerCTA = () => (
  <section className="py-32 bg-[#2D2D2D] text-white text-center px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-[#C5A059]">
        Ready to Upgrade Your Style?
      </h2>
      <p className="text-[10px] uppercase tracking-[0.6em] mb-12 opacity-60 font-bold">
        DAPATKAN SILUET SEMPURNA HANYA DI STANCE.ID
      </p>
      {/* Button Go to Store mengarah ke internal linktree */}
      <a
        href={EXTERNAL_LINKS.linktree}
        className="inline-block bg-[#C5A059] text-white px-16 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-[#2D2D2D] transition-all shadow-lg"
      >
        GO TO STORE
      </a>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-20 pb-12 px-8 md:px-12 border-t border-zinc-100">
    <div className="max-w-7xl mx-auto text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 mb-24">
        <div className="space-y-8">
          <div className="text-2xl font-serif tracking-[0.4em] uppercase text-[#C5A059]">
            STANCE<span className="text-[#2D2D2D]">.ID</span>
          </div>
          <p className="text-[13px] text-zinc-500 leading-[1.8] max-w-xs font-sans">
            Definisikan gaya profesional dan modern Anda bersama Stance.id
            sekarang! Kualitas premium dengan potongan clean untuk siluet
            sempurna.
          </p>
          <div className="flex space-x-6 text-[#2D2D2D]">
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              className="hover:text-[#C5A059] transition-colors"
            >
              <Instagram size={22} strokeWidth={1.5} />
            </a>
            <a
              href={EXTERNAL_LINKS.tiktok}
              target="_blank"
              className="hover:text-[#C5A059] transition-colors"
            >
              <TikTokIcon />
            </a>
            <a
              href={EXTERNAL_LINKS.whatsapp}
              target="_blank"
              className="hover:text-[#C5A059] transition-colors"
            >
              <MessageCircle size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2D2D2D]">
            SHOPPING HUB
          </h4>
          <nav className="flex flex-col space-y-4 text-[11px] text-zinc-400 uppercase tracking-widest font-bold">
            <a
              href={EXTERNAL_LINKS.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] flex items-center gap-2"
            >
              SHOPEE STORE <ExternalLink size={12} />
            </a>
            <a
              href={EXTERNAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] flex items-center gap-2"
            >
              TIKTOK SHOP <ExternalLink size={12} />
            </a>
            <a
              href={EXTERNAL_LINKS.linktree}
              className="hover:text-[#C5A059] flex items-center gap-2"
            >
              OFFICIAL LINKTREE <ExternalLink size={12} />
            </a>
          </nav>
        </div>
        <div className="space-y-8">
          <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2D2D2D]">
            CONTACT US
          </h4>
          <address className="flex flex-col space-y-4 text-[11px] text-zinc-400 uppercase tracking-widest font-bold not-italic">
            <p className="normal-case tracking-normal text-zinc-500 font-sans font-medium">
              Jl. Karya Bakti, Medono, Kota Pekalongan, Kecamatan Pekalongan
              Barat, Jawa Tengah
            </p>
            <a
              href={EXTERNAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059]"
            >
              ADMIN WHATSAPP
            </a>
            <p className="text-zinc-500 font-sans font-medium">
              SENIN - SABTU (09.00 - 17.00)
            </p>
          </address>
        </div>
      </div>
      <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] text-zinc-400 tracking-[0.5em] uppercase font-bold text-center md:text-left">
          &copy; 2026 STANCE.ID — MODERN WOMEN'S WEAR
        </p>
        <div className="flex space-x-12 text-[9px] text-zinc-400 uppercase tracking-widest font-bold">
          <span className="hover:text-[#C5A059] cursor-default transition-colors">
            OFFICIAL STORE
          </span>
          <span className="hover:text-[#C5A059] cursor-default transition-colors">
            VERIFIED MERCHANT
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] selection:bg-[#C5A059]/10 selection:text-[#A8883B]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        :root { --font-serif: 'Cormorant Garamond', serif; --font-sans: 'Inter', sans-serif; }
        body { font-family: var(--font-sans); color: #2D2D2D; scroll-behavior: smooth; overflow-x: hidden; }
        .font-serif { font-family: var(--font-serif); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #FBFBF9; }
        ::-webkit-scrollbar-thumb { background: #C5A059; border-radius: 10px; }
      `}</style>
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <CollectionGrid />
        <BannerCTA />
        <div className="py-20 overflow-hidden bg-white">
          <div className="flex whitespace-nowrap text-7xl md:text-9xl font-serif uppercase tracking-[0.5em] font-bold pointer-events-none">
            <motion.div
              className="text-[#C5A059]/7" // Menggunakan warna emas Stance.id dengan opacity 15% agar lebih jelas
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              Modern Elegan Rapi Classy Modern Elegan Rapi Classy Modern Elegan
              Rapi Classy
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
