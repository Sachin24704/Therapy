"use client";
import react from "react";
import { useState, useEffect } from "react";
import Chat from "@/components/Chat";
const chatbot = () => {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    {
      role: "assisant",
      content: "Hi...how are you? Hope you are taking care of your feelings",
    },
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setChat([...chat, { role: "user", content: msg }]);
    setMsg(""); // value displayed in input box
  };
  return (
    <div className="flex-col bg-slate-600 min-h-screen ">
      <div className="chat-container">
        {chat.map((chat, index) => {
          return <Chat key={index} props={chat} />;
        })}
        {/* <Chat /> */}
      </div>
      <div className="w-fit">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className=""
            type=""
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default chatbot;
