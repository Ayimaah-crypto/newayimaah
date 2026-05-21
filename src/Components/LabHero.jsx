// src/components/Hero.jsx
import img from "../assets/Images/image.png"
const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#05010D] overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={img}
                    alt="Developer"
                    className="w-full h-full object-cover opacity-80"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05010D] via-[#05010D]/70 to-transparent" />

                {/* Purple Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B1195]/30 via-transparent to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 min-h-screen flex items-center">
                <div className="max-w-2xl">
                    {/* Small Badge */}
                    <div className="flex  mt-23">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <p className="text-sm tracking-wide text-gray-300">
                                Frontend Developer • UI Engineer
                            </p>
                        </div>
                    </div>


                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                        Building
                        <br />

                        <span className="text-[#7B2EFF]">
                            Digital
                        </span>

                        <br />
                        Experiences
                    </h1>

                    {/* Paragraph */}
                    <p className="mt-8 text-lg leading-relaxed text-gray-300 max-w-xl">
                        Architecting modern interfaces, premium web applications,
                        and immersive user experiences that blend creativity,
                        technology, and performance.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-5">
                        <button className="px-8 py-4 rounded-2xl bg-[#F9B896] text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-[#F9B896]/20">
                            <a href="#projects">
                                Explore Webs
                            </a>
                        </button>

                        {/* <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300">
                            Contact Me
                        </button> */}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-16">
                        <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                            <h3 className="text-3xl font-black text-[#F9B896]">
                                20+
                            </h3>

                            <p className="text-sm text-gray-400 mt-2">
                                Projects
                            </p>
                        </div>

                        <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                            <h3 className="text-3xl font-black text-[#F9B896]">
                                5+
                            </h3>

                            <p className="text-sm text-gray-400 mt-2">
                                Industries
                            </p>
                        </div>

                        <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                            <h3 className="text-3xl font-black text-[#F9B896]">
                                99%
                            </h3>

                            <p className="text-sm text-gray-400 mt-2">
                                Satisfaction
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#05010D] to-transparent" />
        </section>
    );
};

export default Hero;