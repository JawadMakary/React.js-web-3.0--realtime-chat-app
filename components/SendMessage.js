import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    // create db table for msg and get instance of messages
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.get("username"),
        ethAddress: user.get("ethAddress"),
        createdAt: new Date(),
      })
      .then(
        () => {
          setMessage("");
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form className="flex w-11/12 bottom-10 fixed bg-black opacity-80 px-6 py-4 shadow-xl rounded-full max-w-2xl border-blue-400 border-4">
      <input
        className="outline-none bg-transparent text-white border-4 placeholder-gray-500 border-none pr-5 flex-grow"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.get("username")}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500 "
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
