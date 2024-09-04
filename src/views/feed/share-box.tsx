import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiPhoto } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { MdNewspaper } from "react-icons/md";
import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import ModalShareMedia from "@/components/modals/modal-share-media";
import ModalCreateEvent from "@/components/modals/modal-create-event";
import Link from "next/link";
import ArticlesSection from "./articles-section";

const ShareBox = () => {
  return (
    <div className="bg-white p-[12px_16px_0px_16px]  rounded-[8px] border-[1px] border-black/15">
      <div className="flex">
        <Avatar className="size-[48px] mr-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-green-500 text-white">
            TA
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="h-full w-full border-[1px] border-black/40 rounded-[30px] flex items-center pl-4 text-[13px] font-semibold text-black/75 hover:bg-black/5 duration-100 cursor-pointer">
            <span>Start a post, try writing with AI</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="my-[5px]">
        <div className="flex items-center justify-around">
          <Dialog>
            <DialogTrigger asChild>
              <div className="group flex items-center py-[12px] px-[10px] rounded-[6px] hover:bg-black/5 cursor-pointer">
                <HiPhoto className="text-[#378fe9] size-[18px]" />
                <div className="ml-[6px] text-[14px] font-semibold text-black/60 group-hover:text-black/80 duration-100">
                  <span>Media</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1128px]">
              <ModalShareMedia />
            </DialogContent>
          </Dialog>
          {/*  */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group flex items-center py-[12px]  px-[10px] rounded-[6px] hover:bg-black/5 cursor-pointer">
                <FaCalendarAlt className="text-[#c37d16]  size-[18px]" />
                <div className="ml-[6px]  text-[14px] font-semibold text-black/60 group-hover:text-black/80 duration-100">
                  <span>Event</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[540px]">
              <ModalCreateEvent />
            </DialogContent>
          </Dialog>
          <Link href="/article/new">
            <div className="group flex items-center py-[12px]  px-[10px] rounded-[6px] hover:bg-black/5 cursor-pointer">
              <MdNewspaper className="text-[#e06847]  size-[18px]" />
              <div className="ml-[6px]  text-[14px] font-semibold text-black/60 group-hover:text-black/80 duration-100">
                <span>Write article</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShareBox;
