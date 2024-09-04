"use client";
import { FaRegSmile } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
interface IProps {
  avatarUrl: string;
  articleId: number;
}
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const CommentBox = ({ avatarUrl, articleId }: IProps) => {
  return (
    <div className="pb-3 rounded-sm">
      <div className="flex items-center">
        <Avatar className="w-[32px] h-[32px]">
          <AvatarImage src={avatarUrl} alt="@shadcn" />
          <AvatarFallback className="bg-green-500 text-white">
            TA
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 ml-2 relative flex items-center overflow-y-visible  border-[1px] border-black/30 rounded-[25px] pl-4  focus-within:shadow-[inset_0px_0px_2px_rgba(0,0,0,1)]">
          <input
            className="flex-1 rounded-sm bg-transparent outline-none border-none text-[14px] leading-[14px] placeholder:text-[14px] placeholder:text-black/50 text-black/80"
            placeholder="Add a comment..."
            autoFocus
          />

          <div className="flex items-center">
            <Button
              variant="ghost"
              className="px-[10px] rounded-full hover:bg-black/5"
            >
              <FaRegSmile className="size-[20px]" />
            </Button>
            <Button
              variant="ghost"
              className="px-[10px] rounded-full hover:bg-black/5"
            >
              <HiPhoto className="size-[20px]" />
            </Button>
          </div>
        </div>
      </div>
      {/* List other comments */}
      <div className="mt-4">
        {dataComments.map((dataComment, idx) => {
          return (
            <CommentUser
              key={idx}
              user={dataComment.user}
              content={dataComment.content}
              reactions={dataComment.reactions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
interface ICommentUserProps {
  user: any;
  content: any;
  reactions: any[];
}
const CommentUser = ({ user, content, reactions }: ICommentUserProps) => {
  return (
    <div className="flex items-start">
      <Avatar className="w-[32px] h-[32px]">
        <AvatarImage src={user.avatar_url} alt="@shadcn" />
        <AvatarFallback className="bg-green-500 text-white">TA</AvatarFallback>
      </Avatar>
      <div className="flex-1 ml-2">
        <div className="text-[14px] font-semibold leading-normal">
          <span>{user.name}</span>
        </div>
        <div className="text-[12px] leading-[12px] text-black/60">
          <span>{user.title}</span>
        </div>
        <div className="mt-2 text-[14px] text-black/80">
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};
const dataComments = [
  {
    id: 12343,
    user: {
      name: "Alexandre Zajac",
      avatar_url:
        "https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "SDE & AI @Amazon",
    },
    content: "That's a great plan !",
    reply: [],
    reactions: [
      {
        liked: [
          {
            user: {
              id: 543,
              name: "Fozia Bibi",
              avatar_url:
                "https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
              title: "Affiliate Marketing Expert | Online Marketing Strategist",
            },
          },
          {
            user: {
              id: 543,
              name: "Fozia Bibi",
              avatar_url:
                "https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
              title: "Affiliate Marketing Expert | Online Marketing Strategist",
            },
          },
        ],
      },
    ],
  },
];
