// src/components/studio/StudioHero.jsx

import { ArrowRight, Play } from "lucide-react";
import studio from "../assets/studio.mp4"

const StudioHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white pt-24">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={studio} />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#05010D]/80" />

      {/* Purple Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05010D] via-[#05010D]/50 to-transparent" />

      {/* Grid Glow */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/grid.png')]" />

      {/* Floating Glass Card */}
      {/* <div className="hidden xl:block absolute top-[18%] right-[12%] w-[240px] rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl  p-6">
        <div className="w-14 h-14 rounded-2xl bg-[#7B2EFF]/20 border border-[#7B2EFF]/30 flex items-center justify-center mb-6">
          <Play className="text-[#F9B896]" size={24} />
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-[#F9B896] mb-3">
          Video Production
        </p>

        <h3 className="text-2xl font-bold leading-snug">
          Visuals That
          <br />
          Convert.
        </h3>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          Cinematic brand videos and creative marketing visuals
          engineered for engagement.
        </p>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 min-h-[85vh] flex items-center   ">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <p className="text-sm tracking-[0.2em] uppercase text-gray-300">
              Creative Studio
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
            Designs That
            <br />

            <span className="text-[#7B2EFF]">
              Speak.
            </span>

            <br />

            Videos That
            <br />

            <span className="text-[#F9B896]">
              Convert.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-10 text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl">
            Crafting premium brand identities, cinematic marketing
            videos, social media creatives, and high-converting
            digital experiences for modern brands.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <button className="group px-8 py-5 rounded-2xl bg-gradient-to-r from-[#7B2EFF] to-[#F9B896] font-semibold text-white flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#7B2EFF]/30">
              <a href="#works">
                Explore My Works
              </a>

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </button>

            <button className="px-8 py-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-3">
              <Play size={18} />

              Watch Showreel
            </button>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center gap-8 mt-16">
            {/* Mini Users */}
            {/* <div className="flex -space-x-4">
              <img
                src="/users/user1.jpg"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-[#05010D] object-cover"
              />

              <img
                src="/users/user2.jpg"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-[#05010D] object-cover"
              />

              <img
                src="/users/user3.jpg"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-[#05010D] object-cover"
              />
            </div> */}

            {/* <p className="text-gray-400">
              Trusted by 30+ brands worldwide
            </p> */}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#05010D] to-transparent" />
    </section>
  );
};

export default StudioHero;