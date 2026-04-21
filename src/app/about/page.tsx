import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Pedolac Baby Milk Formula",
  description:
    "Learn about Pedolac — our mission, philosophy, and commitment to science-backed infant nutrition. Manufactured by Titus Health Tech in India, distributed across the UAE by Flavor Food Trading LLC-FZ.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us – Pedolac Baby Milk Formula",
    description: "Our mission, philosophy, and commitment to science-backed infant nutrition.",
    url: "/about",
  },
};

export default function AboutPage() {
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
            <span className="text-gray-600 font-semibold">About Us</span>
          </div>
          <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">About Us</span>
          <h1 className="text-3xl md:text-5xl font-black text-[#1A3C8F] mt-2 mb-4">Science-Backed Infant Nutrition</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Pedolac is dedicated to providing safe, balanced, and scientifically formulated infant nutrition during the
            most important stages of your baby&apos;s growth.
          </p>
        </div>
      </section>

      {/* ABOUT MAIN */}
      <section className="bg-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid md:grid-cols-[40%_60%] gap-12 items-start">
            {/* Visual col */}
            <div className="space-y-4">
              <div className="gradient-bg rounded-2xl p-8 text-white">
                <h3 className="font-black text-xl mb-3">Our Mission</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-6">
                  To support every baby&apos;s healthy growth by providing scientifically developed, safe, and affordable
                  infant nutrition that parents can trust — from the first day of life through toddlerhood.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["🇮🇳 India Manufactured", "🇦🇪 UAE Distributed", "🇪🇺 European Standard"].map((b) => (
                    <span key={b} className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-black text-[#1A3C8F] text-sm mb-3">Distributed by:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-[#4A9DD4] font-bold">✓</span> Flavor Food Trading LLC-FZ</li>
                  <li className="flex items-center gap-2"><span className="text-[#4A9DD4] font-bold">✓</span> Dubai, U.A.E.</li>
                  <li className="flex items-center gap-2"><span className="text-[#4A9DD4] font-bold">✓</span> Meydan Grandstand, 6th Floor</li>
                </ul>
              </div>
            </div>

            {/* Content col */}
            <div>
              <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Our Philosophy</span>
              <h2 className="text-2xl md:text-[2rem] font-black text-[#1A3C8F] mt-2 mb-4">
                Built on Science. Trusted by Parents.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Pedolac is a dedicated infant nutrition brand offering a complete range of milk formulas designed to
                support babies from birth up to 24 months. The brand focuses on providing safe, balanced, and
                scientifically formulated nutrition during the most important stages of growth.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: "🔬",
                    title: "Science-Based Nutrition",
                    desc: "Each formula is enriched with essential nutrients such as DHA, ARA, and prebiotics — selected based on current scientific research on infant development.",
                  },
                  {
                    icon: "🛡️",
                    title: "Safety First",
                    desc: "Products are developed under strict hygiene and preparation guidelines, manufactured in a GMP, ISO, and HACCP certified facility.",
                  },
                  {
                    icon: "👨‍👩‍👧",
                    title: "Parent Confidence",
                    desc: "Clear instructions, transparent ingredient information, and bilingual labelling help parents make informed, confident decisions.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-black text-[#1A3C8F] text-base mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-black text-[#1A3C8F] text-base mb-3">Our Responsibility</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Breast milk is the best source of nutrition for babies",
                    "Formula should be used when breastfeeding is not sufficient or possible",
                    "Always consult a healthcare professional before use",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="text-[#4A9DD4] font-bold mt-0.5">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING & DISTRIBUTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Manufacturing &amp; Distribution</span>
            <h2 className="text-3xl md:text-[2.2rem] font-black text-[#1A3C8F] mt-2 mb-4">Global Quality, Local Availability</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Pedolac is manufactured to the highest quality standards and made available across the UAE through our
              trusted distribution partner.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Manufacturer */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">🏭</div>
              <h3 className="font-black text-[#1A3C8F] text-lg mb-1">Titus Health Tech Pvt. Ltd.</h3>
              <p className="text-[#4A9DD4] font-bold text-xs mb-4">Manufacturer — India</p>
              <hr className="border-gray-100 mb-4" />
              <p className="text-gray-500 text-sm mb-3">
                789, Plot No.2, Opp. Viva Laboratory, Rakanpur, Ta. Kalol, Dist. Gandhinagar, Gujarat-382721, India
              </p>
              <p className="text-xs font-bold text-gray-700 mb-4">FSSAI Lic. No.: 10719009000334</p>
              <div className="flex flex-wrap gap-2">
                {["GMP Certified", "ISO Certified", "HACCP Certified", "Halal Certified"].map((c) => (
                  <span key={c} className="text-xs font-bold text-[#2B6BAA] bg-[#EFF6FF] px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Distributor */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">🇦🇪</div>
              <h3 className="font-black text-[#1A3C8F] text-lg mb-1">Flavor Food Trading LLC-FZ</h3>
              <p className="text-[#4A9DD4] font-bold text-xs mb-4">UAE Distributor</p>
              <hr className="border-gray-100 mb-4" />
              <p className="text-gray-500 text-sm mb-4">
                Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
              </p>
              <p className="text-xs font-bold text-[#1A3C8F] mb-1">Role: UAE Distribution Partner</p>
              <p className="text-xs text-gray-500">
                Responsible for all retail and distribution across the United Arab Emirates.
              </p>
            </div>
          </div>

          <div className="bg-[#EFF6FF] border-l-4 border-[#2B6BAA] rounded-xl p-5">
            <p className="text-[#1A3C8F] text-sm font-semibold">
              🔔 <strong>Medical Advice:</strong> Infant milk substitute should be used only under the advice of a
              healthcare professional as to the need for its use and the proper method of use.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-[#1A3C8F] py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#B8DCF0] uppercase">Certifications</span>
            <h2 className="text-3xl md:text-[2.2rem] font-black text-white mt-2 mb-4">Trusted Care for Your Little One</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Every Pedolac product meets rigorous quality and safety standards, certified by leading international
              bodies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["🏭 GMP Certified", "📋 ISO Certified", "🔬 HACCP Certified", "☪️ Halal Certified", "🇪🇺 European Standard"].map(
              (c) => (
                <div key={c} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold px-6 py-2.5 rounded-full">
                  {c}
                </div>
              )
            )}
          </div>
          <div className="max-w-2xl mx-auto bg-white/[0.07] border border-white/[0.15] rounded-2xl p-8 text-center">
            <div className="text-orange-300 font-black text-xs tracking-widest uppercase mb-3">⚠️ Important Notice</div>
            <div className="text-white font-black text-xl mb-3">MOTHER&apos;S MILK IS BEST FOR YOUR BABY</div>
            <div className="text-[#B8DCF0] text-base mb-4 font-semibold" dir="rtl">
              تنبيه هام: حليب الأم هو الأفضل لطفلك
            </div>
            <div className="text-white/55 text-sm">
              Infant milk substitute should be used only under the advice of a healthcare professional.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg-h py-20">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Start Your Baby&apos;s Nutrition Journey with Confidence
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Explore our full product range and find the right formula for your baby&apos;s stage of development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="bg-white text-[#2B6BAA] font-black px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-all">
              Explore Products →
            </Link>
            <Link href="/contact" className="border-2 border-white/50 text-white font-black px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
