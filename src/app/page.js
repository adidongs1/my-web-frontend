"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { CiShare1 } from "react-icons/ci";
import { MdContactEmergency } from "react-icons/md";

export default function Home() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setData(data));

    setShow(true);
  }, []);

  return (
    <main>
      <div className="relative isolate px-6 lg:px-8">
        {/* Main */}
        <div className={`mx-auto max-w-2xl h-screen flex flex-col justify-center items-center pt-16 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1">
              <div className="flex space-x-7">
                <Image alt="" src="/code-white.svg" width={64} height={64} className="inline-block size-24 px-2 py-4" />
                <Image alt="" src="/computer-white.svg" width={64} height={64} className="inline-block size-24 px-2 py-4" />
                <Image alt="" src="/brush-white.svg" width={64} height={64} className="inline-block size-24 px-2 py-4" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance  text-white sm:text-6xl">Welcome to</h1>
            <h1 className="text-5xl font-semibold tracking-tight text-balance bg-gradient-to-r from-pomegranate-500 to-jade-500 bg-clip-text text-transparent sm:text-7xl">ADI ARIFIN</h1>
            <h1 className="text-4xl font-semibold tracking-tight text-balance bg-gradient-to-r from-pomegranate-500 to-jade-500 bg-clip-text text-transparent sm:text-6xl">PERSONAL WEBSITE</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"></p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/projects" className="rounded-md bg-jade-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-jade-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-500">
                Projects <CiShare1 className="inline-block text-lg ml-1" />
              </a>
              <a href="/about#contact" className="text-sm/6 font-semibold text-white hover:text-sun-400">
                Contact <MdContactEmergency className="inline-block text-lg ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
