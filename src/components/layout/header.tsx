import React from "react";
import { GoogleIcon } from "../icons/google";
import Logo from "./logo";
import SearchHeader from "./search-header";
import Actions from "./actions";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[64px]">
      <div className="flex items-stretch px-[16px] h-[64px]">
        <Logo />
        <SearchHeader />
        <Actions />
      </div>
    </nav>
  );
};

export default Header;
