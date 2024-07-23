"use client";

import React, { useState } from "react";
import Image from "next/image";
import { exchangeRateName, nationalFlag } from "@/data/data";
import { IoReload } from "react-icons/io5";

type Props = {
  selectedCountry: string;
  onClick: () => void;
  onSubmit: (value: number) => void;
};

export default function FirstCountry({
  selectedCountry,
  onClick,
  onSubmit,
}: Props) {
  const [value, setValue] = useState<number>(0);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleSubmit = () => {
    onSubmit(value);
  };

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
        <input
          placeholder="금액을 입력해주세요"
          className="w-[70%] h-[3rem] text-xl p-2 border border-gray-300 rounded"
          onChange={handleValue}
        />
        <p className="font-bold">{exchangeRateName[selectedCountry]}</p>
        <button
          className="bg-[#81bbcf] hover:bg-[#74b0c5] text-white font-bold p-3 rounded-lg"
          onClick={handleSubmit}
        >
          조회
        </button>
      </div>
    </div>
  );
}
