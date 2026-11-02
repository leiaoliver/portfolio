import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackMarquee from "./components/StackMarquee";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Contact from "./components/Contact";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <RevealObserver />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <StackMarquee />
        <Experience />
        <Work />
        <Stack />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
