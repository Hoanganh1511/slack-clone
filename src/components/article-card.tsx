"use client";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { IArticle } from "@/types/apiTypes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { TbRepeat } from "react-icons/tb";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ModalDetailReactions from "./modals/modal-detail-reactions";
import CommentBox from "./comment-box";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import ModalRepostWithThought from "./modals/modal-repost-with-thought";
import ModalSendPost from "./modals/modal-send-post";
interface IProps {
  article: IArticle;
}
const ArticleCard = ({ article }: IProps) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const followAction = (id: number) => {};
  const likeAction = (id: number) => {};
  const commentAction = () => {
    setShowCommentBox(true);
  };
  const repostAction = (id: number) => {};
  const sendAction = (id: number) => {};
  return (
    <div className="bg-white p-[12px_16px_8px_16px]  rounded-[8px] border-[1px] border-black/15 ">
      <div className="flex items-center">
        <div className="flex-1">
          <Link href="/something">
            <div className="flex items-start">
              <Avatar className="w-[48px] h-[48px]">
                <AvatarImage src={article.author.avatar_url} alt="@shadcn" />
                <AvatarFallback className="bg-green-500 text-white">
                  TA
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <div className="text-[14px] font-semibold leading-[14px] hover:underline">
                  <span>{article.author.name}</span>
                </div>
                <div className="mt-[4px] text-[12px] font-thin text-black/60 leading-[12px]">
                  <span>{article.author.title}</span>
                </div>
                <div className="mt-[4px] flex items-center">
                  <div className="text-[11px] text-black/50">
                    <span>{article.engagement.time_posted}</span>
                  </div>
                  <GiEarthAsiaOceania className="ml-2 size-[14px] text-black/50" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Button
            onClick={() => followAction(article.author.id)}
            variant="ghost"
            size="sm"
            className="hover:bg-primary/10"
          >
            <div className="flex items-center">
              <FaPlus className="size-[16px] mr-[6px] text-primary" />
              <div className="text-primary font-bold">
                <span>Follow</span>
              </div>
            </div>
          </Button>
        </div>
      </div>
      <div className="mt-2 text-[14px] text-black/85">
        {article.content.text}
      </div>
      <div className="relative mt-3 bg-black/5 h-[350px] -mx-4">
        <Image
          alt=""
          src="https://plus.unsplash.com/premium_photo-1661780440075-75263eb76824?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
        />
      </div>
      <div className="py-[10px] flex justify-between items-center">
        <Dialog>
          <DialogTrigger asChild>
            <button className="group h-[16px] px-0">
              <div className="flex items-center">
                <div className="">
                  <Image
                    alt=""
                    src="/icons/like.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                </div>
                <div className="">
                  <Image
                    alt=""
                    src="/icons/clap.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                </div>
                <div className="">
                  <Image
                    alt=""
                    src="/icons/question.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                </div>
                <div className="">
                  <Image
                    alt=""
                    src="/icons/heart.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                </div>
                <div className="">
                  <Image
                    alt=""
                    src="/icons/support.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                </div>
                <div className="">
                  <Image
                    alt=""
                    src="/icons/insight.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                </div>
                <div className="ml-[3px] text-[12px] text-black/70 group-hover:text-primary group-hover:underline">
                  <span>118</span>
                </div>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <ModalDetailReactions />
          </DialogContent>
        </Dialog>
        <div className="flex items-center">
          <Button
            variant="link"
            onClick={commentAction}
            className="text-[12px] text-black/50 px-2 h-[16px] hover:text-primary"
          >
            <span>{article.engagement.comments} comment</span>
          </Button>
          <div className="mx-1 w-[4px] h-[4px] rounded-full bg-black/40"></div>
          <Button
            variant="link"
            className="text-[12px] text-black/50 px-2 h-[16px] hover:text-primary"
          >
            <span>{article.engagement.reposts} reposts</span>
          </Button>
        </div>
      </div>
      <div className="flex items-center pt-2  border-t-[1px] border-black/10">
        <Button
          variant="ghost"
          className="group w-full hover:bg-black/5 duration-200 h-[48px]"
        >
          <div className="flex items-center">
            <HiOutlineHandThumbUp className="size-[24px] mr-[6px] text-black/65 group-hover:text-black/80" />
            <div className="text-black/65  group-hover:text-black/80 font-semibold ">
              <span>Like</span>
            </div>
          </div>
        </Button>
        <Button
          variant="ghost"
          onClick={commentAction}
          className="group w-full hover:bg-black/5 duration-200 h-[48px]"
        >
          <div className="flex items-center">
            <BiCommentDetail className="size-[24px] mr-[6px] text-black/65  group-hover:text-black/80" />
            <div className="text-black/65  group-hover:text-black/80 font-semibold">
              <span>Comment</span>
            </div>
          </div>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="group w-full  hover:bg-black/5 duration-200 h-[48px]"
            >
              <div className="flex items-center">
                <TbRepeat className="size-[24px] mr-[6px] text-black/65  group-hover:text-black/80" />
                <div className="text-black/65   group-hover:text-black/80 font-semibold">
                  <span>Repost</span>
                </div>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto bg-white p-0">
            <div className="py-2 ">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center px-6 py-2 hover:bg-black/5 cursor-pointer">
                    <FaRegEdit className="text-[20px]" />
                    <div className="ml-3">
                      <div className="text-[14px] text-black/80 font-semibold">
                        <span>Repost with your thoughts</span>
                      </div>
                      <div className="text-[12px] text-black/70">
                        <span>
                          Create a new post with User&apos;s post attached
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1128px]">
                  <ModalRepostWithThought />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <div className=" flex items-center  px-6 py-2 hover:bg-black/5 cursor-pointer">
                    <FaRegEdit className="text-[20px]" />
                    <div className="ml-3">
                      <div className="text-[14px] text-black/80 font-semibold">
                        <span>Repost</span>
                      </div>
                      <div className="text-[12px] text-black/70">
                        <span>
                          Instantly bring User&apos;s post to other&apos;s feeds
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1128px]">
                  <ModalRepostWithThought />
                </DialogContent>
              </Dialog>
            </div>
          </PopoverContent>
        </Popover>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="group w-full  hover:bg-black/5 duration-200 h-[48px]"
            >
              <div className="flex items-center">
                <IoPaperPlaneSharp className="size-[24px] mr-[6px] text-black/65 group-hover:text-black/80" />
                <div className="text-black/65  group-hover:text-black/80 font-semibold">
                  <span>Send</span>
                </div>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[1128px]">
            <ModalSendPost />
          </DialogContent>
        </Dialog>
      </div>
      {showCommentBox && (
        <div className="mt-2 ">
          <CommentBox
            avatarUrl={article.author.avatar_url}
            articleId={article.id}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
