import Image from "next/image";
import { useMoralis } from "react-moralis";
function Login() {
    const {authenticate} = useMoralis();    
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image className="object-cover rounded-full "
          src="https://avatars.githubusercontent.com/u/69002670?v=4"
          width={200}
          height={200}
          alt="progress click logo"
        />
        <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse text-black">Login to the metaverse </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
