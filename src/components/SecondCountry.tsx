"use client";
import React from "react";
import Image from "next/image";
import { exchangeRateName, nationalFlag } from "@/data/data";
import { IoReload } from "react-icons/io5";

type Props = {
  selectedCountry: string;
  onClick: () => void;
  conversion: number | null | string;
};

export default function SecondCountry({
  selectedCountry,
  onClick,
  conversion,
}: Props) {
  return (
    <div className="relative w-[30rem] h-[15rem] bg-[#F1F1F1] p-4 rounded-lg border-2 border-gray-300">
      <div className="absolute top-1 right-1 p-1">
        <span className="flex items-center">
          <p className="mr-4 text-[1.5rem]">{selectedCountry}</p>
          <Image
            src={nationalFlag[selectedCountry]}
            alt={selectedCountry}
            width={80}
            height={80}
          />
        </span>
      </div>
      <div className="absolute top-2 left-2 p-2">
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white p-2"
          onClick={onClick}
        >
          <IoReload />
        </button>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="w-[80%] h-[3rem] text-xl p-2 bg-white rounded flex items-center">
          <p>{conversion}</p>
        </div>
        <div className="font-bold align-center">
          <p>{exchangeRateName[selectedCountry]}</p>
        </div>
      </div>
    </div>
  );
}
