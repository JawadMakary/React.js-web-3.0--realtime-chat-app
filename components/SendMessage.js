import { useMoralis } from "react-moralis";

const SendMessage = () => {
  const { user } = useMoralis();
  return (
    <form className="flex w-11/12 bottom-10 fixed bg-black opacity-80 px-6 py-4 shadow-xl rounded-full max-w-2xl border-blue-400 border-4">
      <input
        className="outline-none bg-transparent text-white border-4 placeholder-gray-500 border-none pr-5 flex-grow"
        type="text"
        placeholder={`Enter a message ${user.get("username")}...`}
      />
      <button className="font-bold text-pink-500 ">Send</button>
    </form>
  );
};

export default SendMessage;
