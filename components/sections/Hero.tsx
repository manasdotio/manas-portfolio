import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex w-full flex-col gap-6 pt-12 pb-16 lg:pt-24 lg:pb-20">
      <div className="heroLayout flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="heroTextColumn flex w-full flex-col lg:w-3/4">
          <div className="hero-rise mb-4 flex items-center gap-2.5" style={{ animationDelay: "0ms" }}>
            <span className="h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
            <p className="text-[11px] font-medium tracking-[0.15em] text-text-muted uppercase">
              Available for work
            </p>
          </div>

          <h1 className="hero-rise font-instrument text-5xl font-medium tracking-tight text-text-primary md:text-6xl lg:text-[80px] lg:leading-[0.9]" style={{ animationDelay: "80ms" }}>
            Manas Singh
          </h1>

          <h2 className="hero-rise text-gradient mt-1 font-instrument text-4xl font-medium italic md:text-5xl lg:text-[64px] lg:leading-[1]" style={{ animationDelay: "160ms" }}>
            Fullstack Developer
          </h2>

          <p className="hero-rise mt-6 max-w-[560px] text-[15px] leading-relaxed text-text-muted lg:mt-10 lg:text-base" style={{ animationDelay: "240ms" }}>
            I design and build complete web applications — from database to UI, focused on clean code and products that actually work.
          </p>

          <div className="hero-rise mt-8 flex flex-row items-center gap-3 lg:mt-12" style={{ animationDelay: "320ms" }}>
            <a
              href="#projects"
              className="rounded-sm border border-text-primary bg-text-primary px-6 py-3 text-[11px] font-medium tracking-[0.12em] text-[#050505] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_24px_-8px_rgba(196,181,253,0.45)]"
            >
              View Work
            </a>
            <a
              href="#"
              className="rounded-sm border border-border bg-transparent px-6 py-3 text-[11px] font-medium tracking-[0.12em] text-text-secondary uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-text-muted hover:text-text-primary"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="avatarContainer hero-rise mt-4 h-52 w-40 flex-shrink-0 overflow-hidden rounded-xl border border-border lg:mt-8 lg:h-[340px] lg:w-[260px]" style={{ animationDelay: "400ms" }}>
          <Image
            src="/assets/avatar.jpg"
            alt="Manas Singh"
            width={260}
            height={340}
            className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
