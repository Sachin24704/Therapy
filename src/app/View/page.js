"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/firebase/auth";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Listing from "@/components/Listing";
import Dashboard from "@/components/dashboard";

export default function List() {
  const [doctorProfiles, setDoctorProfiles] = useState([]);
  const router = useRouter();
  const { isLoading, authUser, signout } = useAuth();
  // check if auth user when page loads
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, isLoading]);
  // Get data from Firestore when the page loads

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctor_profile"));
        const profiles = [];
        querySnapshot.forEach((doc) => {
          profiles.push({ id: doc.id, ...doc.data() });
        });
        setDoctorProfiles(profiles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return !authUser ? (
    <Loader />
  ) : (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: 'url("/view-bg.jpg")', opacity: 1 }}
    >
      <Dashboard isTherapy={true} bgColour={true} />
      <div className="border flex flex-col bg-blue">
        {doctorProfiles.map((profile) => (
          <Listing key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}
