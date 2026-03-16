import Image from "next/image";
import SocialButton from "../ui/socials";

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-8 py-8 text-white lg:gap-1 lg:pt-25">
      <div className="flex w-full flex-col gap-10 lg:gap-10 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col lg:w-3/4">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm font-semibold text-gray-400 lg:text-sm">
              AVAILABLE FOR WORK
            </p>
          </div>

          <h1 className="text-5xl mt-2  text-neutral-200 font-medium tracking-tight lg:mt-5 lg:text-7xl font-instrument">
            Manas Singh
          </h1>

          <h2 className="text-4xl font-medium text-neutral-500 lg:text-6xl font-sans italic">
            Frontend Developer
          </h2>

          <p className="mt-4 max-w-150 text-md text-gray-400 lg:mt-10 lg:max-w-3/4 lg:text-lg">
            I design and code beautifully simple things, — turning complex ideas
            into clean, fast interfaces people love using
          </p>

          <div className="mt-3 flex items-center gap-5 lg:mt-10">
            {/* <div className="flex items-center gap-4">
          <SocialButton imgSrc="/icons/linkdin.png" alt="LinkedIn" link="#" />
          <SocialButton imgSrc="/icons/github.svg" alt="GitHub" link="#" />
        </div> */}

            <div className="flex rounded-lg border-2 border-neutral-800 ">
              <button className="cursor-pointer appearance-none px-5 py-2 text-sm font-semibold text-neutral-300">
                VIEW WORK
              </button>
            </div>
            <div className="flex rounded-lg border-2 border-neutral-800">
              <button className="cursor-pointer appearance-none px-5 py-2 text-sm font-semibold text-neutral-300">
                RESUME
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 lg:self-start">
          <Image
            src="/assets/avatar.jpg"
            alt="Profile"
            width={280}
            height={360}
            className="h-56 w-44 lg:h-90 lg:w-70 rounded-2xl border object-cover lg:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
