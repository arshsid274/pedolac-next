"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Pedolac?",
    a: "Pedolac is an advanced infant nutrition formula designed to support your baby's growth and development at every stage. It is enriched with essential nutrients like DHA, ARA, vitamins, and minerals.",
  },
  {
    q: "Is Pedolac safe for my baby?",
    a: "Yes, Pedolac is manufactured under strict quality and safety standards including GMP, ISO, and HACCP certification. Always follow preparation instructions carefully and consult your pediatrician before use.",
  },
  {
    q: "Is Pedolac a replacement for breast milk?",
    a: "Breast milk is the best source of nutrition for babies. Pedolac is an alternative when breastfeeding is not possible or insufficient, and should be used under medical advice.",
  },
  {
    q: "What is DHA and why is it important?",
    a: "DHA (Docosahexaenoic Acid) is an essential fatty acid that supports brain development and cognitive function in infants.",
  },
  {
    q: "What are ARA, FOS, and GOS?",
    a: "ARA (Arachidonic Acid) supports brain and eye development. FOS & GOS are prebiotics that help improve digestion and support immunity.",
  },
  {
    q: "Does Pedolac contain essential vitamins and minerals?",
    a: "Yes, Pedolac includes a balanced blend of vitamins and minerals to support overall growth, immunity, and development.",
  },
  {
    q: "How do I choose the right Pedolac stage?",
    a: "Choose based on your baby's age: Stage 1 for 0–6 months, Stage 2 for 6–12 months, Stage 3 for 12–24 months. For special conditions such as lactose intolerance or preterm birth, consult your doctor.",
  },
  {
    q: "How should I prepare the Pedolac formula?",
    a: "Wash and sterilize all feeding equipment. Use boiled and cooled water. Add the correct number of scoops as per the feeding table on the pack. Mix well and feed immediately.",
  },
  {
    q: "Can I store prepared formula?",
    a: "No. Always prepare a fresh feed and discard any leftover formula after feeding. Do not store prepared formula.",
  },
  {
    q: "Does Pedolac offer solutions for sensitive babies?",
    a: "Yes, Pedolac LF is a lactose-free formula designed for babies with lactose intolerance. Always consult a healthcare professional before use.",
  },
  {
    q: "Is Pedolac suitable for premature or low birth weight babies?",
    a: "Pedolac LBW is specifically formulated for premature and low birth weight infants. It should only be used under strict medical supervision.",
  },
  {
    q: "How should I store Pedolac?",
    a: "Store in a cool, dry place. Keep the container tightly closed after use. Do not refrigerate unless specified on the pack.",
  },
  {
    q: "How long can I use the product after opening?",
    a: "Use within 3 weeks after opening or before the expiry date, whichever comes first.",
  },
  {
    q: "Where can I buy Pedolac?",
    a: "Pedolac is available through selected retail stores and online platforms in the UAE. Contact Flavor Food Trading LLC-FZ for detailed availability.",
  },
  {
    q: "Who can I contact for support?",
    a: "You can reach out to our UAE distributor, Flavor Food Trading LLC-FZ, via WhatsApp, phone, or email for any assistance.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-200 ${
            open === i ? "border-[#B8DCF0] bg-white shadow-sm" : "border-gray-200 bg-white"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className={`text-sm font-bold transition-colors ${open === i ? "text-[#1A3C8F]" : "text-gray-700"}`}>
              {q}
            </span>
            <span
              className="text-xl text-[#4A9DD4] font-black ml-4 flex-shrink-0 transition-transform duration-250"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
