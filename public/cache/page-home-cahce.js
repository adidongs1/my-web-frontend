// Import component dibawah ini
import Navbar from "@/components/Navbar";

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
        {/* Background Atas */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80 brightness-100">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#17b472] via-[#17b472] to-[#f94a22] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <Navbar />

        <main className="min-h-screen container">{children}</main>

        {/* Background bawah */}
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-xl sm:top-[calc(100%-43rem)]">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#17b472] to-[#f94a22] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
        {/* Nanti bisa tambahkan <Footer /> di sini */}
      </body>
    </html>
  );
}
