"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/images/logo.png"
      onClick={handleClick}
    />
  );
};

export default Logo;
