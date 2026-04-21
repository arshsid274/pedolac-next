"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const products = [
  { href: "/products#p1", emoji: "🍼", name: "Pedolac 1", age: "0–6 months" },
  { href: "/products#p2", emoji: "🌱", name: "Pedolac 2", age: "6–12 months" },
  { href: "/products#p3", emoji: "🏃", name: "Pedolac 3", age: "12–24 months" },
  { href: "/products#lf", emoji: "💧", name: "Pedolac LF", age: "Lactose-Free" },
  { href: "/products#lbw", emoji: "⭐", name: "Pedolac LBW", age: "Preterm" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#1A3C8F] text-white text-xs h-10 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
        <span>🌍 Available in UAE — Dubai Distribution by Flavor Food Trading LLC-FZ</span>
        <span className="hidden md:block">Made for Med UK · European Standard</span>
      </div>

      {/* Header */}
      <header
        className={`fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[66px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-blue.png" alt="Pedolac" width={40} height={40} className="h-10 w-auto" priority />
            <div className="hidden sm:block leading-tight">
              <div className="font-black text-xl gradient-text">Pedolac</div>
              <div className="text-[10px] text-gray-400 font-semibold">Baby Milk Formula · European Standard</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  isActive(href)
                    ? "text-[#1A3C8F] bg-[#B8DCF0]/30"
                    : "text-gray-600 hover:text-[#1A3C8F] hover:bg-[#B8DCF0]/20"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Products dropdown */}
            <div className="relative nav-dropdown group">
              <Link
                href="/products"
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/products")
                    ? "text-[#1A3C8F] bg-[#B8DCF0]/30"
                    : "text-gray-600 hover:text-[#1A3C8F] hover:bg-[#B8DCF0]/20"
                }`}
              >
                Products ▾
              </Link>
              <div className="dropdown-menu hidden absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 min-w-[220px] py-2 z-50">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#EFF6FF] text-sm font-semibold text-gray-700 transition-colors"
                  >
                    <span>{p.emoji} {p.name}</span>
                    <span className="text-xs text-[#4A9DD4] font-bold">{p.age}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                isActive("/contact")
                  ? "text-[#1A3C8F] bg-[#B8DCF0]/30"
                  : "text-gray-600 hover:text-[#1A3C8F] hover:bg-[#B8DCF0]/20"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden md:block gradient-bg-h text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:opacity-90 transition-opacity"
            >
              Find the Right Formula →
            </Link>
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle menu"
              aria-expanded={drawerOpen}
              className="md:hidden p-2 flex flex-col gap-1.5"
            >
              <span className="w-6 h-0.5 bg-gray-700 block"></span>
              <span className="w-6 h-0.5 bg-gray-700 block"></span>
              <span className="w-6 h-0.5 bg-gray-700 block"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {drawerOpen && (
        <nav className="fixed top-[106px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-30 flex flex-col px-6 py-4 gap-1 md:hidden">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/products", label: "Products" },
            { href: "/contact", label: "Contact Us" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setDrawerOpen(false)}
              className={`py-3 px-4 font-bold rounded-xl transition-colors ${
                isActive(href)
                  ? "text-[#1A3C8F] bg-[#EFF6FF]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setDrawerOpen(false)}
            className="mt-3 gradient-bg-h text-white font-bold text-center py-3 rounded-full"
          >
            Find the Right Formula →
          </Link>
        </nav>
      )}
    </>
  );
}
