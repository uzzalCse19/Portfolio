import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
// import Footer from "./pages/Footer/Footer"; // ✅ Correct path

import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Header/Foeter/Footer";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#04081A]">
      <Header />

      <main className="flex-grow">
        {isOnePage ? (
          <>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </main>

      <Footer />
    </div>
  );
}
