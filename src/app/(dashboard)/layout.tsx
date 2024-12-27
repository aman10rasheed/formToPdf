import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import React from "react";

type Props = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full bg-gray-100 dark:bg-gray-800 font-roboto">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <div className="w-full h-full">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
