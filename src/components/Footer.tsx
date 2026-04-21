import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-white.png" alt="Pedolac" width={40} height={40} className="h-10 w-auto" />
              <div>
                <div className="font-black text-lg text-white">Pedolac</div>
                <div className="text-[10px] text-white/40 font-semibold">
                  Baby Milk Formula · European Standard / Made for Med UK
                </div>
              </div>
            </div>
            <p className="text-white/45 text-sm mb-5 leading-relaxed">
              Scientifically developed infant nutrition for every stage of growth.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <p className="text-white/70 text-xs font-bold mb-1">MOTHER&apos;S MILK IS BEST FOR YOUR BABY</p>
              <p className="text-[#B8DCF0] text-xs" dir="rtl">
                تنبيه هام: حليب الأم هو الأفضل لطفلك
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["GMP", "ISO", "HACCP", "Halal"].map((c) => (
                <span key={c} className="text-xs font-bold text-white/35 border border-white/15 px-2.5 py-1 rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] font-black tracking-widest text-white/35 uppercase mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/products#p1", label: "Pedolac 1" },
                { href: "/products#p2", label: "Pedolac 2" },
                { href: "/products#p3", label: "Pedolac 3" },
                { href: "/products#lf", label: "Pedolac LF" },
                { href: "/products#lbw", label: "Pedolac LBW" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[10px] font-black tracking-widest text-white/35 uppercase mb-4">Information</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products#preparation", label: "Preparation Guide" },
                { href: "/contact#faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Legal */}
          <div>
            <h4 className="text-[10px] font-black tracking-widest text-white/35 uppercase mb-4">Support</h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "/contact", label: "Where to Buy" },
                { href: "/about", label: "Certifications" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[10px] font-black tracking-widest text-white/35 uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map((label) => (
                <li key={label}>
                  <Link href="#" className="text-white/55 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-3">
          <p className="text-white/25 text-xs">
            © 2026 Pedolac. Manufactured by Titus Health Tech Pvt. Ltd., India. Distributed by Flavor Food Trading
            LLC-FZ, Dubai, UAE.
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((label) => (
              <Link key={label} href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
