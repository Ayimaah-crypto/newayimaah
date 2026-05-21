import LabHero from "../Components/LabHero"
import Projects from "../Components/Projects"
import TechStack from "../Components/TechStack"
import LetsBuild from "../Components/LetsBuild"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import FloatingContact from "../Components/FloatingContact"

export default function() {
    return(
        <main className="bg-gradient-to-b from-[#0C0B15] via-[#0C0B15] to-[#0C0B15] min-h-screen text-white overflow-hidden">
        
        <Navbar/>
        <LabHero/>
        <Projects/>
        <TechStack/>
        <LetsBuild/>
        <FloatingContact/>
       <Footer/>

        </main>
    )
}