"use client";
import React from "react";
import { useAuth } from "@/firebase/auth";

const Home = () => {
  const { isLoading, authUser, signout } = useAuth();
  return (
    <div>
      <h1>hi user</h1>
      <button onClick={signout}>logout</button>
    </div>
  );
};

export default Home;
