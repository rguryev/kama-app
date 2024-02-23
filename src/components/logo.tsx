import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import LogoImage from "../../public/images/logo.svg";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <>
      <Link href={"#"} className="relative flex flex-row">
        <Image
          alt="Kate Matveeva Logo"
          color="slate"
          src={LogoImage}
          width={80}
          height={80}
          quality={100}
        />
      </Link>
    </>
  );
};

export default Logo;
