import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us – Pedolac Baby Milk Formula",
  description:
    "Get in touch with Pedolac's UAE distributor, Flavor Food Trading LLC-FZ in Dubai. Find answers to common questions about Pedolac infant formula, preparation, and availability.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us – Pedolac Baby Milk Formula",
    description: "UAE distributor contact info and FAQs for Pedolac infant formula.",
    url: "/contact",
  },
};

export default function ContactPage() {
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
            <span className="text-gray-600 font-semibold">Contact Us</span>
          </div>
          <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">Get in Touch</span>
          <h1 className="text-3xl md:text-5xl font-black text-[#1A3C8F] mt-2 mb-4">Contact &amp; Distribution</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Reach out to our UAE distribution partner for product availability, support, and inquiries.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* UAE Distributor */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🇦🇪</span>
                <div>
                  <h2 className="font-black text-[#1A3C8F] text-lg">UAE Distributor</h2>
                  <p className="text-[#4A9DD4] text-xs font-bold">Flavor Food Trading LLC-FZ</p>
                </div>
              </div>
              <hr className="border-gray-100 mb-5" />
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex gap-3">
                  <span className="text-[#4A9DD4] font-bold w-16 flex-shrink-0">Address</span>
                  <span>Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#4A9DD4] font-bold w-16 flex-shrink-0">Role</span>
                  <span>UAE Distribution Partner — Responsible for all retail and distribution across the UAE</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-[#EFF6FF] text-[#2B6BAA] font-bold text-sm px-4 py-2.5 rounded-full hover:bg-[#B8DCF0] transition-colors">
                  📞 Phone
                </button>
                <button className="flex items-center gap-2 bg-[#EFF6FF] text-[#2B6BAA] font-bold text-sm px-4 py-2.5 rounded-full hover:bg-[#B8DCF0] transition-colors">
                  📧 Email
                </button>
                <button className="flex items-center gap-2 bg-[#EFF6FF] text-[#2B6BAA] font-bold text-sm px-4 py-2.5 rounded-full hover:bg-[#B8DCF0] transition-colors">
                  💬 WhatsApp
                </button>
              </div>
            </div>

            {/* Manufacturer */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🇮🇳</span>
                <div>
                  <h2 className="font-black text-[#1A3C8F] text-lg">Manufacturer</h2>
                  <p className="text-[#4A9DD4] text-xs font-bold">Titus Health Tech Pvt. Ltd.</p>
                </div>
              </div>
              <hr className="border-gray-100 mb-5" />
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex gap-3">
                  <span className="text-[#4A9DD4] font-bold w-16 flex-shrink-0">Address</span>
                  <span>789, Plot No.2, Opp. Viva Laboratory, Rakanpur, Ta. Kalol, Dist. Gandhinagar, Gujarat-382721, India</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#4A9DD4] font-bold w-16 flex-shrink-0">FSSAI</span>
                  <span>10719009000334</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["GMP Certified", "ISO Certified", "HACCP Certified", "Halal Certified"].map((c) => (
                  <span key={c} className="text-xs font-bold text-[#2B6BAA] bg-[#EFF6FF] px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Medical advisory */}
          <div className="bg-[#EFF6FF] border-l-4 border-[#2B6BAA] rounded-xl p-5">
            <p className="text-[#1A3C8F] text-sm font-semibold">
              🔔 <strong>Medical Advice:</strong> Infant milk substitute should be used only under the advice of a
              healthcare professional as to the need for its use and the proper method of use.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20" id="faq">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.15em] text-[#4A9DD4] uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-[2.2rem] font-black text-[#1A3C8F] mt-2 mb-4">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need to know about Pedolac formulas, preparation, and where to buy.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg-h py-20">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Explore our complete product range and find the formula that&apos;s right for your baby.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="bg-white text-[#2B6BAA] font-black px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-all">
              Explore Products →
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
