"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";
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
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const { isLoading, authUser } = useAuth();

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
      console.log(user);
    } catch (error) {
      console.error("error", error);
    }
    // TODO: implement authentication

    router.push("/login");
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
    <>
      <h1>hi </h1>
      <div className="flex flex-col border bg-slate-800 content-center">
        <button
          onClick={signInWithGoogle}
          className="cursor-pointer bg-blue-600 "
        >
          Sign In With Google
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            onChange={handleChange}
            className=""
            name="email"
            placeholder="Email"
            value={email}
          />
          <br />
          <input
            onChange={handleChange}
            className=""
            name="password"
            placeholder="password"
            value={password}
          />
          <button type="submit" className="">
            Signup{" "}
          </button>
        </form>
      </div>
      <Link href="/login"> Login</Link>
    </>
  );
};
export default Signup;
