"use client";

import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

import { useParams } from "next/navigation";
import { Loader } from "lucide-react";

import { useGetCallById } from "@/hooks/useGetCallById";
// import Alert from '@/components/Alert';
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? "Meeting Setup" : "Meeting Room"}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
