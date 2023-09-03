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
import { useState } from "react";
import { useAuth } from "@/firebase/auth";

import Loader from "@/components/loader";

export default function Dashboard({ isHome }) {
  const { isLoading, authUser, signout } = useAuth();

  return (
    <div className="flex bg-blue-200  ">
      {/* Main content */}
      <main className="flex-1 p-8 ml-56">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">
            Welcome, {authUser?.username}
          </h1>
          {isHome ? (
            <div className="">
              <Link href="/chatbot">Chatbot</Link>
            </div>
          ) : (
            <div className="">
              <Link href="/home">Home</Link>
            </div>
          )}
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={signout}
          >
            Sign Out
          </button>
        </div>
        {/* Add other content */}
      </main>
    </div>
  );
}
