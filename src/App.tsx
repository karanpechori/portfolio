import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
