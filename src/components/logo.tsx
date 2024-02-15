import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import LogoImage from "../../public/images/logo.png";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <>
      <Link href={"#"} className="flex flex-row">
        <Image
          alt="Kate Matveeva Logo"
          color="slate"
          src={LogoImage}
          width={43}
          height={43}
          quality={100}
        />
        <div className="relative h-[32px]">
          <p className="absolute top-[-6px] mx-1 text-2xl font-semibold tracking-normal text-zinc-800 dark:text-white">
            KaMa
          </p>
          <p className="absolute top-[18px] mx-1 text-xs font-light tracking-tight text-zinc-700 dark:text-white">
            documents
          </p>
        </div>
      </Link>
    </>
  );
};

export default Logo;
