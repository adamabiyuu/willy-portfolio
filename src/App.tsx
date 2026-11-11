import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`min-h-screen overflow-x-clip transition-colors duration-300 ${dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
      <Navbar dark={dark} onToggleTheme={() => setDark((current) => !current)} />

      <main>
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Experience dark={dark} />
        <Contact dark={dark} />
      </main>

      <Footer dark={dark} />
    </div>
  );
}

export default App;
