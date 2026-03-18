import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import TechMarquee from "../components/sections/TechMarquee";
import Background from "../components/ui/Background";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Page() {
  return (
    <Background>
      <main className="mx-auto w-full max-w-350 px-8 py-5 lg:pt-8 lg:px-24 ">
        <Header />
        <Hero />
        <div className="m-0 h-px w-full bg-[#1a1a1a]" aria-hidden="true" />
        <TechMarquee />
        <div className="m-0 h-px w-full bg-[#1a1a1a]" aria-hidden="true" />
        <Projects />
        <div className="m-0 h-px w-full bg-[#1a1a1a]" aria-hidden="true" />
        <About />
        <div className="m-0 h-px w-full bg-[#1a1a1a]" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </Background>
  );
}
