import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Space_Mono, Caveat, Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Civrel Marlynette Fetalino | Executive & Creative Virtual Assistant",
  description: "Editorial & Creative Portfolio of Civrel Marlynette Fetalino — Strategic Virtual Assistant, Operations Specialist & Creative Producer for High-Growth Founders and Visionary Brands.",
  keywords: ["Civrel Marlynette Fetalino", "Virtual Assistant", "Executive Assistant", "Digital COO", "Notion Architect", "Creative VA", "Editorial Portfolio"],
  authors: [{ name: "Civrel Marlynette Fetalino" }],
  openGraph: {
    title: "Civrel Marlynette Fetalino | Executive & Creative Virtual Assistant",
    description: "Editorial & Creative Portfolio — Transforming operational chaos into seamless clarity.",
    images: ["/assets/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${spaceMono.variable} ${caveat.variable} ${kalam.variable} ${patrickHand.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FBF8F3] text-[#1A1615] font-sans antialiased selection:bg-[#C45B3A] selection:text-[#FFFFFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
