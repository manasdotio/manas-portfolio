import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import TechMarquee from "../components/sections/TechMarquee";
import Background from "../components/ui/Background";
import Projects from "../components/sections/Projects";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-350 px-8 py-5 lg:pt-8 lg:px-24 ">
      <Background>
        <Header />
        <Hero />
        <TechMarquee />
      <Projects />
      </Background>
    </main>
  );
}
2