"use client";
import { SafeUser } from "@/lib/types";

import Container from "@/components/container";
import Logo from "@/components/navbar/logo";
import Search from "@/components/navbar/search";
import UserMenu from "@/components/navbar/user-menu";
import Categories from "@/components/navbar/categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
