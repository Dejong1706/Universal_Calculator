"use client";

import BmiForm from "@/components/BMI/BmiForm";
import BmiRangeBar from "@/components/BMI/BmiRangeBar";
import BmiResult from "@/components/BMI/BmiResult";
import React, { useState } from "react";

export default function Bmipage() {
  const [bmi, setBmi] = useState<number | null>(null);

  const isBmiHandler = (bmiResult: number) => {
    setBmi(bmiResult);
  };

  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center">
      <div className="w-full flex justify-evenly mb-8">
        <BmiForm isBmiHandler={isBmiHandler} />
        <BmiResult bmi={bmi} />
      </div>
      <div className="w-full flex justify-center">
        <BmiRangeBar />
      </div>
    </div>
  );
}
