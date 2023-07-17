"use client";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const handleChange = (e) => {
    e.target.value;
  };
  const handleSubmit = function () {
    return;
  };
  return (
    <>
      <h1>hi mom</h1>
      <div className="flex border bg-slate-800 content-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=""
            lable="Email"
            value={email}
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            className=""
            lable="password"
            value={password}
          />
        </form>
      </div>
    </>
  );
}
