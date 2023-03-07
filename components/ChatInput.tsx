"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

type Props = {
  chatId: string;
};
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  // use SWR to get the Model
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // Loading Notification
    const notification = toast.loading("Chat GPT is thinking .....");

    await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId: chatId,
        model: model,
        session: session,
      }),
    }).then(() => {
      //On Success
      toast.success("Chat GPT has responded", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          className="bg-transparent rounded p-2 focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 "
          type="text"
          placeholder="Type your message here...."
          disabled={!session}
        />
        <button
          type="submit"
          disabled={!session || !prompt}
          className="disabled:bg-gray-400 disabled:cursor-not-allowed bg-[#11A37F] hover:opacity-40 text-white font-bold px-4 py-2 rounded"
        >
          <PaperAirplaneIcon className="h-5 w-5 text-white -rotate-45" />
        </button>
      </form>
      <div className="md:hidden">
        {/*Model Selection*/}
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;
