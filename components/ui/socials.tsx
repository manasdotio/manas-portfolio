import Image from "next/image";
import Link from "next/link";

type SocialButtonProps = {
  imgSrc: string;
  alt: string;
  link: string;
};

const SocialButton = ({ imgSrc, alt, link }: SocialButtonProps) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-0 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
  >
    <Image
      src={imgSrc}
      alt={alt}
      width={24}
      height={24}
      className="h-full w-full object-contain transition-all duration-200 hover:grayscale-0"
    />
  </Link>
);

export default SocialButton;
