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
      {children}
    </div>
  );
}
