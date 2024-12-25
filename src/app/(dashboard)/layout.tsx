import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <Header />
        {children}
      </div>
    </div>
  );
}
