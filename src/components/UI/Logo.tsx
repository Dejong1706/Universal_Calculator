import React from "react";
import { PiNuclearPlant } from "react-icons/pi";

export default function Logo() {
  return (
    <div className="flex items-center text-[#FF395B] text-[1.5rem]">
      <PiNuclearPlant />
      <p className="font-bold">AntBnB</p>
    </div>
  );
}
