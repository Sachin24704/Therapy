"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  documentId,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Dashboard from "@/components/dashboard";

export default function ProfilePage() {
  const router = useParams();
  const profileId = router.profileId;
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(profileId);
        const snap = await getDoc(doc(db, "doctor_profile", profileId));

        if (snap.exists()) {
          console.log(snap.data());
          setProfile(snap.data());
        } else {
          console.log("No such document");
        }
      } catch (error) {
        console.error("no such snap exixts");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Dashboard />
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <div className="w-32 h-32 mr-4 rounded border-cyan-500 overflow-hidden">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            <h1>{profile.name}</h1>
            <p className="text-gray-600">{profile.exp} years of experience</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p>{profile.about}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>
            Address: {profile.address}, {profile.city}, {profile.state},{" "}
            {profile.country}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <p>{profile.lang}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Patients Treated</h3>
          <p>{profile.no}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Rate</h3>
          <p>{profile.rate}</p>
        </div>
        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Schedule Call Now
          </button>
        </div>
      </div>
    </>
  );
}
