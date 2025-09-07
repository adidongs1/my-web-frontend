import Image from "next/image";

// Import component dibawah ini
import Navbar from "@/components/Navbar";
import Background from "@/components/background";

import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adidongs",
  description: "Get to know me and my work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative bg-blue-charcoal-950">
        {/* Panggil Komponen di bawah sini */}

        <Background />
        <Navbar />

        <main className="min-h-screen container">{children}</main>

        {/* Nanti bisa tambahkan <Footer /> di sini */}
      </body>
    </html>
  );
}
