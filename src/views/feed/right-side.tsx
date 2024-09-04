import { HiInformationCircle } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const RightSide = () => {
  return (
    <>
      <div className="bg-white p-3 rounded-[8px] border-[1px] border-black/15">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-[16px] text-black/80">
            <span>Add to your feed</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer">
                <HiInformationCircle className="text-black/70 size-[18px]" />
              </div>
            </PopoverTrigger>
            <PopoverContent
              className=" bg-white p-0 w-[280px] shadow-lg"
              side="left"
            >
              <div className="px-4 py-2">
                <div className="text-[14px] text-black/80">
                  <span>
                    Follow things that interest you to personalize your feed.{" "}
                    <a href="#" className="text-primary font-medium">
                      Learn more
                    </a>
                  </span>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <ul className="mt-2 space-y-3">
          {tempData.map((user, idx) => {
            return (
              <li key={idx}>
                <div className="flex items-start">
                  <Avatar className="w-[42px] h-[42px]">
                    <AvatarImage
                      src={user.avatar_url}
                      alt="@shadcn"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-green-500 text-white">
                      TA
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-2 ">
                    <div className="text-[14px] font-semibold text-black/80">
                      <span>{user.name}</span>
                    </div>
                    <div className="text-[12px] text-black/60">
                      <span>{user.title}</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="group mt-2 rounded-[25px] border-[1px] border-black/80 h-fit px-[12px] py-[6px] hover:outline hover:outline-[1px] hover:outline-black/80"
                    >
                      <div className="flex items-center">
                        <FaPlus className="text-black/65 group-hover:text-black/90" />
                        <div className="font-bold ml-1 text-black/65 group-hover:text-black/90">
                          {" "}
                          <span>Follow</span>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RightSide;

const tempData = [
  {
    name: "Theo Browne",
    title: "CEO, Founder at Ping Labs (W22)",
    avatar_url:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "JavaScript Mastery",
    title: "Company E-Learning Providers",
    avatar_url:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Anoty",
    title: "SEO Content Marketing",
    avatar_url:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
  },
];
