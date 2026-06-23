import { Route, Routes } from "react-router-dom"
import Hero from "../pages/Hero/Hero.jsx"
import About from "../pages/About/About.jsx"
import Experience from "../pages/Experience/Experience.jsx"
import Projects from "../pages/Projects/Projects.jsx"
import Contact from "../pages/Contact/Contact.jsx"

export default function AppRouter() {
    return (
        <Routes >
            <Route path="/" element={<Hero />} />
            <Route path="/John/About" element={<About />} />
            <Route path="/John/Experience" element={<Experience />} />
            <Route path="/John/Projects" element={<Projects />} />
            <Route path="/John/Contact" element={<Contact />} />
        </Routes>
    )
}