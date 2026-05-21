// src/components/LetsBuild.jsx

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowRight } from "lucide-react";

const LetsBuild = () => {
  return (
    <section className="relative bg-[#05010D] text-white px-6 md:px-14 pb-28 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#7B2EFF]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#F9B896]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-14">
          {/* Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7B2EFF]/10 via-transparent to-[#F9B896]/10" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14">
            {/* Left Side */}
            <div className="max-w-2xl">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                <p className="text-sm tracking-wide text-gray-300">
                  Available For Work
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Let’s Build Something
                <br />

                <span className="text-[#7B2EFF]">
                  Amazing Together.
                </span>
              </h2>

              {/* Paragraph */}
              <p className="mt-8 text-lg leading-relaxed text-gray-400 max-w-xl">
                I design and build premium web experiences,
                scalable SaaS products, AI-powered platforms,
                and futuristic interfaces that leave lasting
                impressions.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center lg:items-end gap-8">
              {/* CTA Button */}
              <button className="group px-8 py-5 rounded-2xl bg-[#F9B896] text-black font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#F9B896]/20">
                Get In Touch

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </button>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-[#7B2EFF]/20 hover:border-[#7B2EFF]/30 transition-all duration-300"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="#"
                  className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-[#7B2EFF]/20 hover:border-[#7B2EFF]/30 transition-all duration-300"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="#"
                  className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-[#7B2EFF]/20 hover:border-[#7B2EFF]/30 transition-all duration-300"
                >
                  <HiOutlineMail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="relative z-10 mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © 2026 Theodora Arizona Dev. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Privacy
              </a>

              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Terms
              </a>

              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsBuild;