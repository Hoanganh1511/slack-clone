import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchHeader = () => {
  return (
    <div className="ml-2 flex-1">
      <div className="group relative max-w-[280px] focus-within:max-w-full duration-200">
        <div className="w-full ">
          <input
            className="w-full px-[40px] h-[34px] bg-[#edf3f8] rounded-[4px] placeholder:text-[13.5px] placeholder:text-black focus:outline focus:outline-[2px] focus:outline-black/70"
            placeholder="Search"
          />
          <div className="absolute w-[40px] h-[34px] top-0 left-0 flex items-center justify-center">
            <IoSearch />
          </div>
          <div>{/* Menu search */}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
