"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Underline from "@tiptap/extension-underline";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaCaretDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
const Tiptap = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="group min-w-[80px] flex items-center justify-center pt-[2px] cursor-pointer">
              <div className="cursor-pointer">
                <Avatar className="w-[40px] h-[40px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className="bg-green-500 text-white">
                    TA
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3 flex items-start">
                <div>
                  <p className="font-bold text-[14.5px] max-w-[114px] line-clamp-1">
                    Tuan Anh Hoang
                  </p>
                  <p className="text-sm text-black/70">Individual article</p>
                </div>
                <div className="ml-[8px] pt-[3px]">
                  <FaCaretDown className="size-[14px]" />
                </div>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="mt-[12px] w-[350px]  bg-white rounded-[6px]"
          >
            <div className="p-3">
              <Link href="/profile">
                <div className="flex">
                  <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-green-500">
                    <span className="font-semibold text-white">TA</span>
                  </div>
                  <div className="flex-1 ml-2">
                    <span className="block font-bold text-[15px]">
                      Tuan Anh Hoang
                    </span>
                    <span className="inline-block text-[13px]">
                      Software Engineer at VTC Intecom
                    </span>
                  </div>
                </div>
              </Link>
              <div className="pt-3">
                <Link
                  href="/profile"
                  className="block py-[3px] border-[1px] border-[#0a66c2] text-[#0a66c2] rounded-[16px] text-[14px] font-semibold text-center hover:bg-[#0a66c2]/5 duration-200 hover:ring-1 hover:ring-[#0a66c2]  hover:ring-inset"
                >
                  View Profile
                </Link>
              </div>
            </div>

            <DropdownMenuSeparator />
            {/* <DropdownMenuGroup>
                <DropdownMenuItem>hehe</DropdownMenuItem>
              </DropdownMenuGroup> */}
          </DropdownMenuContent>
        </DropdownMenu>
        <Toolbar editor={editor} content={content} />
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline" className="rounded-full">
                <div className="flex items-center">
                  <span className="text-primary font-semibold">Manage</span>
                  <FaCaretDown className="ml-2 text-primary" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="ml-4 py-[2px] rounded-full">
            <div className="flex items-center">
              <span className="font-semibold">Next</span>
              <FaArrowRightLong className="ml-2" />
            </div>
          </Button>
        </div>
      </div>
      {/* <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} /> */}
    </div>
  );
};

export default Tiptap;
