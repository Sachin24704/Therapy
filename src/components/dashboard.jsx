import Link from "next/link";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
export default function Dashboard({}) {
  const router = useRouter();
  const { isLoading, authUser, signout } = useAuth();

  return (
    <>
      <div className="flex flex-row bg-blue-600 h-full align-center">
        <div className="">
          <button className="" onClick={signout}>
            Signout
          </button>
        </div>

        <div className="">{/* <Link>Chatbot</Link> */}</div>
        {"  "}
        <div className="">{authUser.username}</div>
      </div>
    </>
  );
}
