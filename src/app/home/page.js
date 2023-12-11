"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Dashboard from "@/components/dashboard";

const Home = () => {
  const router = useRouter();
  const { isLoading, authUser, signout } = useAuth();
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, isLoading]);
  return !authUser ? (
    <Loader />
  ) : (
    <div>
      <Dashboard isHome={true}></Dashboard>
      {/* <h1>hellos {authUser.email}</h1>
      <button onClick={signout}>logout</button> */}
      <div>
        {/* Section 1: Logo + Background Image + Tagline */}
        <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white">
          <div className="container mx-auto text-center">
            <img src="/logo.png" alt="Zenexa Logo" className="h-16 w-auto" />
            <img
              src="/bg-image.jpg"
              alt="Background"
              className="w-full h-auto mt-8"
            />
            <h1 className="text-4xl font-bold mt-4">Zenexa Therapy</h1>
            <p className="text-lg mt-2">
              Bringing mental wellness to your fingertips
            </p>
          </div>
        </div>

        {/* Section 2: About Us */}
        <div className="min-h-screen bg-green-500 flex items-center justify-center text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              At Zenexa, we believe that mental health is the most important
              aspect of a person's well-being. We are on a mission to combat the
              loneliness epidemic through therapy and make the world a better
              place.
            </p>
          </div>
        </div>

        {/* Section 3: Features - Therapy Chatbot */}
        <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Features</h2>
            <p className="text-lg">
              Explore the benefits of our therapy chatbot that provides
              personalized support and guidance, making your mental health
              journey even more accessible and convenient.
            </p>
          </div>
        </div>

        {/* Section 4: Book a Session */}
        <div className="min-h-screen bg-green-500 flex items-center justify-center text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Book a Session</h2>
            <p className="text-lg">
              Ready to take the next step towards a healthier mind? Book a
              session with our experienced therapists and start your journey
              towards mental well-being.
            </p>
          </div>
        </div>

        {/* Section 5: B2B Services */}
        <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">B2B Services</h2>
            <p className="text-lg">
              Elevate your company's productivity and foster employee happiness
              with our specialized therapy and performance coaching services
              designed for businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
