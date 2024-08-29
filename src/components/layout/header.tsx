import React from "react";
import { GoogleIcon } from "../icons/google";
import Search from "./search-header";
import Navigation from "./navigation";
import { FaLinkedin } from "react-icons/fa";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-[24px] h-[52px] bg-white">
      <div className="flex items-center w-[1128px] min-h-[100%] mx-auto">
        <FaLinkedin className="w-[40px] h-[40px] text-[#0a66c2]" />
        <Search />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
