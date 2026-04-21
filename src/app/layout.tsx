import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://pedolac.com"),
  title: {
    default: "Pedolac – Baby Milk Formula | European Standard | Made for Med UK",
    template: "%s | Pedolac",
  },
  description:
    "Pedolac is a scientifically developed infant nutrition range enriched with DHA, ARA, and prebiotics. Supporting your baby from birth through early childhood. European-standard quality — UAE distribution.",
  keywords: [
    "Pedolac",
    "baby formula UAE",
    "infant milk formula",
    "DHA formula",
    "lactose-free baby formula",
    "preterm formula",
    "European infant nutrition",
    "baby milk Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Pedolac",
    title: "Pedolac – Baby Milk Formula | European Standard",
    description:
      "Scientifically developed infant nutrition range enriched with DHA, ARA, and prebiotics. Available in UAE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-600">
        <Header />
        <main className="flex-1 pt-[106px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
