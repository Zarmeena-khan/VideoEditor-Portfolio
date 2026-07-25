import { Bebas_Neue, Barlow, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Creative Video Editor | Portfolio",
  description:
    "Creative Video Editor with cinematic editing, motion graphics, color grading, and storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${cormorant.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-pitch-black text-cream cursor-none">{children}</body>
    </html>
  );
}
