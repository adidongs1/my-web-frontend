"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { FaFileDownload } from "react-icons/fa";
import { RiCodeView } from "react-icons/ri";
import { RiCodeLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { FaRegPaperPlane } from "react-icons/fa";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col gap-4 pt-8 px-16">
      <section className="grid grid-cols-12 justify-center ">
        <article className={`col-span-12 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col justify-center items-center gap-0 pt-16">
            <h1 className="text-4xl font-semibold tracking-tight text-balance bg-gradient-to-tl from-jade-400 from-10% to-jade-500 to-90% bg-clip-text text-transparent">About Me</h1>
            <p className="text-md text-balance text-white">
              🔥{"  "}Dare to challenge, eager to learn, ready to adapt{"  "}🔥
            </p>
          </div>
        </article>

        <article className={`col-span-6 flex justify-center items-center transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col justify-center items-start gap-0">
            <h2 className="text-3xl font-bold bg-gradient-to-tl from-jade-400 from-10% to-jade-500 to-90% bg-clip-text text-transparent">Hello! I&#39;m</h2>
            <h1 className="text-3xl font-bold  text-white">Adi Arifin</h1>
            <p className="text-white pointer-none">
              I&#39;m a Informatics graduate from Universitas Amikom Yogyakarta with a strong interest in{" "}
              <span className="bg-gradient-to-tl from-sun-400 from-10% to-sun-500 to-90% bg-clip-text text-transparent font-bold">Technology and web programming</span>. I&#39;m skilled in configuring and installing software and hardware, as
              well as troubleshooting and resolving technical issues, basic network configuration, and CCTV system implementation. In addition, I actively learn and explore web programming as a web enthusiast. Including dashboard
              development, API integration, and web application development. With this background, I aim to grow as an{" "}
              <span className="bg-gradient-to-tl from-sun-400 from-10% to-sun-500 to-90% bg-clip-text text-transparent font-bold"> IT profesional and full-stack developer in the future.</span>
            </p>
            <div className="flex flex-row justify-center items-center gap-3">
              <button className="mt-2">
                <a
                  href="/file/Adi_Arifin.pdf"
                  download
                  className="bg-gradient-to-tl from-jade-400 from-10% to-jade-500 to-90% text-white  font-semibold py-3 px-4 rounded-lg shadow-lg border-2 border-jade-500 hover:border-sun-500 hover:from-sun-300 hover:to-sun-600 transition-colors duration-300 flex justify-center items-center"
                >
                  {" "}
                  <FaFileDownload className="mr-1" /> Download CV
                </a>
              </button>

              <button className="mt-2">
                <a
                  href="/projects"
                  download
                  className="bg-none flex justify-center items-center text-jade-500 border-2 border-jade-500 font-semibold py-3 px-4 rounded-lg shadow-lg hover:border-sun-400 hover:text-sun-400 transition-colors duration-300"
                >
                  <RiCodeView className="mr-2 text-2xl" /> View Projects
                </a>
              </button>
            </div>
          </div>
        </article>

        <article className={`col-span-6 flex justify-center items-center transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <Image src="/me2.png" alt="Profile Picture" width={300} height={300} className="rounded-lg shadow-lg" />
          </div>
        </article>

        <article className={`col-span-12 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-grid grid-cols-3 gap-8 w-full ">
            {/* card 1 */}
            <a href="/projects" className="col-span-1 p-4 rounded-2xl bg-gray-500/40 items-center hover:bg-gray-500/60 transition-all duration-300">
              <div className="flex justify-between items-center gap-2">
                <h3 className="text-white text-2xl bg-gray-500/70 flex items-center justify-center rounded-full p-2 mb-2">
                  <RiCodeLine />
                </h3>
                <h3 className="font-bold text-white text-2xl">150</h3>
              </div>

              <div className="flex justify-between gap-2">
                <p className="text-base text-white font-semibold">Total Projects</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="text-[12px] font-normal text-white">Web applications ever built</p>
                <MdOutlineArrowOutward className="text-white" />
              </div>
            </a>
            {/* card 2 */}
            <a href="/projects" className="col-span-1 p-4 rounded-2xl bg-gray-500/40 items-center hover:bg-gray-500/60 transition-all duration-300">
              <div className="flex justify-between items-center gap-2">
                <h3 className="text-white text-2xl bg-gray-500/70 flex items-center justify-center rounded-full p-2 mb-2">
                  <GrCertificate />
                </h3>
                <h3 className="font-bold text-white text-2xl">150</h3>
              </div>

              <div className="flex justify-between gap-2">
                <p className="text-base text-white font-semibold">Total Certificate</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="text-[12px] font-normal text-white">validated professional skills</p>
                <MdOutlineArrowOutward className="text-white" />
              </div>
            </a>

            {/* card 3 */}
            <a href="/projects" className="col-span-1 p-4 rounded-2xl bg-gray-500/40 items-center hover:bg-gray-500/60 transition-all duration-300">
              <div className="flex justify-between items-center gap-2">
                <h3 className="text-white text-2xl bg-gray-500/70 flex items-center justify-center rounded-full p-2 mb-2">
                  <GiJourney />
                </h3>
                <h3 className="font-bold text-white text-2xl">150</h3>
              </div>

              <div className="flex justify-between gap-2">
                <p className="text-base text-white font-semibold">Years of Experience</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="text-[12px] font-normal text-white">continuous learning journey</p>
                <MdOutlineArrowOutward className="text-white" />
              </div>
            </a>
          </div>
        </article>
      </section>

      <section id="contact" className="grid grid-cols-12 justify-center items-center">
        <article className={`col-span-12 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col justify-center items-center gap-0 pt-16">
            <h1 className="text-4xl font-semibold tracking-tight text-balance bg-gradient-to-tl from-jade-400 from-10% to-jade-500 to-90% bg-clip-text text-transparent">Contact Me</h1>
            <p className="text-md text-balance text-white">
              📬{"  "}Feel free to reach out for collaborations or inquiries.{"  "}📬
            </p>
          </div>
        </article>

        <article className={`col-span-12 grid grid-cols-12 gap-8 justify-center items-center transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* kiri */}
          <aside className={`col-span-4 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="">
              <div className="col-span-1 p-4 rounded-2xl bg-gray-500/40 items-center hover:bg-gray-500/60 transition-all duration-300">
                <div className="flex justify-between items-center mb-2 text-2xl font-semibold text-jade-500">
                  <h2>Get in Touch</h2>
                  <FaRegPaperPlane />
                </div>
              </div>
            </div>
          </aside>

          {/* Kanan */}
          <aside className={`col-span-8  transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="">
              <div className="col-span-1 p-4 rounded-2xl bg-gray-500/40 items-center hover:bg-gray-500/60 transition-all duration-300">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}
