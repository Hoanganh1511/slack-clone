import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pt-[52px]">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default layout;
