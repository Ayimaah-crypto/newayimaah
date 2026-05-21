import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import DeveloperLab from "./Pages/DeveloperLab"
import CreativeStudio from "./Pages/CreativeStudio"
import Novelist from "./Pages/Novelist"

export default function app() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/developer-lab" element={<DeveloperLab/>} />
        <Route path="/novelist" element={<Novelist/>} />
        <Route path="/creative-studio" element={<CreativeStudio/>} />
      </Routes>
    </Router>
  )
}