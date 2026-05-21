// src/components/TechStack.jsx

import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiFigma,
  SiWordpress,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <SiReact />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "Firebase",
    icon: <SiFirebase />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "Figma",
    icon: <SiFigma />,
  },

  {
    name: "WordPress",
    icon: <SiWordpress />,
  },
];

const TechStack = () => {
  return (
    <section className="relative bg-[#05010D] text-white px-6 md:px-14 py-28 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#7B2EFF]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#F9B896]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-[#F9B896] mb-4">
            My Tech Stack
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Technologies I Use
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-[#7B2EFF]/40 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#7B2EFF]/10 to-[#F9B896]/5" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl text-[#F9B896] mb-6 group-hover:scale-110 transition-all duration-500">
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold">
                  {tech.name}
                </h3>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-[#7B2EFF]/20 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;