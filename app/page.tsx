import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import TechMarquee from "../components/sections/TechMarquee";
import Background from "../components/ui/Background";
import Reveal from "../components/ui/Reveal";
import ScrollProgress from "../components/ui/ScrollProgress";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" aria-hidden="true" />
);

export default function Page() {
  return (
    <Background>
      <ScrollProgress />
      <main className="mx-auto w-full max-w-[1400px] px-6 py-6 md:px-12 lg:px-20 lg:py-10">
        <Header />
        <Hero />
        <Divider />
        <Reveal>
          <TechMarquee />
        </Reveal>
        <Divider />
        <Reveal>
          <Projects />
        </Reveal>
        <Divider />
        <Reveal>
          <About />
        </Reveal>
        <Divider />
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </Background>
  );
}
