import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../data/links";

const Header = () => {
  return (
    <header className="flex text-text-primary">
      <nav className="flex w-full items-center justify-between">
        <div className="text-3xl font-bold lg:text-2xl flex items-baseline justify-center gap-0">
          <span className="leading-none">MS</span>
          <span className="font-extrabold text-text-secondary font-instrument text-5xl leading-none -mt-1 -ml-1">.</span>
        </div>

        <ul className="hidden items-center gap-15 lg:flex">
          {SOCIAL_LINKS.map(({ platform, href }) => (
            <li key={platform}>
              <Link
                href={href}
                className="group flex lg:text-md font-semibold text-text-primary transition-colors duration-300 hover:text-white"
              >
                <div className="flex items-center">
                  {platform.toUpperCase()}
                  <div className="ml rotate-45 transition-transform duration-300 group-hover:rotate-90">
                    <Image src="/icons/up-arrow.svg" alt="" width={18} height={18} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
          <li className="flex items-center">
            <button className="cursor-pointer rounded-md border px-3 py-1 text-md font-semribold text-text-primary transition-colors duration-200 hover:border-text-secondary hover:text-text-secondary">
              CONTACT NOW
            </button>
          </li>
        </ul>

        <div className="lg:hidden">
          <Image
            src="/icons/ham.svg"
            alt="menu"
            width={30}
            height={30}
            className="w-7.5"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
