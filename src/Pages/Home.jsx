// src/Pages/Home.jsx
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WindowCard from "../Components/WindowCard";
import Carousel from "../Components/Carrousel";
import FinalShowcase from "../Components/Finalsection";
import Footer from "../Components/Footer";
import FloatingContact from "../Components/FloatingContact";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0C0B15] via-[#0C0B15] to-[#0C0B15] min-h-screen text-white overflow-hidden">
      
      {/* Hero */}
      <Hero />

      {/* Smooth Divider */}
      <div className="flex justify-center py-10">
        <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
      </div>

      {/* Triple Treat */}
      <Navbar/>
      <WindowCard />
      <Carousel />
      <FinalShowcase />
      <FloatingContact/>
      <Footer/>
    </main>
  );
}