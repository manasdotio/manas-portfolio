import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import TechMarquee from "../components/sections/TechMarquee";
import Background from "../components/ui/Background";

export default function Page() {
  return (
    <Background>
      <main className="mx-auto w-full max-w-350 px-8 py-5 lg:pt-8 lg:px-24 ">
        <Header />
        <Hero />
        <TechMarquee />
      </main>
    </Background>
  );
}
