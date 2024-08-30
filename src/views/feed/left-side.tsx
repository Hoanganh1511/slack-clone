import Image from "next/image";
import Link from "next/link";
import { RiVipDiamondFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
const LeftSide = () => {
  return (
    <div className="">
      <div className="bg-white rounded-[8px] border-[1px] border-black/15">
        {/* Cover, Avatar & Information */}
        <div>
          <div className="relative h-[60px] w-full rounded-t-[8px] overflow-hidden">
            <Image
              alt="cover"
              fill
              className="object-cover"
              src="https://media.licdn.com/dms/image/v2/D5616AQFQ6tmtz54uPA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1687689210554?e=1730332800&v=beta&t=V6TQ5SJRRh7M-kx0pvptfjkZKQxaEvIa_e9d0whGPuw"
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-[64px] h-[64px] rounded-full bg-green-500 border-[2px] border-white">
              <span className="text-white">TA</span>
            </div>
            <div className="pt-[44px] pb-[16px] flex flex-col items-center justify-center">
              <span className="font-semibold">Tuan Anh Hoang</span>
              <span className="text-center text-[12px] text-black/70">
                Software Engineer at VTC Intecom
              </span>
            </div>
          </div>
          <div className="py-[12px] px-0 border-t-[1px] border-black/15">
            <Link
              href="#"
              className="block px-[12px] py-[4px] hover:bg-black/5 duration-100"
            >
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-black/60 font-semibold">
                  Connections
                </span>
                <span className="text-primary text-[12px] font-semibold">
                  12
                </span>
              </div>
              <div className="text-[12px] text-black font-semibold">
                <span className="">Grow your network</span>
              </div>
            </Link>
          </div>
          <div className=" border-t-[1px] border-black/15">
            <Link
              href="#"
              className="group block p-[12px] hover:bg-black/5 duration-100"
            >
              <div className="text-[12px] text-black/60 font-semibold">
                <div>Access exclusive tools & insights</div>
              </div>
              <div className="mt-[5px] flex items-center">
                <RiVipDiamondFill className="text-yellow-500 mr-[5px]" />
                <div className="text-[12px] text-black font-semibold group-hover:text-primary">
                  <span>Get hired faster with Premium</span>
                </div>
              </div>
            </Link>
          </div>
          <div className=" border-t-[1px] border-black/15">
            <Link
              href="#"
              className="group block p-[12px] hover:bg-black/5 duration-100"
            >
              <div className="mt-[5px] flex items-center">
                <FaBookmark className="text-black/50 mr-[5px]" />
                <div className="text-[12px] text-black font-semibold">
                  <span>Saved items</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Connects */}
        <div className=""></div>
        <div>{/* Get Premium */}</div>
        <div>{/* Saved Items */}</div>
      </div>
      <div className="mt-4 bg-white rounded-[8px] border-[1px] border-black/15">
        {/* Cover, Avatar & Information */}
        <div className="block py-[12px]">
          <div className="pl-[12px] text-[12px] text-black/60 font-semibold">
            <span>Recent</span>
          </div>
          <Link
            href="#"
            className="group mt-[5px] px-[12px] py-[4px] flex items-center hover:bg-black/5"
          >
            <HiUserGroup className="text-black/60 mr-[5px]" />
            <div className="pt-[3px] text-[12px] text-black font-semibold text-black/70 group-hover:font-bold group-hover:text-black">
              <span>Next.js</span>
            </div>
          </Link>
          <Link
            href="#"
            className="group px-[12px] py-[4px] flex items-center hover:bg-black/5 "
          >
            <HiUserGroup className="text-black/60 mr-[5px]" />
            <div className="pt-[3px] text-[12px] text-black font-semibold text-black/70 group-hover:font-bold group-hover:text-black">
              <span>JavaScript</span>
            </div>
          </Link>
        </div>
        <div className="border-t-[1px] border-black/15">
          <div className="block py-[12px]">
            <Link
              href="/groups"
              className="pl-[12px] text-[12px] text-[#0a66c2] font-bold hover:underline"
            >
              <span>Groups</span>
            </Link>
            <Link
              href="#"
              className="group mt-[5px] px-[12px] py-[4px] flex items-center hover:bg-black/5"
            >
              <HiUserGroup className="text-black/60 mr-[5px]" />
              <div className="pt-[3px] text-[12px] text-black font-semibold text-black/70 group-hover:font-bold group-hover:text-black">
                <span>Next.js</span>
              </div>
            </Link>
            <Link
              href="#"
              className="group px-[12px] py-[4px] flex items-center hover:bg-black/5"
            >
              <HiUserGroup className="text-black/60 mr-[5px]" />
              <div className="pt-[3px] text-[12px] text-black font-semibold text-black/70 group-hover:font-bold group-hover:text-black">
                <span>JavaScript</span>
              </div>
            </Link>
            <Link
              href="#"
              className="group block pl-[36px] pr-[12px] py-[4px] flex items-center hover:bg-black/5"
            >
              <div className="pt-[3px] text-[12px] text-black font-semibold text-black/70 group-hover:font-bold group-hover:text-black">
                <span>See all</span>
              </div>
            </Link>
          </div>
        </div>
        {/* Connects */}
        <div className=""></div>
        <div>{/* Get Premium */}</div>
        <div>{/* Saved Items */}</div>
      </div>
    </div>
  );
};

export default LeftSide;
