// src/Components/WindowCard.jsx
import { FaLaptopCode, FaPaintBrush, FaBookOpen } from "react-icons/fa";

const cards = [
  {
    title: "Developer Lab",
    text: "Engineering high-performance web applications.",
    icon: <FaLaptopCode />,
    video: "/assets/devlab.mp4",
    link: "/developer-lab",
    shape: "circle",
  },
  {
    title: "Creative Studio",
    text: "Crafting campaigns, visuals, and branding.",
    icon: <FaPaintBrush />,
    video: "/assets/studio.mp4",
    link: "/creative-studio",
    shape: "arch",
  },
  {
    title: "Novelist",
    text: "Exploring speculative fiction and essays.",
    icon: <FaBookOpen />,
    video: "/assets/novelist.mp4",
    link: "/novelist",
    shape: "circle",
  },
];

export default function WindowCard() {
  return (
    <section className="relative py-14 overflow-hidden">

      {/* Background Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[430px] h-[430px] rounded-full border border-purple-500/20"></div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#F9B896]">
          The Triple Treat
        </h1>

        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Creativity, engineering and imagination.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden
                border-[3px] border-[#F9B896]
                bg-[#0C0B15] backdrop-blur-sm
                shadow-[0_0_25px_rgba(168,85,247,0.25)]
                transition-all duration-500
                hover:scale-[1.03]
                group
                ${card.shape === "circle"
                  ? "w-[300px] h-[300px] rounded-full"
                  : "w-[300px] h-[340px] rounded-t-[170px] rounded-b-[32px]"
                }
              `}
            >

              {/* Video */}
              <video
                src={card.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0C0B15]"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 text-white">

                <div className="text-4xl text-purple-300 mb-4">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {card.text}
                </p>

                <a
                  href={card.link}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold
                  bg-gradient-to-r from-purple-500 to-fuchsia-500
                  hover:opacity-90 transition"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}