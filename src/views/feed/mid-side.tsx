import ArticlesSection from "./articles-section";
import ShareBox from "./share-box";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const MidSide = () => {
  return (
    <>
      <div className="bg-white p-[12px_16px_16px_16px]  rounded-[8px] border-[1px] border-black/15 mb-2">
        {/* <div className="mx-auto block w-fit"> */}
        <Avatar className="w-[74px] h-[74px] mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-green-500 text-white">
            TA
          </AvatarFallback>
        </Avatar>
        {/* </div> */}
        <div className="block w-fit mx-auto text-[18px] mt-2 mb-4">
          <span>Hi Tuan Anh, are you hiring ?</span>
        </div>
        <div className="block w-fit mx-auto mb-4 text-[14px] text-black/60">
          <span>Discorver free and easy ways to find a great hire, fast.</span>
        </div>
        <div className="flex items-center ">
          <button className="w-full py-[4px] rounded-full border-primary text-primary font-bold text-[14px] border-[1px]">
            Yes, I&apos;m hiring
          </button>
          <button className="w-full">No, not right now!</button>
        </div>
      </div>
      {/*  */}
      <ShareBox />
      <div className="mt-4">
        <ArticlesSection />
      </div>
    </>
  );
};

export default MidSide;
