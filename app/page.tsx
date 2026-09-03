import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import TechMarquee from "../components/sections/TechMarquee";
import Background from "../components/ui/Background";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import Reveal from "../components/ui/Reveal";

export default function Page() {
  return (
    <Background>
      <ScrollProgress />
      <main className="mx-auto w-full max-w-350 px-4 sm:px-6 py-4 lg:pt-5 lg:px-24">
        <Header />
        <Hero />
        <div className="m-0 h-px w-full bg-[#2a2a2a]" aria-hidden="true" />
        <Reveal>
          <TechMarquee />
        </Reveal>
        <div className="m-0 h-px w-full bg-[#2a2a2a]" aria-hidden="true" />
        <Reveal delay={50}>
          <Projects />
        </Reveal>
        <div className="m-0 h-px w-full bg-[#2a2a2a]" aria-hidden="true" />
        <Reveal delay={50}>
          <About />
        </Reveal>
        <div className="m-0 h-px w-full bg-[#2a2a2a]" aria-hidden="true" />
        <Reveal delay={50}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </Background>
  );
}
