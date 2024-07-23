"use client";
import React, { useState } from "react";

interface Props {
  isBmiHandler: (bmi: number) => void;
}

export default function BmiForm({ isBmiHandler }: Props) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHeight(e.target.value);
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWeight(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);

  const calculateBMI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    isBmiHandler(parseFloat(bmiValue.toFixed(2)));
  };

  return (
    <div className="bg-[#86B6F6] w-[28%] p-6 rounded-lg shadow-lg">
      <form onSubmit={calculateBMI} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">키 (cm):</label>
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">몸무게 (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">나이:</label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-[#4B70F5] text-white font-semibold rounded hover:bg-[#456aef]"
        >
          계산하기
        </button>
      </form>
    </div>
  );
}
