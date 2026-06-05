import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Zarmeena Khan | Portfolio",
  description:
    "Portfolio of Zarmeena Khan, Computer Science Student and AI Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
