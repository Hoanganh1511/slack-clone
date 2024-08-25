import React from "react";
import { GoogleIcon } from "../icons/google";

const logo = () => {
  return (
    <div className="flex pl-[18px] w-[240px] items-center">
      <GoogleIcon />
      <div className="inline-block ml-[4px]">
        <span className="text-[21px] font-medium text-[rgba(68,71,70,1)]">
          Photos
        </span>
      </div>
    </div>
  );
};

export default logo;
