// src/components/studio/StudioDo.jsx

import {
  FaPalette,
  FaVideo,
  FaBullhorn,
  FaPenNib,
} from "react-icons/fa";

const services = [
  {
    title: "Graphic Design",
    description: "Premium visuals for brands.",
    icon: <FaPalette />,
  },

  {
    title: "Video Production",
    description: "Cinematic videos that convert.",
    icon: <FaVideo />,
  },

  {
    title: "Brand Identity",
    description: "Modern identity systems.",
    icon: <FaBullhorn />,
  },

  
];

const StudioDo = () => {
  return (
    <section className="relative bg-[#05010D] text-white py-20 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#7B2EFF]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#F9B896]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 px-6 md:px-14">
        {/* Horizontal Row */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar">
          
          {/* TEXT CARD */}
          <div className="min-w-[320px] max-w-[320px] h-[260px] rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7  flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-[#F9B896] mb-4">
                Creative Studio
              </p>

              <h2 className="text-3xl font-black leading-tight">
                Creative
                <br />

                Solutions
                <br />

                <span className="text-[#7B2EFF]">
                  That Convert.
                </span>
              </h2>

              <p className="mt-5 text-sm text-gray-400 leading-relaxed">
                Premium visuals, videos and branding
                built for modern businesses.
              </p>
            </div>

          </div>

          {/* SERVICE CARDS */}
          {services.map((service, index) => (
            <div
              key={index}
              className="group min-w-[240px] max-w-[240px] h-[260px] rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 hover:border-[#7B2EFF]/40 transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#7B2EFF]/10 to-[#F9B896]/5" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-[#F9B896] mb-5">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="relative z-10 w-12 h-1 rounded-full bg-gradient-to-r from-[#7B2EFF] to-[#F9B896]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioDo;