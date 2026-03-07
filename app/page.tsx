import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PromptEngineering from "./components/PromptEngineering";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="grain relative min-h-screen bg-[#09090b]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PromptEngineering />
        <Contact />
      </main>
    </div>
  );
}
