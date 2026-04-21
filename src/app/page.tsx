import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pedolac – Baby Milk Formula | European Standard | Made for Med UK",
  description:
    "Pedolac is a scientifically developed infant nutrition range enriched with DHA, ARA, and prebiotics. Supporting your baby from birth through early childhood. European-standard quality — UAE distribution.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pedolac – Baby Milk Formula | European Standard",
    description:
      "Scientifically developed infant nutrition range enriched with DHA, ARA, and prebiotics. Available in UAE.",
    url: "/",
  },
};

const productCards = [
  { href: "/products#p1", emoji: "🍼", age: "0–6 Months",  name: "Pedolac 1",   desc: "Complete and gentle nutrition for newborns",          type: "Infant Formula" },
  { href: "/products#p2", emoji: "🌱", age: "6–12 Months", name: "Pedolac 2",   desc: "Enhanced nutrition for weaning stage",               type: "Follow-On Formula" },
  { href: "/products#p3", emoji: "🏃", age: "12–24 Months",name: "Pedolac 3",   desc: "Active development support for toddlers",            type: "Growing Up Formula" },
  { href: "/products#lf", emoji: "💧", age: "Up to 24 Mo", name: "Pedolac LF",  desc: "Lactose-free for digestive sensitivity",             type: "Lactose-Free" },
  { href: "/products#lbw",emoji: "⭐", age: "Up to 24 Mo", name: "Pedolac LBW", desc: "Preterm / Low Birth Weight formula",                 type: "Preterm Formula" },
];

const nutrients = [
  { abbr: "DHA", full: "Docosahexaenoic Acid",       color: "#4A9DD4", desc: "Supports brain development and cognitive function in infants." },
  { abbr: "ARA", full: "Arachidonic Acid",           color: "#2B6BAA", desc: "Supports visual development and neurological growth." },
  { abbr: "FOS", full: "Fructo-Oligosaccharides",    color: "#1A3C8F", desc: "Promotes healthy digestion and natural immunity." },
  { abbr: "GOS", full: "Galacto-Oligosaccharides",   color: "#B8DCF0", desc: "Supports gut health and digestive comfort." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #F0F9FF 100%)" }}
      >
        <div
          className="absolute top-10 -left-24 w-96 h-96 opacity-25 pointer-events-none"
          style={{ background: "#B8DCF0", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />
        <div
          className="absolute bottom-0 -right-16 w-80 h-80 opacity-15 pointer-events-none"
          style={{ background: "#4A9DD4", borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%" }}
        />
        <div className="max-w-[1180px] mx-auto px-6 grid md:grid-cols-[58%_42%] gap-12 items-center relative">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 text-[#2B6BAA] text-xs font-bold px-4 py-2 rounded-full border border-[#B8DCF0] mb-6">
              🍼 Made for Med UK · European Standard
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-[#1A3C8F] leading-[1.1] mb-6">
              Nurturing Every<br />
              <span className="gradient-text">Step of Your</span><br />
              Baby&apos;s Growth
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Pedolac is a scientifically developed infant nutrition range designed to support your baby from birth
              through early childhood. Enriched with essential nutrients such as DHA, ARA, and prebiotics.
            </p>
            <p className="text-[#2B6BAA] font-semibold text-sm mb-8">
              ✦ Inspired by European standards and crafted with carefully selected ingredients to ensure quality and
              safety.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/products"
                className="gradient-bg-h text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                Find the Right Formula →
              </Link>
              <Link
                href="/products"
                className="border-2 border-[#2B6BAA] text-[#2B6BAA] font-bold px-8 py-3.5 rounded-full hover:bg-[#2B6BAA] hover:text-white transition-all"
              >
                Explore Products
              </Link>
            </div>
            <div className="flex items-center gap-8">
              {[
                { value: "5", label: "Products" },
                { value: "4+", label: "Certifications" },
                { value: "0–24", label: "Months" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-gray-200" />}
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#1A3C8F]">{value}</div>
                    <div className="text-xs text-gray-400 font-semibold mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="hidden md:flex justify-center items-center relative h-[360px]">
            <div className="float-card absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-10">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-lg">🧠</div>
              <div>
                <div className="font-black text-sm text-[#1A3C8F]">DHA &amp; ARA</div>
                <div className="text-xs text-gray-400">Brain &amp; Vision</div>
              </div>
            </div>
            <div className="w-64 h-64 rounded-full hero-circle flex flex-col items-center justify-center shadow-2xl">
              <div className="text-5xl mb-2">🍼</div>
              <div className="text-white font-black text-center text-sm px-6">
                Complete<br />Infant Nutrition
              </div>
            </div>
            <div className="float-card-2 absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-10">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-lg">🌿</div>
              <div>
                <div className="font-black text-sm text-[#1A3C8F]">FOS &amp; GOS</div>
                <div className="text-xs text-gray-400">Gut Health</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: "#fff" }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ fill: "#EFF6FF", display: "block" }}>
          <path d="M0,28 C480,56 960,0 1440,28 L1440,0 L0,0Z" />
        </svg>
      </div>

      {/* PRODUCT OVERVIEW */}
      <section className="bg-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Our Range</span>
            <h2 className="text-3xl md:text-[2.4rem] font-black text-[#1A3C8F] mt-2 mb-4">
              Complete Nutrition for Every Stage &amp; Need
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every stage of your baby&apos;s growth requires specific nutritional support. Pedolac offers a
              comprehensive range of infant milk formulas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {productCards.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#B8DCF0] transition-all duration-300 flex flex-col"
              >
                <div className="h-1 gradient-bg-h" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-2xl mb-3">
                    {p.emoji}
                  </div>
                  <span className="gradient-bg-h text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
                    {p.age}
                  </span>
                  <h3 className="font-black text-[#1A3C8F] text-base mb-2">{p.name}</h3>
                  <p className="text-gray-400 text-xs mb-3 flex-1">{p.desc}</p>
                  <span className="text-xs font-bold text-[#2B6BAA] bg-[#EFF6FF] px-2 py-1 rounded-full text-center mb-3 block">
                    {p.type}
                  </span>
                  <Link href={p.href} className="text-xs font-bold text-[#2B6BAA] hover:text-[#1A3C8F] transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: "#EFF6FF" }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ fill: "#fff", display: "block" }}>
          <path d="M0,0 C480,56 960,0 1440,56 L1440,0 L0,0Z" />
        </svg>
      </div>

      {/* NUTRITION SCIENCE */}
      <section className="py-20" style={{ background: "linear-gradient(160deg,#EFF6FF 0%,#fff 60%)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Science</span>
            <h2 className="text-3xl md:text-[2.4rem] font-black text-[#1A3C8F] mt-2 mb-4">
              Backed by Science, Made for Your Baby
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Pedolac formulas are developed using scientifically recognized nutrients that play a vital role in your
              baby&apos;s growth and development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {nutrients.map((n) => (
              <div
                key={n.abbr}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderTop: `4px solid ${n.color}` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-base mb-4 gradient-bg"
                >
                  {n.abbr}
                </div>
                <h3 className="font-black text-[#1A3C8F] text-base mb-1">{n.abbr}</h3>
                <p className="text-xs text-[#4A9DD4] font-semibold mb-3">{n.full}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "✓ Balanced proteins, fats & carbohydrates",
              "✓ Essential vitamins & minerals",
              "✓ European quality standards",
              "✓ GMP certified manufacturing",
              "✓ Halal certified",
            ].map((b) => (
              <span key={b} className="bg-white border border-[#B8DCF0] text-[#1A3C8F] text-xs font-bold px-4 py-2 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Wave → dark section */}
      <div style={{ background: "#1A3C8F" }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ fill: "#EFF6FF", display: "block" }}>
          <path d="M0,28 C480,0 960,56 1440,28 L1440,0 L0,0Z" />
        </svg>
      </div>

      {/* TRUST & SAFETY */}
      <section className="bg-[#1A3C8F] py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#B8DCF0] uppercase">Certifications</span>
            <h2 className="text-3xl md:text-[2.4rem] font-black text-white mt-2 mb-4">
              Trusted Care for Your Little One
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Every Pedolac product meets rigorous quality and safety standards, certified by leading international
              bodies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["🏭 GMP Certified", "📋 ISO Certified", "🔬 HACCP Certified", "☪️ Halal Certified", "🇪🇺 European Standard"].map(
              (c) => (
                <div
                  key={c}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold px-6 py-2.5 rounded-full"
                >
                  {c}
                </div>
              )
            )}
          </div>
          <div className="max-w-2xl mx-auto bg-white/[0.07] border border-white/[0.15] rounded-2xl p-8 text-center">
            <div className="text-orange-300 font-black text-xs tracking-widest uppercase mb-3">⚠️ Important Notice</div>
            <div className="text-white font-black text-lg mb-3">MOTHER&apos;S MILK IS BEST FOR YOUR BABY</div>
            <div className="text-[#B8DCF0] text-base mb-4 font-semibold" dir="rtl">
              تنبيه هام: حليب الأم هو الأفضل لطفلك
            </div>
            <div className="text-white/55 text-sm">
              Infant milk substitute should be used only under the advice of a healthcare professional.
            </div>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: "#1A3C8F" }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ fill: "white", display: "block" }}>
          <path d="M0,0 C480,56 960,0 1440,56 L1440,56 L0,56Z" />
        </svg>
      </div>

      {/* CTA BANNER */}
      <section className="gradient-bg-h py-20">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Start Your Baby&apos;s Nutrition Journey with Confidence
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Pedolac products are available through trusted retail stores and online platforms. Choose the right
            nutrition solution for your baby with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="bg-white text-[#2B6BAA] font-black px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
            >
              Explore Products →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 text-white font-black px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
