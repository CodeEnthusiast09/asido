import Image from "next/image";
import { InfoCardProps } from "./types";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const InfoCard = ({ image, description }: InfoCardProps) => {
  return (
    <div className="w-full max-w-48 md:max-w-[380px] h-full flex flex-col">
      <div className="relative w-full aspect-square mb-4 overflow-hidden">
        <Image
          src={image ?? "/default-image.png"}
          alt={"info-image"}
          fill
          sizes="(max-width: 768px) 192px, 380px"
          className="object-cover"
          priority={false}
          loading="lazy"
          quality={85}
        />
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-foreground font-bold text-[15px] md:text-[25px] mb-auto leading-snug">
          {description}
        </p>
        <Link
          href="#"
          className="min-w-[130px] h-[33.14px] flex items-center font-bold text-nowrap text-primary-100 hover:no-underline cursor-pointer mt-[31.86px] md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 transition-colors"
        >
          READ MORE{" "}
          <FaChevronRight size={16} className="ml-3.5 md:w-5 md:h-5" />
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
