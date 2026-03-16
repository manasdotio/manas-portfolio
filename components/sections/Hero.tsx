import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-6 py-6 text-white lg:gap-1 lg:pt-25">
      <div className="heroLayout flex w-full flex-col gap-6 lg:gap-10 lg:flex-row lg:items-start">
        <div className="heroTextColumn flex w-full flex-col lg:w-3/4">
          <div className="mb-2 flex items-center gap-2 lg:mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm font-semibold text-gray-400 lg:text-sm">
              AVAILABLE FOR WORK
            </p>
          </div>

          <h1 className="mt-1 text-4xl font-medium text-neutral-200 font-instrument lg:mt-5 lg:text-7xl">
            Manas Singh
          </h1>

          <h2 className="mt-1 text-3xl font-medium text-neutral-500 font-sans italic lg:mt-0 lg:text-6xl">
            Frontend Developer
          </h2>

          <p className="mt-3 max-w-full text-sm text-gray-400 lg:mt-10 lg:max-w-3/4 lg:text-lg">
            I design and code beautifully simple things, — turning complex ideas
            into clean, fast interfaces people love using
          </p>

          <div className="mt-4 flex flex-row items-center gap-3 lg:mt-10 lg:gap-5">
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

        <div className="avatarContainer lg:w-1/4 lg:self-start">
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
