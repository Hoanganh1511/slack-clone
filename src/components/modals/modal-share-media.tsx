import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
const ModalShareMedia = () => {
  return (
    <div>
      <DialogHeader className="">
        <DialogTitle>Editor</DialogTitle>
      </DialogHeader>
      <div className="my-[80px] mx-auto">
        <div className="">
          <Image
            src="/images/upload-image-logo.png"
            alt="upload image logo"
            width={150}
            height={150}
            className="block mx-auto"
          />
          <p className="my-2 text-center font-bold text-[20px]">
            Select files to begin
          </p>
          <p className="text-center text-[13px] text-black/65">
            Share images or a single video in your post.
          </p>
          <Button
            type="button"
            variant="default"
            className="relative block mt-4 mx-auto text-white"
          >
            <input
              type="file"
              className="upload-file-btn absolute top-0 left-0 w-full h-full bg-transparent"
            />
            Upload from computer
          </Button>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" className="text-white">
          Next
        </Button>
      </DialogFooter>
    </div>
  );
};

export default ModalShareMedia;
