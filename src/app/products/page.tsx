import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ProductTabs from "./ProductTabs";

export const metadata: Metadata = {
  title: "Products – Pedolac Baby Milk Formula",
  description:
    "Explore the full Pedolac range: Pedolac 1 (0–6 months), Pedolac 2 (6–12 months), Pedolac 3 (12–24 months), Pedolac LF (Lactose-Free), and Pedolac LBW (Preterm). Enriched with DHA, ARA, and prebiotics.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products – Pedolac Baby Milk Formula",
    description: "Complete Pedolac range: 5 formulas for every stage from birth to 24 months.",
    url: "/products",
  },
  keywords: [
    "Pedolac 1", "Pedolac 2", "Pedolac 3", "Pedolac LF", "Pedolac LBW",
    "infant formula", "lactose free formula", "preterm formula", "baby formula stages",
  ],
};

const overviewCards = [
  { id: "p1",  emoji: "🍼", age: "0–6 Months",   name: "Pedolac 1",   desc: "Complete and gentle nutrition for newborns",       type: "Infant Formula" },
  { id: "p2",  emoji: "🌱", age: "6–12 Months",  name: "Pedolac 2",   desc: "Enhanced nutrition for weaning stage",             type: "Follow-On Formula" },
  { id: "p3",  emoji: "🏃", age: "12–24 Months", name: "Pedolac 3",   desc: "Active development support for toddlers",          type: "Growing Up Formula" },
  { id: "lf",  emoji: "💧", age: "Up to 24 Mo",  name: "Pedolac LF",  desc: "Lactose-free for digestive sensitivity",           type: "Lactose-Free" },
  { id: "lbw", emoji: "⭐", age: "Up to 24 Mo",  name: "Pedolac LBW", desc: "Preterm / Low Birth Weight formula",               type: "Preterm Formula" },
];

const steps = [
  { n: 1, emoji: "🧼", title: "Wash Equipment",  desc: "Thoroughly wash feeding bottle, nipple, cap, and all utensils." },
  { n: 2, emoji: "🔥", title: "Sterilize",        desc: "After rinsing, boil utensils for 5 minutes." },
  { n: 3, emoji: "💧", title: "Boil Water",       desc: "Heat water to a rolling boil for 5 minutes and cool to lukewarm." },
  { n: 4, emoji: "🥛", title: "Measure Water",    desc: "Pour the correct amount into the sterilized bottle." },
  { n: 5, emoji: "🥄", title: "Measure Powder",   desc: "Fill the enclosed scoop and scrape level with a straight edge." },
  { n: 6, emoji: "➕", title: "Add Powder",        desc: "Add one level scoop per 30ml of water." },
  { n: 7, emoji: "🍼", title: "Mix & Feed",        desc: "Mix until dissolved. Test temperature and feed immediately." },
];

export default function ProductsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(135deg,#EFF6FF 0%,#DBEAFE 50%,#F0F9FF 100%)" }}
      >
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#2B6BAA] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-600 font-semibold">Products</span>
          </div>
          <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Our Products</span>
          <h1 className="text-3xl md:text-5xl font-black text-[#1A3C8F] mt-2 mb-4">
            Complete Nutrition for Every Stage
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Five scientifically formulated infant milk formulas designed to support your baby from birth through
            toddlerhood, including specialized options for unique nutritional needs.
          </p>
        </div>
      </section>

      {/* PRODUCT OVERVIEW CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Our Range</span>
            <h2 className="text-3xl md:text-[2.2rem] font-black text-[#1A3C8F] mt-2 mb-4">
              Find Your Baby&apos;s Formula
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-6">
            {overviewCards.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#B8DCF0] transition-all duration-300 flex flex-col"
              >
                <div className="h-1 gradient-bg-h" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-2xl mb-3">{p.emoji}</div>
                  <span className="gradient-bg-h text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">{p.age}</span>
                  <h3 className="font-black text-[#1A3C8F] text-base mb-2">{p.name}</h3>
                  <p className="text-gray-400 text-xs mb-3 flex-1">{p.desc}</p>
                  <span className="text-xs font-bold text-[#2B6BAA] bg-[#EFF6FF] px-2 py-1 rounded-full text-center mb-3 block">{p.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABBED DETAIL */}
      <section className="bg-gray-50 py-20" id="product-detail">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Detailed Information</span>
            <h2 className="text-3xl md:text-[2.2rem] font-black text-[#1A3C8F] mt-2">Product Range Details</h2>
          </div>
          <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading…</div>}>
            <ProductTabs />
          </Suspense>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Quick Reference</span>
            <h2 className="text-3xl md:text-[2.2rem] font-black text-[#1A3C8F] mt-2">Product Comparison</h2>
          </div>
          <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#1A3C8F] text-white">
                  <th className="text-left px-5 py-3.5 font-bold text-xs">Feature</th>
                  <th className="px-4 py-3.5 font-bold text-xs text-center">Pedolac 1</th>
                  <th className="px-4 py-3.5 font-bold text-xs text-center">Pedolac 2</th>
                  <th className="px-4 py-3.5 font-bold text-xs text-center">Pedolac 3</th>
                  <th className="px-4 py-3.5 font-bold text-xs text-center">Pedolac LF</th>
                  <th className="px-4 py-3.5 font-bold text-xs text-center">Pedolac LBW</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Age Range",    vals: ["0–6 mo","6–12 mo","12–24 mo","Up to 24 mo","Up to 24 mo"] },
                  { feature: "Type",         vals: ["Infant","Follow-On","Growing Up","Lactose-Free","Preterm"] },
                  { feature: "DHA",          vals: ["✓","✓","✓","—","✓"], check: true },
                  { feature: "ARA",          vals: ["✓","✓","✓","—","✓"], check: true },
                  { feature: "FOS & GOS",    vals: ["✓","✓","✓","—","—"], check: true },
                  { feature: "Nucleotides",  vals: ["—","—","—","✓","✓"], check: true },
                  { feature: "MCT",          vals: ["—","—","—","✓","✓"], check: true },
                  { feature: "Med. Superv.", vals: ["No","No","No","Yes","Yes"], warn: true },
                  { feature: "Net Weight",   vals: ["400g","400g","400g","400g","400g"] },
                ].map(({ feature, vals, check, warn }, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-semibold text-[#1A3C8F] text-xs">{feature}</td>
                    {vals.map((v, j) => (
                      <td key={j} className="px-4 py-3 text-center text-xs">
                        {check && v === "✓" ? (
                          <span className="text-[#2B6BAA] font-black">✓</span>
                        ) : check && v === "—" ? (
                          <span className="text-gray-300">—</span>
                        ) : warn && v === "Yes" ? (
                          <span className="text-orange-500 font-bold">Yes</span>
                        ) : (
                          <span className="text-gray-600">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PREPARATION GUIDE */}
      <section className="bg-white py-20" id="preparation">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">How to Use</span>
            <h2 className="text-3xl md:text-[2.2rem] font-black text-[#1A3C8F] mt-2 mb-4">Preparation Guide</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Careful and hygienic preparation of infant milk formula is most essential for your baby&apos;s health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {steps.map(({ n, emoji, title, desc }) => (
              <div
                key={n}
                className="bg-gray-50 rounded-2xl p-5 hover:bg-[#EFF6FF] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 gradient-bg rounded-full flex items-center justify-center text-white font-black text-xs">
                    {n}
                  </div>
                  <span className="text-2xl">{emoji}</span>
                </div>
                <h3 className="font-black text-[#1A3C8F] text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
            <div className="bg-[#EFF6FF] rounded-2xl p-5 border border-[#B8DCF0]">
              <div className="text-2xl mb-3">📏</div>
              <h3 className="font-black text-[#1A3C8F] text-sm mb-2">Standard Measure</h3>
              <p className="text-[#2B6BAA] text-xs font-bold leading-relaxed">
                1 level scoop (≈4.8g) per 30ml water<br />
                1L Milk = 140g Powder + 900ml Water
              </p>
            </div>
          </div>

          {/* Warning cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-black text-orange-700 text-sm mb-3">⚠️ Preparation Warnings</h3>
              <ul className="space-y-1.5 text-xs text-orange-700">
                {[
                  "Unboiled water or incorrect dilution can make your baby ill",
                  "Do not heat feeds in microwave — hot spots may cause scalding",
                  "Any leftover product must be discarded to reduce infection risk",
                  "Boiled &amp; cooled water shall be used to prepare this product",
                ].map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <span>!</span>
                    <span dangerouslySetInnerHTML={{ __html: w }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-black text-orange-700 text-sm mb-3">⚠️ Feeding Warnings</h3>
              <ul className="space-y-1.5 text-xs text-orange-700">
                {[
                  "Only prepare one feed at a time",
                  "Feed immediately and follow instructions exactly",
                  "Do not keep unfinished feed — discard the contents",
                  "Always hold baby while feeding; never leave unattended",
                ].map((w) => (
                  <li key={w} className="flex items-start gap-2"><span>!</span><span>{w}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Storage */}
          <div className="bg-[#EFF6FF] border border-[#B8DCF0] rounded-2xl p-6 flex gap-4 items-start">
            <span className="text-3xl">📦</span>
            <div>
              <h3 className="font-black text-[#1A3C8F] text-sm mb-2">Storage Instructions</h3>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Store unopened tin under normal room temperature conditions</li>
                <li>• Cover opened tin and store in cool, dry place — not in refrigerator</li>
                <li>• Use within 3 weeks after opening or before expiry date (whichever is earlier)</li>
                <li>• Prepare 1 feed at a time — feed instantly and do not preserve</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg-h py-20">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need Help Choosing the Right Formula?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Contact our team or consult your healthcare professional to find the perfect formula for your baby.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#2B6BAA] font-black px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-all">
              Contact Us →
            </Link>
            <Link href="/about" className="border-2 border-white/50 text-white font-black px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              About Pedolac
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
