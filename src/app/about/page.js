"use client";
import Loader from "@/components/Loader";
import Dashboard from "@/components/dashboard";
import { useAuth } from "@/firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const { isLoading, authUser, signout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, isLoading]);

  // uncomment for auth home page.....
  return !authUser ? (
    <Loader />
  ) : (
    // return (
    <>
      <Dashboard />
      <div className="">
        <h1>About</h1>
        <div className="">
          <p>We help with theray to cure lonelinesssss....</p>
        </div>
      </div>
    </>
  );
}
