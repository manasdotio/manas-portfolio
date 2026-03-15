const headerLinks = [
  {
    label: "LINKDIN",
    href: "#home",
    icon: "/icons/up-arrow.svg",
  },
  {
    label: "GITHUB",
    href: "#home",
    icon: "/icons/up-arrow.svg",
  },
  {
    label: "X",
    href: "#home",
    icon: "/icons/up-arrow.svg",
  },
];
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex text-neutral-300">
      <nav className="flex w-full items-center justify-between">
        <div className="text-xl lg:text-2xl">MANAS</div>

        <ul className="hidden items-center gap-15 lg:flex">
          {headerLinks.map(({ label, href, icon }) => (
            <li key={label}>
               <Link href={href} className="group flex lg:text-l font-semibold text-neutral-300 transition-colors duration-300 hover:text-white">
                <div className="flex items-center">
                  {label}
                   <div className="ml rotate-45 transition-transform duration-300 group-hover:rotate-90">
                    <Image src={icon} alt="" width={18} height={18} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
          <li className="flex items-center rounded-3xl">
            <button className="cursor-pointer rounded-3xl border-0 bg-neutral-300 px-3 py-1 text-l font-semibold text-black">
              CONTACT NOW
            </button>
          </li>
        </ul>

        <div className="lg:hidden">
          <Image src="/icons/ham.svg" alt="menu" width={30} height={30} className="w-7.5" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
