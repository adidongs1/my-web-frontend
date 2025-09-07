"use client";
import Image from "next/image";
import wave1 from "@/assets/wave1.png";

import { useEffect, useState } from "react";

export default function Background() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 w-screen h-screen overflow-hidden transition-all duration-1000 ${show ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}>
      <Image src={wave1} alt="Background" placeholder="blur" quality={100} fill sizes="100vw" className="object-cover w-screen h-screen blur-2xl" />
    </div>
  );
}
