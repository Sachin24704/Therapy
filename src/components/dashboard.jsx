"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/firebase/auth";

export default function Dashboard({ isHome, isTherapy, bgColour }) {
  const { isLoading, authUser, signout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={` py-2 px-4 ${bgColour ? "bg-transparent" : "bg-blue-200"}`}
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <a className="text-xl font-semibold text-blue-900 " href="/home">
            Zenexa
          </a>
          {authUser ? (
            <span className=" text-lg font-semibold text-blue-900 ml-4 hidden md:inline-block">
              Welcome, {authUser?.username}
            </span>
          ) : null}
        </div>
        {/* signout button at start when screen is small */}
        <div className="lg:hidden">
          {authUser ? (
            <button
              className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={signout}
            >
              Sign Out
            </button>
          ) : (
            <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              <Link href="/login">Login</Link>
            </button>
          )}
        </div>
        <div className="lg:hidden">
          <div className="relative">
            <button
              className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMobileMenu}
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close" : "Open main menu"}
              </span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* < div className="hidden lg:flex space-x-4  flex-row items-center"> */}
            <div
              className={`absolute right-0 bg-gray-100 ${
                isMobileMenuOpen ? "block" : "hidden"
              } `}
              id="navbar-default"
            >
              {isHome ? (
                <div>
                  <Link
                    className="block lg:inline-block p-4 text-blue-500 hover:underline font-bold"
                    href="/chatbot"
                  >
                    Chatbot
                  </Link>
                  {/* <Link
                className=" p-4  text-blue-500 hover:underline font-bold"
                href="/about"
              >
                About
              </Link> */}
                  <Link
                    className="block lg:inline-block p-4 text-blue-500 hover:underline font-bold"
                    href="/View"
                  >
                    Therapist
                  </Link>
                </div>
              ) : isTherapy ? (
                <div>
                  <Link
                    className="p-4 text-blue-500 hover:underline font-bold"
                    href="/home"
                  >
                    Home
                  </Link>
                  {/* <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/chatbot"
              >
                About
              </Link> */}
                  <Link
                    className="p-4 text-blue-500 hover:underline font-bold"
                    href="/chatbot"
                  >
                    Chatbot
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    className="p-4 text-blue-500 hover:underline font-bold"
                    href="/home"
                  >
                    Home
                  </Link>
                  {/* <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/chatbot"
              >
                About
              </Link> */}
                  <Link
                    className="p-4 text-blue-500 hover:underline font-bold"
                    href="/View"
                  >
                    Therapist
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* signout button at end when screen is large and navlar li when screen is large */}
        {/* <div className="hidden flex-row  lg:block"> */}
        <div className="hidden  lg:flex space-x-4  flex-row items-center">
          {isHome ? (
            <div>
              <Link
                className="block lg:inline-block p-4 text-blue-500 hover:underline font-bold"
                href="/chatbot"
              >
                Chatbot
              </Link>
              {/* <Link
                className=" p-4  text-blue-500 hover:underline font-bold"
                href="/about"
              >
                About
              </Link> */}
              <Link
                className="block lg:inline-block p-4 text-blue-500 hover:underline font-bold"
                href="/View"
              >
                Therapist
              </Link>
            </div>
          ) : isTherapy ? (
            <div>
              <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/home"
              >
                Home
              </Link>
              {/* <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/chatbot"
              >
                About
              </Link> */}
              <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/chatbot"
              >
                Chatbot
              </Link>
            </div>
          ) : (
            <div>
              <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/home"
              >
                Home
              </Link>
              {/* <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/chatbot"
              >
                About
              </Link> */}
              <Link
                className="p-4 text-blue-500 hover:underline font-bold"
                href="/View"
              >
                Therapist
              </Link>
            </div>
          )}
        </div>
        <div className=" hidden lg:block">
          {authUser ? (
            <button
              className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={signout}
            >
              Sign Out
            </button>
          ) : (
            <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              <Link href="/login">Login</Link>
            </button>
          )}
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
}
