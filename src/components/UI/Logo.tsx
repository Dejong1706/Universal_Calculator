import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";

export default function Logo() {
  return (
    <div className="flex items-center text-[#00C897] text-[1.5rem]">
      <AiOutlineCalculator />
      <p className="font-bold text-black">다용도 계산기</p>
    </div>
  );
}
