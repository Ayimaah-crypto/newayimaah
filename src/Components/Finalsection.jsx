// src/Components/FinalShowcase.jsx
import final from "../assets/Images/final.png"
import { Link } from "react-router-dom";
export default function FinalShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0C0B15] min-h-screen flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#0C0B15] blur-[180px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-[#d8d0ff] leading-none">
          LET'S BUILD
          <br />
          SOMETHING EPIC
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-2xl text-[#a09bb8] max-w-3xl mx-auto leading-relaxed">
          Crafting immersive digital experiences through engineering,
          storytelling and design.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            to="/creative-studio"
            className="
              inline-flex items-center gap-3
              bg-[#F9B896] hover:bg-[#8200DB]
              transition-all duration-300
              px-10 py-5
              text-lg font-bold
              rounded-xl
              shadow-[0_0_40px_rgba(236,72,153,0.4)]
            "
          >
            View Studio
          </Link>
        </div>

        {/* Main Image */}
        <div className="relative mt-20 flex justify-center">

          {/* Glow */}
          <div className="absolute bottom-0 w-[600px] h-[300px] bg-[#0C0B15] blur-[120px] rounded-full"></div>

          {/* Image */}
          <img
            src={final}
            alt="Gaming Setup"
            className="
              relative z-10
              w-full
              max-w-5xl
              object-contain
              
            "
          />
        </div>
      </div>
    </section>
  );
}