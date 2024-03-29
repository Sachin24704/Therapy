"use client";
import react from "react";
import Dashboard from "@/components/dashboard";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "@/firebase/auth";
import Chat from "@/components/Chat";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
const Chatbot = () => {
  const [msg, setMsg] = useState("");
  const [thinking, setThinking] = useState(false);
  const { isLoading, authUser, signout } = useAuth();
  // for auth
  const router = useRouter();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, isLoading]);

  const [chat, setChat] = useState([
    {
      role: "assisant",
      content: "Hi...how are you? Hope you are taking care of your feelings",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var responseData = "";
    setChat([...chat, { role: "user", content: msg }]);
    let input = msg;
    setMsg("");
    setThinking(true);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
          // You can add additional headers here if needed
        },
        body: JSON.stringify(msg),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      responseData = await res.json();
      console.log("Response data:", responseData.response);
    } catch (error) {
      console.error(error);
    }
    setThinking(false);
    setChat([
      ...chat,
      { role: "user", content: input },
      { role: "assisant", content: responseData.response },
    ]);
    // setMsg(""); // value displayed in input box
  };
  return !authUser ? (
    <Loader />
  ) : (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: 'url("/chatbot.jpg")' }}
    >
      <Dashboard isHome={false} bgColour={true} />
      <div className="flex flex-col min-h-screen ">
        <div>
          <div className="chat-container mb-32">
            {chat.map((chat, index) => {
              return <Chat key={index} props={chat} />;
            })}
            {/* <Chat /> */}
          </div>
        </div>
        {/* <div className="p-2 mb-0 fixed">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className=""
            type=""
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </form>
      </div> */}
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md">
          <div className="think">{thinking ? "Thinking..." : ""}</div>
          <form className=" flex items-center" onSubmit={handleSubmit}>
            <textarea
              rows="1"
              className="text-black   flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none mb-2 md:mb-0 "
              type="text"
              placeholder="Type your message..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
