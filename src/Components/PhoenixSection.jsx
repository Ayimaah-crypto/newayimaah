// src/components/studio/Phoenix.jsx

import vid from "../assets/studiov.mp4";

const Phoenix = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#05010D] ">
      
      {/* Small Header */}
      <div className="text-center mb-10 px-6">
        <p className="uppercase tracking-[0.3em] text-xs text-[#F9B896] mb-4">
          Featured Visual
        </p>

      </div>

      {/* BIG VIDEO */}
      <div className="relative w-full flex justify-center px-4 md:px-10">
        
        <div className="relative w-full max-w-[1400px] h-[300px] md:h-[400px] rounded-[35px] overflow-hidden border border-[#7B2EFF]/30 ">
          
          {/* Video */}
          <video
            src={vid}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-full object-cover"
          />

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-[#05010D]/90" />

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-14">
            <p className="uppercase tracking-[0.3em] text-xs text-[#F9B896] mb-5">
              Creative Motion
            </p>

            <h3 className="text-4xl md:text-7xl font-black leading-[0.95] text-white">
              Creativity
              <br />
              In Motion.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phoenix;