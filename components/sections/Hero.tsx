import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-6 py-6 text-white lg:gap-1 lg:pt-25">
      <div className="heroLayout flex w-full flex-col gap-6 lg:gap-10 lg:flex-row lg:items-start">
        <div className="heroTextColumn flex w-full flex-col lg:w-3/4">
          <div className="mb-2 flex items-center gap-2 lg:mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm font-semibold text-text-secondary lg:text-sm">
              AVAILABLE FOR WORK
            </p>
          </div>

          <h1 className="mt-1 text-4xl font-medium tracking-tight text-text-primary font-sans lg:mt-5 lg:text-7xl">
            Manas Singh
          </h1>

          <h2 className="mt-1 text-3xl font-medium text-text-secondary font-sans italic lg:mt-0 lg:text-6xl">
            Fullstack Developer
          </h2>

          <p className="mt-3 max-w-full text-sm text-text-muted lg:mt-10 lg:max-w-3/4 lg:text-lg">
            I design and code beautifully simple things, — turning complex ideas
            into clean, fast interfaces people love using
          </p>

          <div className="mt-4 flex flex-row items-center gap-3 lg:mt-10 lg:gap-5">
            {/* <div className="flex items-center gap-4">
          <SocialButton imgSrc="/icons/linkdin.png" alt="LinkedIn" link="#" />
          <SocialButton imgSrc="/icons/github.svg" alt="GitHub" link="#" />
        </div> */}

            <div className="flex rounded-lg border-2 border-border hover:border-border-hover">
              <button className="cursor-pointer appearance-none px-5 py-2 text-sm font-semibold text-text-secondary  hover:text-text-hover transition-colors duration-5000">
                VIEW WORK
              </button>
            </div>
            <div className="flex rounded-lg border-2 border-border hover:border-border-hover">
              <button className="cursor-pointer appearance-none px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-hover transition-colors duration-5000">
                RESUME
              </button>
            </div>
          </div>
        </div>

        <div className="avatarContainer h-56 w-44 overflow-hidden lg:h-90 lg:w-70 lg:self-start lg:mt-10">
          <Image
            src="/assets/avatar.jpg"
            alt="Profile"
            width={280}
            height={360}
            className="block h-full w-full rounded-2xl border object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
