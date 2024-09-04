import { ReactionType } from "@/types/apiTypes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

interface IProps {
  avatar: string;
  name: string;
  connectionDegree: string;
  title: string;
  skills: string[];
  reacted: ReactionType;
}
const getReaction = (colorType: ReactionType) => {
  switch (colorType) {
    case "like":
      return (
        <Image
          alt=""
          src="/icons/like.svg"
          width={12}
          height={12}
          className="size-[12px]"
        />
      );
    case "heart":
      return (
        <Image
          alt=""
          src="/icons/heart.svg"
          width={12}
          height={12}
          className="size-[12px]"
        />
      );
    case "question":
      return (
        <Image
          alt=""
          src="/icons/question.svg"
          width={12}
          height={12}
          className="size-[12px]"
        />
      );
    case "support":
      return (
        <Image
          alt=""
          src="/icons/support.svg"
          width={12}
          height={12}
          className="size-[12px]"
        />
      );
    case "insight":
      return (
        <Image
          alt=""
          src="/icons/insight.svg"
          width={12}
          height={12}
          className="size-[12px]"
        />
      );
  }
};
const ReactUserItem = ({
  avatar,
  name,
  connectionDegree,
  title,
  skills = [],
  reacted,
}: IProps) => {
  return (
    <div className="p-[8px_8px_8px_8px]">
      <div className="flex">
        <div className="relative h-fit">
          <Avatar className="relative w-[48px] h-[48px]">
            <AvatarImage src={avatar} alt="@shadcn" className="object-cover" />
            <AvatarFallback className="bg-green-500 text-white">
              TA
            </AvatarFallback>
          </Avatar>{" "}
          <div className="absolute bottom-0 right-0 size-[16px] shadow-md border-[1px] border-white bg-white rounded-full flex items-center justify-center">
            {getReaction(reacted)}
          </div>
        </div>
        <div className="ml-2">
          <div className="">
            <span className="font-semibold">{name}</span>
            <span className="inline-block ml-2 text-[14px] font-regular text-black/70">
              {connectionDegree}
            </span>
          </div>
          <div className="font-regular text-[13px] text-black/60">
            <span>
              {title} -{" "}
              {skills.map((skill, id) => {
                return `${skill} ${id !== skills.length - 1 ? "|" : ""}`;
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactUserItem;
