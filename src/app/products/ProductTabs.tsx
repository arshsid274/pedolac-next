"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const TABS = [
  { id: "p1", label: "Pedolac 1" },
  { id: "p2", label: "Pedolac 2" },
  { id: "p3", label: "Pedolac 3" },
  { id: "lf", label: "Pedolac LF" },
  { id: "lbw", label: "Pedolac LBW" },
];

function Table({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#1A3C8F] text-white">
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-bold text-xs">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-[#EFF6FF] transition-colors`}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-gray-600 text-xs">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NutrientGrid({ items }: { items: { label: string; value: string | number; unit: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map(({ label, value, unit }) => (
        <div key={label} className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
          <span className="text-xs text-gray-500 font-semibold">{label}</span>
          <span className="text-xs font-black text-[#1A3C8F]">{value} <span className="text-gray-400 font-normal">{unit}</span></span>
        </div>
      ))}
    </div>
  );
}

const tabData = {
  p1: {
    name: "Pedolac 1",
    type: "Infant Milk Formula",
    arabic: "بيدولاك 1 - حليب أطفال",
    age: "0–6 Months",
    weight: "400g",
    features: ["DHA for brain development", "ARA for visual development", "FOS & GOS prebiotics for digestive health", "European Standard formulation"],
    desc: "Pedolac 1 is designed for newborns and infants up to 6 months, providing complete and balanced nutrition when breastfeeding is not sufficient.",
    feedingHeaders: ["Age of Baby", "Boiled Water (ml)", "Scoops", "Feeds per 24 hrs"],
    feedingRows: [
      ["1–2 weeks", "90", "3", "6"],
      ["3–4 weeks", "120", "4", "5"],
      ["2 months", "150", "5", "5"],
      ["3–4 months", "180", "6", "5"],
      ["5–6 months", "210", "7", "5"],
    ],
    nutrients: [
      { label: "Energy", value: "680 kcal", unit: "" }, { label: "Protein", value: "15.4", unit: "g" },
      { label: "Total Fat", value: "30.9", unit: "g" }, { label: "Carbohydrates", value: "85.4", unit: "g" },
      { label: "DHA", value: "86.8", unit: "mg" }, { label: "ARA", value: "86.8", unit: "mg" },
      { label: "FOS & GOS", value: "4.5", unit: "g" }, { label: "Calcium", value: "462", unit: "mg" },
    ],
  },
  p2: {
    name: "Pedolac 2",
    type: "Follow-On Formula",
    arabic: "بيدولاك 2 - حليب متابعة",
    age: "6–12 Months",
    weight: "400g",
    features: ["DHA for continued brain development", "ARA for visual development", "FOS & GOS prebiotics", "European Standard formulation"],
    desc: "Designed for infants above 6 months, Pedolac 2 supports growth during the transition to solid foods. Not a sole source of nutrition — should be used with complementary foods.",
    feedingHeaders: ["Age of Baby", "Boiled Water (ml)", "Scoops", "Feeds per 24 hrs"],
    feedingRows: [["After 6 Months", "210", "7", "5"]],
    nutrients: [
      { label: "Energy", value: "673 kcal", unit: "" }, { label: "Protein", value: "19.4", unit: "g" },
      { label: "Total Fat", value: "29.4", unit: "g" }, { label: "Carbohydrates", value: "84.7", unit: "g" },
      { label: "DHA", value: "86.8", unit: "mg" }, { label: "ARA", value: "86.8", unit: "mg" },
      { label: "FOS & GOS", value: "4.5", unit: "g" }, { label: "Calcium", value: "868", unit: "mg" },
    ],
  },
  p3: {
    name: "Pedolac 3",
    type: "Growing Up Formula",
    arabic: "بيدولاك 3 - تركيبة حليب للنمو",
    age: "12–24 Months",
    weight: "400g",
    features: ["DHA for brain development", "ARA for visual development", "FOS & GOS prebiotics", "European Standard formulation"],
    desc: "Pedolac 3 is a follow-up formula specially designed to meet the needs of growing infants over 12 months up to 24 months. Supports immunity, physical and cognitive development.",
    feedingHeaders: ["Age of Baby", "Boiled Water (ml)", "Scoops", "Feeds per 24 hrs"],
    feedingRows: [["After 12 Months", "210", "7", "5"]],
    nutrients: [
      { label: "Energy", value: "661 kcal", unit: "" }, { label: "Protein", value: "19.6", unit: "g" },
      { label: "Total Fat", value: "28.3", unit: "g" }, { label: "Carbohydrates", value: "82.4", unit: "g" },
      { label: "DHA", value: "86.8", unit: "mg" }, { label: "ARA", value: "86.8", unit: "mg" },
      { label: "FOS & GOS", value: "4.5", unit: "g" }, { label: "Calcium", value: "812", unit: "mg" },
    ],
  },
  lf: {
    name: "Pedolac LF",
    type: "Lactose Free Infant Milk Substitute",
    arabic: "بيدولاك (خالٍ من اللاكتوز)",
    age: "Up to 24 Months",
    weight: "400g",
    advisory: "LACTOSE FREE OR SUCROSE FREE INFANT MILK SUBSTITUTE TO BE TAKEN UNDER MEDICAL ADVICE ONLY.",
    features: ["Lactose-Free formulation", "Easy to digest proteins", "Fortified with vitamins and minerals", "Suitable for lactose intolerant babies"],
    desc: "PEDOLAC-LF is a nutritional special food with lactose-free easily digestible proteins. It has been fortified with essential vitamins & minerals. It can be given to all ages of lactose intolerant babies. PEDOLAC-LF is a complementary food, not a medicine.",
    feedingHeaders: ["Age of Baby", "Boiled Water (ml)", "Scoops", "Feeds per 24 hrs"],
    feedingRows: [
      ["Up to 4 weeks", "90", "3", "6"],
      ["4 to 6 weeks", "120", "4", "5"],
      ["7 to 8 weeks", "150", "5", "5"],
      ["3 & 4 months", "180", "6", "5"],
      ["5 & 6 months", "210", "7", "5"],
      ["Over 6 months", "240", "8", "3 to 4"],
    ],
    nutrients: [
      { label: "Energy", value: "683 kcal", unit: "" }, { label: "Protein", value: "22", unit: "g" },
      { label: "Total Fat", value: "30.9", unit: "g" }, { label: "Carbohydrates", value: "79.1", unit: "g" },
      { label: "Nucleotides", value: "30.8", unit: "mg" }, { label: "MCT", value: "Included", unit: "" },
      { label: "Calcium", value: "462", unit: "mg" }, { label: "Iron", value: "7.8", unit: "mg" },
    ],
  },
  lbw: {
    name: "Pedolac LBW",
    type: "Preterm Infant Milk Substitute",
    arabic: "بيدولاك (للمواليد ذوي الوزن المنخفض)",
    age: "Up to 24 Months",
    weight: "400g",
    advisory: "STRICT MEDICAL SUPERVISION REQUIRED. For premature babies (born before 37 weeks) or low birth weight (less than 2.5 kg). The low birth weight infant milk substitute shall be withdrawn under medical advice as soon as the mother's milk is sufficiently available.",
    features: ["High protein content for catch-up growth", "DHA & ARA for brain development", "Nucleotides for immune support", "MCT for easy fat absorption", "Amino acid enriched"],
    desc: "Pedolac LBW is designed for premature and low birth weight infants, providing high nutritional support. Food for special medical purposes intended for infants.",
    feedingHeaders: ["Weight of Baby (g)", "Boiled Water (ml)", "Scoops", "Feeds per 24 hrs"],
    feedingRows: [
      ["1000–1800", "As per healthcare professional", "—", "8–10"],
      ["1800–2000", "30", "1", "8–10"],
      ["2000–2500", "60", "2", "6"],
      ["2500–3000", "60/90", "2/3", "6"],
      ["3000–3500", "90", "3", "6"],
      ["3500–4000", "120", "4", "5"],
    ],
    nutrients: [
      { label: "Energy", value: "689 kcal", unit: "" }, { label: "Protein", value: "23.3", unit: "g" },
      { label: "Total Fat", value: "32.2", unit: "g" }, { label: "Carbohydrates", value: "76.3", unit: "g" },
      { label: "DHA", value: "128.8", unit: "mg" }, { label: "ARA", value: "128.8", unit: "mg" },
      { label: "Nucleotides", value: "30.8", unit: "mg" }, { label: "Calcium", value: "854", unit: "mg" },
    ],
  },
};

export default function ProductTabs() {
  const [active, setActive] = useState<keyof typeof tabData>("p1");
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && hash in tabData) setActive(hash as keyof typeof tabData);
  }, [searchParams]);

  const d = tabData[active];
  const hasAdvisory = "advisory" in d;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50 rounded-t-2xl -mt-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id as keyof typeof tabData)}
            aria-selected={active === t.id}
            className={`flex-shrink-0 px-5 py-4 text-sm font-bold transition-all whitespace-nowrap ${
              active === t.id
                ? "bg-white text-[#1A3C8F] border-t-[3px] border-t-[#2B6BAA] shadow-sm"
                : "text-gray-500 hover:text-[#2B6BAA] hover:bg-[#EFF6FF]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 p-6 md:p-8 shadow-sm">
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-4">
            <div>
              <h2 className="font-black text-2xl text-[#1A3C8F] mb-1">{d.name}</h2>
              <p className="text-gray-400 text-xs font-semibold">{d.type}</p>
            </div>
            <div className="bg-[#EFF6FF] rounded-xl p-3" dir="rtl">
              <p className="text-[#2B6BAA] text-sm font-semibold">{d.arabic}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: "Age Range", value: d.age },
                { label: "Net Weight", value: d.weight },
                { label: "Type", value: d.type },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3 col-span-2">
                  <div className="text-gray-400 font-semibold mb-0.5">{label}</div>
                  <div className="text-[#1A3C8F] font-black text-sm">{value}</div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-black text-[#1A3C8F] text-sm mb-2">Key Features</h4>
              <ul className="space-y-1.5">
                {d.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-[#4A9DD4] font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div>
            {hasAdvisory && (
              <div className="bg-orange-50 border-l-4 border-orange-400 rounded-xl p-4 mb-5">
                <p className="text-orange-700 text-xs font-bold">⚠️ Medical Advisory</p>
                <p className="text-orange-700 text-xs mt-1">{(d as { advisory: string }).advisory}</p>
              </div>
            )}

            <p className="text-gray-500 text-sm leading-relaxed mb-6">{d.desc}</p>

            <h3 className="font-black text-[#1A3C8F] text-base mb-3">Suggested Feeding Table</h3>
            <Table headers={d.feedingHeaders} rows={d.feedingRows} />

            <div className="bg-[#EFF6FF] rounded-xl p-4 mb-6 text-sm font-semibold text-[#1A3C8F]">
              📏 One level scoop (≈4.8g) per 30ml water · 1L Milk = 140g Powder + 900ml Water
            </div>

            <h3 className="font-black text-[#1A3C8F] text-base mb-3">Key Nutrients (per 100g)</h3>
            <NutrientGrid items={d.nutrients.map((n) => ({ label: n.label, value: n.value, unit: n.unit }))} />
          </div>
        </div>
      </div>
    </div>
  );
}
