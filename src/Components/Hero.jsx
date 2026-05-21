import homevid from "../assets/homevid.mp4"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-900 to-[] text-white text-center relative overflow-hidden">
      
      {/* Globe Video */}
      <div className="w-80 h-80 mt-16 mb-6 rounded-full overflow-hidden shadow-lg">
        <video
          src={homevid}   // replace with your globe video path
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Theodora Ayimaa Asare
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-l max-w-l mb-8">
        Architecting digital ecosystems, crafting visual narratives, and weaving
        tales for the modern intellect.
      </p>

      {/* Call to Action */}
      <a
        href="/developer-lab"
        className="px-8 py-4 rounded-2xl bg-[#F9B896] text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-[#F9B896]/20"
      >
        Explore Portfolio
      </a>
    </section>
  );
}
