"use client";
import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactUserItem from "../react-user-item";
import { ReactionType } from "@/types/apiTypes";

const ModalDetailReactions = () => {
  return (
    <>
      <div>
        <DialogHeader className="">
          <DialogTitle>Reactions</DialogTitle>
        </DialogHeader>
        <div className="px-6 ">
          <Tabs defaultValue="account" className="">
            <TabsList>
              <TabsTrigger
                value="all"
                className="px-3 py-4 rounded-sm hover:bg-black/5 "
              >
                <div>
                  <span>All 111</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="like"
                className="px-3 py-4 rounded-sm hover:bg-black/5"
              >
                <div className="flex items-center  ">
                  <Image
                    alt=""
                    src="/icons/like.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                  <div className="ml-[4px]  font-semibold ">
                    <span>108</span>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="heart"
                className="px-3 py-4 rounded-sm hover:bg-black/5"
              >
                <div className="flex items-center ">
                  <Image
                    alt=""
                    src="/icons/heart.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                  <div className="ml-[4px] font-semibold ">
                    <span>25</span>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="support"
                className="px-3 py-4 rounded-sm hover:bg-black/5"
              >
                <div className="flex items-center ">
                  <Image
                    alt=""
                    src="/icons/support.svg"
                    width={16}
                    height={16}
                    className="size-[16px]"
                  />
                  <div className="ml-[4px]  font-semibold ">
                    <span>4</span>
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
            <div className="w-full max-h-[500px] overflow-y-scroll">
              <TabsContent value="all">
                <div className="py-6">
                  <div className="space-y-2">
                    {tempData.map((singleUser, idx) => {
                      return (
                        <ReactUserItem
                          key={idx}
                          avatar={singleUser.avatar}
                          name={singleUser.name}
                          connectionDegree={singleUser.connectionDegree}
                          title={singleUser.title}
                          skills={singleUser.skills || []}
                          reacted={singleUser.reacted}
                        />
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="like">
                <div className="py-6">
                  <div className="space-y-2">
                    {tempData.map((singleUser, idx) => {
                      return (
                        <ReactUserItem
                          key={idx}
                          avatar={singleUser.avatar}
                          name={singleUser.name}
                          connectionDegree={singleUser.connectionDegree}
                          title={singleUser.title}
                          skills={singleUser.skills || []}
                          reacted={singleUser.reacted}
                        />
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="heart">
                <div className="py-6">
                  <div className="space-y-2">
                    {tempData.map((singleUser, idx) => {
                      return (
                        <ReactUserItem
                          key={idx}
                          avatar={singleUser.avatar}
                          name={singleUser.name}
                          connectionDegree={singleUser.connectionDegree}
                          title={singleUser.title}
                          skills={singleUser.skills || []}
                          reacted={singleUser.reacted}
                        />
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="support">
                <div className="py-6">
                  <div className="space-y-2">
                    {tempData.map((singleUser, idx) => {
                      return (
                        <ReactUserItem
                          key={idx}
                          avatar={singleUser.avatar}
                          name={singleUser.name}
                          connectionDegree={singleUser.connectionDegree}
                          title={singleUser.title}
                          skills={singleUser.skills || []}
                          reacted={singleUser.reacted}
                        />
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ModalDetailReactions;
const tempData = [
  {
    name: "Netika Srivastava",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
    connectionDegree: "3rd+",
    title: "Art Teacher Lead",
    skills: [],
    reacted: "like" as ReactionType,
  },
  {
    name: "Balram Singh Rajput",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
    connectionDegree: "3rd+",
    title: "Frontend Developer",
    skills: ["React", "JavaScript"],
    reacted: "heart" as ReactionType,
  },
  {
    name: "Muhammad Hamza Zafar",
    avatar:
      "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    connectionDegree: "",
    title: "Frontend Developer",
    skills: [
      "JavaScript",
      "React Js",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Python",
      "Django",
      "CSS3+MATERIAL-UI",
    ],
    reacted: "like" as ReactionType,
  },
  {
    name: "Vartika Shrivastava",
    avatar:
      "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    connectionDegree: "3rd+",
    title: "Full Stack Developer",
    skills: ["Typescript", "jconder"],
    reacted: "support" as ReactionType,
  },
  {
    name: "Cristiano Ronaldo",
    avatar:
      "https://images.unsplash.com/photo-1724064710352-3cbcee4bc3a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9uYWxkb3xlbnwwfHwwfHx8MA%3D%3D",
    connectionDegree: "3rd+",
    title: "Full Stack Developer",
    skills: ["Typescript", "jconder"],
    reacted: "insight" as ReactionType,
  },
  {
    name: "Leo Messi",
    avatar:
      "https://images.unsplash.com/photo-1672087537910-3644f885e9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lc3NpfGVufDB8fDB8fHww",
    connectionDegree: "3rd+",
    title: "Full Stack Developer",
    skills: ["Typescript", "jconder"],
    reacted: "like" as ReactionType,
  },
  {
    name: "Bruno Fernades",
    avatar:
      "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    connectionDegree: "3rd+",
    title: "Full Stack Developer",
    skills: ["Typescript", "jconder"],
    reacted: "question" as ReactionType,
  },
];
