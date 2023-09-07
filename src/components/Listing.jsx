"use client";
import Link from "next/link";
import React from "react";
import Popup from "reactjs-popup";
import { useRouter } from "next/navigation";

export default function Listing({ profile }) {
  const router = useRouter();
  return (
    <div className="flex p-10 border rounded border-cyan-600 shadow-md mb-4">
      <div className="w-24 md:w-32 lg:w-48 h-24 md:h-32 lg:h-48 mr-4 rounded border-cyan-500 overflow-hidden">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <div className="mb-2">
          <span className="font-semibold">Name:</span> {profile.name}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Rate:</span> {profile.rate}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Languages:</span> {profile.lang}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Years of Exp:</span> {profile.exp}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Patients treated:</span> {profile.no}
        </div>
      </div>
      <div className="flex items-center flex-grow justify-end">
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Schedule Call Now
        </button> */}
        <Popup
          trigger={
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Schedule Call Now
            </button>
          }
          position="right center"
          modal
        >
          {(close) => (
            <div className="p-8 bg-white rounded shadow-lg">
              {/* Style the iframe with Tailwind CSS classes */}
              <iframe
                src="https://calendly.com/sachin-123-kumar-456/30min"
                className="w-full h-[500px] border-none"
              ></iframe>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
                onClick={close}
              >
                Close
              </button>
            </div>
          )}
        </Popup>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => {
            router.push(`/profile/${profile.id}`);
          }}
        >
          View full
        </button>
      </div>
    </div>
  );
}
