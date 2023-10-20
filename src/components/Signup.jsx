"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useAuth } from "@/firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const { isLoading, authUser, setAuthUser } = useAuth();

  useEffect(() => {
    // redirect to home page when authenticated
    if (!isLoading && authUser) {
      setTimeout(() => router.push("/home"), 2500);
    }
  }, [isLoading, authUser]);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setpassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");
    if (!email || !password) return;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setAuthUser({
        username,
      });
      console.log(user);
      router.push("/login");
    } catch (error) {
      console.error("error", error);
      alert(error);
    }
    // TODO: implement authentication
  };
  const signInWithGoogle = async () => {
    try {
      // let result =await auth().signInWithPopup(provider).then((res)=>console.log(res));
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.error("error", error);
    }
  };
  return isLoading || (!isLoading && authUser) ? (
    <Loader />
  ) : (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-6xl font-semibold">Sign Up</h1>
          <p className="mt-6 ml-1">
            Already have an account ?{" "}
            <Link
              href="/login"
              className="underline hover:text-blue-400 cursor-pointer"
            >
              Login
            </Link>
          </p>

          <div className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
            <FcGoogle size={22} />
            <span
              className="font-medium text-black group-hover:text-white"
              onClick={signInWithGoogle}
            >
              Login with Google
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Name</label>
              <input
                type="text"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
        style={{
          backgroundImage: "url('/therapy.png')",
        }}
      ></div>
    </main>
  );
};
export default Signup;
