"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Listing from "@/components/Listing";
import Dashboard from "@/components/dashboard";

export default function List() {
  const [doctorProfiles, setDoctorProfiles] = useState([]);

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

  return (
    <>
      <Dashboard />
      <div className="border flex flex-col bg-blue">
        {doctorProfiles.map((profile) => (
          <Listing key={profile.id} profile={profile} />
        ))}
      </div>
    </>
  );
}
