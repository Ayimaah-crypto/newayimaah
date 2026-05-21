// src/components/studio/Latext.jsx
import vid1 from "../assets/studio/download.mp4"
import vid2 from "../assets/studio/Daffodil.mp4"
import vid3 from "../assets/studio/daf2.mp4"
import vid4 from "../assets/studio/blesspayvid.mp4"
import img2 from "../assets/studio/mayday1.png"
import vid6 from "../assets/studio/fare.mp4"
import vid7 from "../assets/studio/sales.mp4"
import vid8 from "../assets/studio/yogo.jpg"
import vid9 from "../assets/studio/have.mp4"
import img1 from "../assets/studio/blessus.png"
import img3 from "../assets/studio/salesbox.png"
import vid10 from "../assets/studio/nice.mp4"


import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Daffodil School Ad",
    category: "Video",
    video:vid2,
  },
  {
    title: "Blesspay little tweak",
    category: "Video",
    // image: "/images/fitfuel.png", // poster thumbnail
    video: vid1, // actual video file
  },
  {
    title: "Yoglait May day Post",
    category: "Design",
    image: img2,
  },
  {
    title: "Daffodil Admission Ad",
    category: "Video",
    // image: "/images/travelx.png",
    video: vid3,
  },
  {
    title: "Blesspay Ad. VoiceOver by Ayimaa",
    category: "Video",
    // image: "/images/travelx.png",
    video: vid4,
  },
  {
    title: "Farewell App Ad ",
    category: "Video",
    // image: "/images/travelx.png",
    video: vid6,
  },
  {
    title: "Salesboxpro May day post",
    category: "Design",
    image: img3,
    // video: "/videos/travelx.mp4",
  },
  {
    title: "Salesboxpro Ad. VoiceOver By Ayimaa",
    category: "Video",
    // image: "/images/travelx.png",
    video: vid7,
  },
  {
    title: "Daffodil Post",
    category: "Video",
    // image: "/images/travelx.png",
    video: vid10,
  },
  {
    title: "Blesspay ad",
    category: "Video",
    // image: "/images/travelx.png",
    video: vid9,
  },
];

const filters = ["All", "Design", "Video", "Branding"];

const Latext = () => {
  return (
    <section className="relative bg-[#05010D] text-white py-20 overflow-hidden">
      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#7B2EFF]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#F9B896]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 px-6 md:px-14 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.25em] text-xs text-[#F9B896] mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl font-black">Our Latest Work</h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((filter, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm font-semibold hover:border-[#7B2EFF]/40 transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Row */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-snap-x">
          {projects.map((project, i) => (
            <div
              key={i}
              className="scroll-snap-start min-w-[280px] max-w-[280px] rounded-[20px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl hover:border-[#7B2EFF]/40 transition-all duration-500 relative"
            >
              {/* Media */}
              <div className="h-[180px] w-full overflow-hidden">
                {project.category === "Video" && project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[140px]">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#F9B896] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold leading-snug">
                    {project.title}
                  </h3>
                </div>
                <div className="flex justify-end">
                  <FaExternalLinkAlt className="text-[#7B2EFF] hover:text-[#F9B896] transition-colors duration-300 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latext;
