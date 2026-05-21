// src/components/FloatingContact.jsx

import { useState } from "react";
import {
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[#7B2EFF] to-[#F9B896] text-white text-2xl shadow-2xl shadow-[#7B2EFF]/30 flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        <FaEnvelope />
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm px-6 py-10">
          
          {/* FORM CONTAINER */}
          <div className="relative w-full max-w-xl mx-auto rounded-[35px] border border-white/10 bg-[#05010D]/95 backdrop-blur-2xl p-8 md:p-10 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#7B2EFF]/10 blur-[120px] rounded-full" />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:bg-[#7B2EFF] transition-all duration-300"
            >
              <FaTimes />
            </button>

            {/* CONTENT */}
            <div className="relative z-10">
              
              {/* Heading */}
              <p className="uppercase tracking-[0.3em] text-xs text-[#F9B896] mb-4">
                Contact Me
              </p>

              <h2
                className="text-4xl md:text-5xl font-black leading-tight text-white"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Let’s Work
                <br />

                Together.
              </h2>

              <p className="mt-5 text-gray-400 leading-relaxed">
                Have a project, collaboration or creative idea?
                Send me a message.
              </p>

              {/* FORM */}
              <form
                action="https://formsubmit.co/ayimaahtheodora2022@gmail.com"
                method="POST"
                className="mt-10 space-y-5"
              >
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-white outline-none focus:border-[#7B2EFF] transition-all"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-white outline-none focus:border-[#7B2EFF] transition-all"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white outline-none focus:border-[#7B2EFF] transition-all resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#7B2EFF] to-[#F9B896] font-semibold text-white hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContact;