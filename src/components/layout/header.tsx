import React from "react";
import { GoogleIcon } from "../icons/google";
import Search from "./search-header";
import Navigation from "./navigation";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  return (
    <header className="fixed z-[50] top-0 left-0 w-full px-[24px] h-[52px] bg-white border-b-[1px] border-black/10">
      <div className="container mx-auto flex items-center min-h-[100%]">
        <Link href="/">
          <FaLinkedin className="w-[40px] h-[40px] text-[#0a66c2]" />
        </Link>
        <Search />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
