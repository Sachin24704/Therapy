"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const provider = GoogleAuthProvider();
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
      console.log("error", error);
    }
    // TODO: implement authentication

    router.push("/signup");
  };
  const signInWithGoogle = async () => {
    try {
      // let result =await auth().signInWithPopup(provider).then((res)=>console.log(res));
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <h1>hi </h1>
      <div className="flex border bg-slate-800 content-center">
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
            login{" "}
          </button>
        </form>
      </div>
      <Link href="/signup"> signup</Link>
    </>
  );
};
export default Login;
