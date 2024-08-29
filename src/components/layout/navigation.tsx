"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
              <navItem.icon
                className={`text-[22px]  group-hover:text-black  ${
                  isActiveNavItem ? "text-black" : "text-black/65"
                }`}
              />
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
      </div>
    </div>
  );
};

export default Navigation;
