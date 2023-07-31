import React from "react";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <Image width={100} height={100} alt="Loading..." src="/loader.svg" />
    </div>
  );
}
