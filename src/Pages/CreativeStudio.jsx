import StudioHero from "../Components/StudioHero"
import StudioDo from "../Components/StudioDo"
import Latext from "../Components/Latext"
import PhoenixSection from "../Components/PhoenixSection"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import FloatingContact from "../Components/FloatingContact"
export default function() {
    return(
        <main className="bg-gradient-to-b from-[#0C0B15] via-[#0C0B15] to-[#0C0B15] min-h-screen text-white overflow-hidden">
        <Navbar/>
        <StudioHero/>
        <StudioDo/>
        <PhoenixSection/>
        <Latext/>
        <FloatingContact/>
        <Footer/> 
        </main>
    )
}