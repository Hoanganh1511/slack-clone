import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pt-[72px] h-screen">
        <div className="flex">
          <div className="w-[20%]">
            <Sidebar />
          </div>
          <div className="w-[80%]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
