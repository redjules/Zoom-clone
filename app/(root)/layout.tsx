//import { StreamVideoProvider } from "@stream-io/video-react-sdk";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
