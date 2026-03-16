import Image from "next/image";
import SocialButton from "../ui/socials";

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-8 py-8 text-white lg:gap-1 lg:pt-20">
      <div className="flex w-full flex-col gap-15 lg:flex-row">
        <div className="flex w-full flex-col lg:w-3/4">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-2xl font-semibold text-gray-400 lg:text-sm">AVAILABLE FOR WORK</p>
          </div>

          <h1 className="text-6xl text-neutral-300 font-bold tracking-tight leading-none lg:text-5xl lg:leading-normal">
            MANAS SINGH
          </h1>

          <h2 className="text-3xl font-medium text-neutral-400 lg:text-5xl">FRONTEND DEVELOPER</h2>

          <p className="mt-4 max-w-150 text-xl text-gray-400 lg:max-w-full lg:text-2xl">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>

        <div className="lg:w-1/5">
          <Image
            src="/assets/avatar.jpeg"
            alt="Profile"
            width={180}
            height={180}
            className="w-full max-w-30 lg:max-w-50 h-auto rounded-full border object-cover lg:rounded-full"
          />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-5 lg:mt-5">
        {/* <div className="flex items-center gap-4">
          <SocialButton imgSrc="/icons/linkdin.png" alt="LinkedIn" link="#" />
          <SocialButton imgSrc="/icons/github.svg" alt="GitHub" link="#" />
        </div> */}

        <div className="flex rounded-xl border-2 border-neutral-700 ">
          <button className="cursor-pointer appearance-none px-5 py-2 text-sm font-semibold text-neutral-300">
            VIEW WORK
          </button>
        </div>
        <div className="flex rounded-xl border-2 border-neutral-700">
          <button className="cursor-pointer appearance-none px-5 py-2 text-sm font-semibold text-neutral-300">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
