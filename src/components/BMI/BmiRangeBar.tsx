import React from "react";

const bmiRanges = [
  { label: "저체중", color: "bg-blue-500", range: "18.5미만" },
  { label: "정상", color: "bg-green-500", range: "18.5 ~ 22.9" },
  { label: "과체중", color: "bg-yellow-500", range: "23 ~ 24.9" },
  { label: "1단계 비만", color: "bg-red-500", range: "25 ~ 29.9" },
  { label: "2단계 비만", color: "bg-red-600", range: "30 ~ 34.9" },
  { label: "3단계 비만", color: "bg-red-700", range: "35이상" },
];

export default function BmiRangeBar() {
  return (
    <div className="w-[60%] p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h2 className="text-xl font-semibold mb-4">BMI 수치표</h2>
      <div className="relative w-full h-12 flex">
        {bmiRanges.map((range, index) => (
          <div
            key={index}
            className={`h-full ${range.color} flex justify-center items-center`}
            style={{ flex: 1 }}
          >
            <span className=" text-white text-xs font-semibold">
              {range.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center text-xs">
        {bmiRanges.map((data, index) => (
          <div key={index} className="text-center w-1/6">
            <span>{data.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
