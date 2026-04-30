import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
