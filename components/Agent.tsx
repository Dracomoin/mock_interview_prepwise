  "use client";
  import React from "react";
  import Image from "next/image";
  import { cn } from "@/lib/utils";


  enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
  }

  interface AgentProps {
    userName: string;
  }

  const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;
    const messages = ["what is your name?", "my name is John Doe"];
    const lastMessage = messages[messages.length - 1];

    const handleCall = () => {
      // logic for initiating call
    };

    const handleDisconnect = () => {
      // logic for ending call
    };

    return (
      <>
        <div className="call-view">
          <div className="card-interviewer">
            <div className="avatar">
              <Image
                src="/ai-avatar.png"
                alt="vapi"
                width={65}
                height={54}
                className="object-cover"
              />
              {isSpeaking && <span className="animate-speak" />}
            </div>
            <h3>AI Interviewer</h3>
          </div>

          <div className="card-border">
            <div className="card-content">
              <Image
                src="/user-avatar.png"
                alt="user"
                width={540}
                height={540}
                className="rounded-full object-cover size-[120px]"
              />
              <h3>{userName}</h3>
            </div>
          </div>
        </div>

        {/* Uncomment this block if you want to show the last message */}
        {messages.length > 0 && (
          <div className='transcript-border mt-4'>
            <div className='transcript '>
              <p
                key={lastMessage}
                className={cn(
                  'transition-opacity duration-500 opacity-0',
                  'animate-fadeIn opacity-100'
                )}
              >
                {lastMessage}
              </p>
            </div>
          </div>
        )}

        <div className="w-full flex justify-center">
          {callStatus !== "ACTIVE" ? (
            <button className="relative btn-call mt-4" onClick={handleCall}>
              <span
                className={cn(
                  "absolute animate-ping rounded-full opacity-75",
                  callStatus !== "CONNECTING" && "hidden"
                )}
              />
              <span className="relative">
                {callStatus === "INACTIVE" || callStatus === "FINISHED"
                  ? "Call"
                  : ". . ."}
              </span>
            </button>
          ) : (
            <button className="btn-disconnect "  onClick={handleDisconnect}>
              End
            </button>
          )}
        </div>
      </>
    );
  };

  export default Agent;
