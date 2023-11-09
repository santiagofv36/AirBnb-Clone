"use client";

import Container from "@/components/container";
import Logo from "@/components/navbar/logo";
import Search from "@/components/navbar/search";
import UserMenu from "@/components/navbar/user-menu";
import { SafeUser } from "@/lib/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="fiex w-full bg-ehite z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
