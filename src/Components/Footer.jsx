// src/components/Footer.jsx
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8 text-white">
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#7B2EFF]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        
        {/* Main Footer */}
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl px-8 md:px-12 py-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* LEFT */}
            <div>
              <h1
                className="text-3xl font-black tracking-tight"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Ayimaah
                <span className="text-[#F9B896]">
                  Dev
                </span>
              </h1>

              <p className="text-gray-400 mt-3 max-w-sm">
                Creative developer crafting futuristic
                digital experiences and visual stories.
              </p>
            </div>

            {/* CENTER NAV */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="developer-lap" className="hover:text-white transition">
                Projects
              </Link>

              <Link to="/creative-studio" className="hover:text-white transition">
                Studio
              </Link>

              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>

            {/* RIGHT SOCIALS */}
            <div className="flex items-center gap-4">
              
              <a
                href="https://github.com/Ayimaah-crypto"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-lg hover:bg-[#7B2EFF] transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/theodoraayimaah"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-lg hover:bg-[#7B2EFF] transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-lg hover:bg-[#7B2EFF] transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:ayimaahtheodora2022@gmail.com"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-lg hover:bg-[#7B2EFF] transition-all duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <p className="text-sm text-gray-500">
              © 2026 AyimaahDev
            </p>

            <p className="text-sm text-gray-500">
              Designed & Developed by Theodora
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;