// import Link from "next/link";
// import { useAuth } from "@/firebase/auth";
// import { useRouter } from "next/navigation";
// import Loader from "@/components/loader";
// export default function Dashboard({}) {
//   const router = useRouter();
//   const { isLoading, authUser, signout } = useAuth();

//   return (
//     <>
//       <div className="flex flex-row bg-blue-600 h-full align-center">
//         <div className="">
//           <button className="" onClick={signout}>
//             Signout
//           </button>
//         </div>

//         <div className="">{/* <Link>Chatbot</Link> */}</div>
//         {"  "}
//         <div className="">{authUser.username}</div>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
import { useAuth } from "@/firebase/auth";

export default function Dashboard({ isHome }) {
  const { isLoading, authUser, signout } = useAuth();

  return (
    <div className="bg-blue-200 py-2 px-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold text-blue-900">Therapy</span>
          <span className="text-lg font-semibold text-blue-900 ml-4">
            Welcome, {authUser?.username}
          </span>
        </div>
        <div className="space-x-4 flex flex-row items-center">
          {isHome ? (
            <div>
              <Link
                className="p-4 text-blue-500 hover:underline"
                href="/chatbot"
              >
                Chatbot
              </Link>
              <Link
                className=" p-4  text-blue-500 hover:underline"
                href="/chatbot"
              >
                About
              </Link>
            </div>
          ) : (
            <div>
              <Link className="text-blue-500 hover:underline" href="/home">
                Home
              </Link>
              <Link className="text-blue-500 hover:underline" href="/chatbot">
                About
              </Link>
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={signout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
