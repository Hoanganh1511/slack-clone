import { Search } from "lucide-react";
import React from "react";

const SearchHeader = () => {
  return (
    <div className="flex-1 flex">
      <div className="max-w-[720px] my-[12px] h-[48px] bg-[rgba(233,238,246,1)] flex items-center flex-[0_1_50vw] rounded-[25px]">
        <div>
          <Search className="mx-[12px] my-[16px] w-[22px] h-[22px]" />
        </div>
        <input
          className="w-full h-full bg-transparent border-none outline-none placeholder:text-black"
          placeholder="Tìm kiếm ảnh và album của bạn"
        />
      </div>
    </div>
  );
};

export default SearchHeader;
