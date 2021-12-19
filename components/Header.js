import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 mx-auto max-w-6xl border-pink-700 ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24  hidden lg:inline-grid">
          <Image
            className="rounded-full object-cover"
            src="https://avatars.githubusercontent.com/u/69002670?v=4"
            layout="fill"
          />
        </div>
        <div className="text-left col-span-4 lg:text-center">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to Progress Click metaverse </h1>
          {/*  moralis generate username   */}
          <h2 className="text-5xl font-bold truncate">
            {user.get("username")}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
