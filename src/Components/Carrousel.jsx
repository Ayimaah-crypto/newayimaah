// src/Components/FeatureCarousel.jsx
import { useState } from "react";
import pic1 from "../assets/Images/pic1.png"
import pic2 from "../assets/Images/pic2.png";
import pic3 from "../assets/Images/pic3.png";
import pic4 from "../assets/Images/pic4.png";
import pic5 from "../assets/Images/pic5.png";
import pic6 from "../assets/Images/pic6.png";
import pic7 from "../assets/Images/pic7.png";
import {
  FaGamepad,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const slides = [
  {
    title: "LUMIA",
    description:
      "Get free games, the best deals, plus a game-release calendar and gaming news all in one place.",
    image:
      pic1,
  },
  {
    title: "ECO FARMS",
    description:
      "Bring your browser alive with dynamic wallpapers and immersive experiences.",
    image:
      pic2,
  },
  {
    title: "ALZHEIMER'S",
    description:
      "Personalize your setup with themes, RGB colors and futuristic interfaces.",
    image:
      pic3,
  },
  {
    title: "YOGLAIT YOGURT AD",
    description:
      "Personalize your setup with themes, RGB colors and futuristic interfaces.",
    image:
      pic4,
  },
  {
    title: "YOGLAIT YOGURT AD",
    description:
      "Personalize your setup with themes, RGB colors and futuristic interfaces.",
    image:
      pic5,
  },
  {
    title: "YOGLAIT YOGURT AD",
    description:
      "Personalize your setup with themes, RGB colors and futuristic interfaces.",
    image:
      pic6,
  },
  {
    title: "YOGLAIT YOGURT AD",
    description:
      "Personalize your setup with themes, RGB colors and futuristic interfaces.",
    image:
      pic7,
  },
  
];

export default function FeatureCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative bg-[#0C0B15] py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-[#0C0B15] blur-[180px] rounded-full"></div>

      {/* Main Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4">

        {/* Carousel */}
        <div className="relative flex items-center justify-center">

          {/* Left Preview */}
          <div className="hidden lg:flex absolute left-[-180px] w-[260px] h-[500px] opacity-30 scale-90">
            <div className="w-full rounded-[40px] border border-[#F9B896] overflow-hidden bg-[#12081f]">
              <img
                src={slides[(current - 1 + slides.length) % slides.length].image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Card */}
          <div className="relative w-full max-w-6xl min-h-[540px] rounded-[40px] border border-[#F9B896] overflow-hidden bg-gradient-to-br from-[#12081f] to-[#0d0718] flex flex-col lg:flex-row">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#F9B896] text-2xl mb-8">
                <FaGamepad />
              </div>

              {/* Title */}
              <h2 className="text-5xl font-black tracking-wide text-[#d9d2ff] mb-8 uppercase">
                {slides[current].title}
              </h2>

              {/* Description */}
              <p className="text-[#9f96c0] text-xl leading-relaxed mb-10 max-w-xl">
                {slides[current].description}
              </p>

              {/* Line */}
              <div className="w-full h-px bg-gradient-to-r from-[#F9B896] to-transparent mb-10"></div>

              {/* Read More */}
              <button className="group flex items-center gap-4 text-[#F9B896] font-bold text-xl tracking-wide">
                READ MORE

                <span className="w-16 h-[2px] bg-[#F9B896] relative overflow-hidden">
                  <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700"></span>
                </span>
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center p-10">

              <div className="relative w-full max-w-[620px]">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Preview */}
          <div className="hidden lg:flex absolute right-[-180px] w-[260px] h-[500px] opacity-30 scale-90">
            <div className="w-full rounded-[40px] border border-[#F9B896] overflow-hidden bg-[#12081f]">
              <img
                src={slides[(current + 1) % slides.length].image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">

          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-pink-500/30 bg-white/5 hover:bg-[#F9B896] transition flex items-center justify-center text-white"
          >
            <FaChevronLeft />
          </button>

          {/* Indicators */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-10 h-3 bg-[#F9B896]"
                    : "w-3 h-3 bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-pink-500/30 bg-white/5 hover:bg-[#F9B896] transition flex items-center justify-center text-white"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}