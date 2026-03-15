import Image from "next/image";
import SocialButton from "../ui/socials";

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-8 py-8 text-white lg:gap-10 lg:pt-20">
      <div className="flex w-full flex-col gap-15 lg:flex-row">
        <div className="flex w-full flex-col lg:w-3/4">
          <p className="text-2xl font-semibold text-gray-400 lg:text-3xl">HEY I&apos;M</p>

          <h1 className="bg-[url('/assets/mask.png')] bg-cover bg-center bg-clip-text text-6xl font-bold leading-none text-transparent lg:text-8xl lg:leading-normal">
            MANAS SINGH
          </h1>

          <h2 className="text-3xl font-medium text-white lg:text-7xl">FRONTEND DEVELOPER</h2>

          <p className="mt-4 max-w-150 text-xl text-gray-400 lg:max-w-full lg:text-3xl">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>

        <div className="lg:w-1/5">
          <Image
            src="/assets/avatar.jpeg"
            alt="Profile"
            width={420}
            height={420}
            className="w-full rounded-2xl border border-white object-cover lg:rounded-full"
          />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-8 lg:mt-5">
        <div className="flex items-center gap-4">
          <SocialButton imgSrc="/icons/linkdin.png" alt="LinkedIn" link="#" />
          <SocialButton imgSrc="/icons/github.svg" alt="GitHub" link="#" />
        </div>

        <div className="flex rounded-3xl border border-white">
          <button className="cursor-pointer rounded-3xl border-0 bg-black px-4 py-3 text-xl font-semibold text-white">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
