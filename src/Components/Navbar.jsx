// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePic from "../assets/Images/ProfilePic.jpeg"; // replace with your image

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
            <div className="flex items-center justify-between px-6 py-4 rounded-[24px] border border-white/10
             bg-white/[0.04] backdrop-blur-2xl flex items-center justify-between shadow-lg shadow-black/20">
                {/* Left side: Brand + Hamburger */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-2xl focus:outline-none"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                    <h1 className="text-xl font-bold text-[#F9B896]">AyimaahDev</h1>

                </div>

                {/* Right side: Profile Picture */}
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-[#F9B896]"
                />
            </div>

            {/* Slide-out Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-[#05010D] shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Profile inside menu */}
                <div className="flex flex-col items-center py-10 border-b border-white/10">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-[#7B2EFF] mb-4"
                    />
                    <h2 className="text-lg font-semibold">Theodora</h2>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col gap-6 px-8 py-10 text-lg font-medium">
                    <li>
                        <Link to="/" className="hover:text-[#F9B896] transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/developer-lab" className="hover:text-[#F9B896] transition">
                            Developer Lab
                        </Link>
                    </li>
                    <li>
                        <Link to="/creative-studio" className="hover:text-[#F9B896] transition">
                            Creative Studio
                        </Link>
                    </li>
                    <li>
                        <Link to="/novelist" className="hover:text-[#F9B896] transition">
                            Novelist
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Dark overlay when menu is open */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed  bg-black/50 "
                />
            )}
        </nav>
    );
};

export default Navbar;
