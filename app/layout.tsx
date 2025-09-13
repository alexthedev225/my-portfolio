import type { Metadata } from "next";
import "./globals.css";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  weight: ["400", "700"], // Choix des poids disponibles
  style: ["normal", "italic"], // Styles disponibles
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Konan | Fullstack Developer",
  description:
    "Portfolio of Alex Konan, a fullstack developer crafting modern web applications with Next.js, Tailwind CSS, and cutting-edge technologies.",
  keywords: [
    "Alex Konan",
    "Fullstack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Alex Konan" }],
  creator: "Alex Konan",
  openGraph: {
    title: "Alex Konan | Fullstack Developer",
    description:
      "Explore the portfolio of Alex Konan, a fullstack developer building scalable and aesthetic web applications.",
    url: "https://alexkonan.vercel.app", // adapte avec ton vrai domaine
    siteName: "Alex Konan Portfolio",
    
    locale: "en_US",
    type: "website",
  },
 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ptSerif.className}>
      <body>{children}</body>
    </html>
  );
}
