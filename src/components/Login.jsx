"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setpassword(e.target.value);
  };
  const handleSubmit = () => {
    console.log(hi);
    router.push("/signup");
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
