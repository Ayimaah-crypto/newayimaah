// src/components/Projects.jsx
import pic1 from "../assets/Images/pic1.png"
import pic2 from "../assets/Images/pic2.png";
import pic3 from "../assets/Images/pic3.png";
import pic4 from "../assets/Images/pic4.png";
import pic5 from "../assets/Images/pic5.png";
import pic6 from "../assets/Images/pic6.png";
import pic7 from "../assets/Images/pic7.png";
import pic8 from "../assets/Images/pic8.png";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Lumea App",
    category: "AI Skin Care App",
    description:
      "Built together with an amazing team .",
    image: pic1,
    stack: ["React", "MongoDB", "Tailwind"],
    link: "https://lumeaai.netlify.app/",
  },

  {
    title: "Alzheimer's",
    category: "Advocacy site",
    description:
      "Advocacy site designed for non profit outreach in Ghana.",
    image: pic3,
    stack: ["Wordpress" ],
    link: "https://alzheimersgh.org/",
  },

  {
    title: "Dezlog",
    category: "Logistics",
    description:
      " site showcasing courier and freight services ",
    image: pic4,
    stack: ["Wordpress"],
    link: "https://dezlog.com/",
  },

  {
    title: "EchoFarms",
    category: "E-commence",
    description:
      "Agriculture Ad Management system, built together with a wonderful team",
    image: pic5,
    stack: ["React", "Tailwind" ],
    link: "https://echo-farms.netlify.app/",
  },
  {
    title: "Teckura",
    category: "Developer Platform",
    description:
      "A futuristic collaboration platform for developers and teams.",
    image: pic7,
    stack: ["React", "Tailwind" ],
    link: "https://tech-kura.vercel.app/",
  },
  {
    title: "Techbridges",
    category: "Developer Platform",
    description:
      "A tech site for a training tech company",
    image: pic8,
    stack: ["Wordpress" ],
    link: "https://techbridges.africa/about/",
  },
];

const Projects = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative bg-[#05010D] text-white px-6 md:px-14 py-28 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#7B2EFF]/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F9B896]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#F9B896] mb-4">
              Featured Work
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Things I've Built
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-[#7B2EFF]/20 transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={scrollRight}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-[#7B2EFF]/20 transition-all duration-300"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[360px] max-w-[360px] rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#7B2EFF]/40 transition-all duration-500 flex-shrink-0 group"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05010D] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="inline-flex px-4 py-2 rounded-full bg-[#7B2EFF]/10 border border-[#7B2EFF]/20 mb-5">
                  <p className="text-sm text-[#F9B896]">
                    {project.category}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F9B896] hover:text-black transition-all duration-300">
                    <a href={project.link}>
                        ↗
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;