"use client";

import Container from "@/components/container";
import Logo from "@/components/navbar/logo";
import Search from "@/components/navbar/search";
import UserMenu from "@/components/navbar/user-menu";

const Navbar = () => {
  return (
    <div className="fiex w-full bg-ehite z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
