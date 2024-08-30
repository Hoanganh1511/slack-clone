"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
const navData = () => {
  return [
    {
      text: "Home",
      icon: GoHomeFill,
      href: "/feed",
    },
    {
      text: "My Network",
      icon: FaUserGroup,
      href: "/mynetwork/grow",
    },
    {
      text: "Jobs",
      icon: MdOutlineWork,
      href: "/jobs",
    },
    {
      text: "Messaging",
      icon: RiMessage2Fill,
      href: "/messaging",
    },
    {
      text: "Notifications",
      icon: FaBell,
      href: "/notifications?filter=all",
    },
  ];
};
const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="ml-auto">
      <div className="flex items-stretch ">
        {navData().map((navItem, idx) => {
          const isActiveNavItem = pathname.includes(navItem.href);
          return (
            <Link
              href={navItem.href}
              key={idx}
              className={`group min-w-[80px] flex flex-col items-center justify-center pt-[2px]`}
            >
              <div className="w-[24px] h-[24px] flex items-center justify-center">
                <navItem.icon
                  className={`text-[22px]  group-hover:text-black  ${
                    isActiveNavItem ? "text-black" : "text-black/65"
                  }`}
                />
              </div>
              <span
                className={`text-[12px]   group-hover:text-black ${
                  isActiveNavItem ? "text-black" : "text-black/65"
                }`}
              >
                {navItem.text}
              </span>
            </Link>
          );
        })}
        {/* User Manage Drop Menu */}
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="group min-w-[80px] flex flex-col items-center justify-center pt-[2px] cursor-pointer">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-green-500">
                  <span className="font-semibold text-white text-[11px]">
                    TA
                  </span>
                </div>
                <span className="flex  items-center text-[12px] text-black/65 group-hover:text-black">
                  Me <FaCaretDown className="" />
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="mt-[12px] w-[350px]  bg-white rounded-[6px]"
            >
              <div className="p-3">
                <Link href="/profile">
                  <div className="flex">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-green-500">
                      <span className="font-semibold text-white">TA</span>
                    </div>
                    <div className="flex-1 ml-2">
                      <span className="block font-bold text-[15px]">
                        Tuan Anh Hoang
                      </span>
                      <span className="inline-block text-[13px]">
                        Software Engineer at VTC Intecom
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="pt-3">
                  <Link
                    href="/profile"
                    className="block py-[3px] border-[1px] border-[#0a66c2] text-[#0a66c2] rounded-[16px] text-[14px] font-semibold text-center hover:bg-[#0a66c2]/5 duration-200 hover:ring-1 hover:ring-[#0a66c2]  hover:ring-inset"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              {/* <hr />
              <div className="p-3">
                <div>
                  <span className="">Account</span>
                </div>
              </div> */}
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>hehe</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
