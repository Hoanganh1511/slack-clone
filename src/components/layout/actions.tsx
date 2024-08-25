"use client";
import { CircleHelp, Grip, Settings, Upload } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
const Actions = () => {
  return (
    <div className=" ml-2 flex items-center">
      <div className="flex items-center">
        <Upload />
        <span className="inline-block ml-3 text-[14px] font-semibold">
          Tải lên
        </span>
      </div>
      <div className="ml-8">
        <Popover>
          <PopoverTrigger asChild>
            <CircleHelp className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="mr-6 mt-4 w-[400px] h-[560px] border-none rounded-[6px] shadow-[0px_0px_8px_rgba(0,0,0,0.4)]">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
      <div className="ml-8">
        <Popover>
          <PopoverTrigger asChild>
            <Settings className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="mr-6 mt-4 w-[400px] h-[560px] border-none rounded-[6px] shadow-[0px_0px_8px_rgba(0,0,0,0.4)]">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
      <div className="ml-8">
        <Popover>
          <PopoverTrigger asChild>
            <Grip className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="mr-6 mt-4 w-[400px] h-[560px] border-none rounded-[6px] shadow-[0px_0px_8px_rgba(0,0,0,0.4)]">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
      <div className="ml-8">
        <Popover>
          <PopoverTrigger asChild>
            <div className="w-[40px] h-[40px] rounded-full bg-green-500 flex items-center justify-center cursor-pointer">
              <span className="text-white font-bold">TA</span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="mr-6 mt-4 w-[400px] h-[560px] border-none rounded-[6px] shadow-[0px_0px_8px_rgba(0,0,0,0.4)]">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Actions;
