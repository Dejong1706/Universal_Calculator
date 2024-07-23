import Image from "next/image";
import React from "react";

interface Props {
  bmi: number | null;
}

export default function BmiResult({ bmi }: Props) {
  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "저체중", color: "bg-blue-500" };
    if (bmi >= 18.5 && bmi <= 22.9)
      return { category: "정상", color: "bg-green-500" };
    if (bmi >= 23 && bmi <= 24.9)
      return { category: "과체중", color: "bg-orange-500" };
    if (bmi >= 25 && bmi <= 29.9)
      return { category: "비만", color: "bg-yellow-500" };
    if (bmi >= 30 && bmi <= 34.9)
      return { category: "비만", color: "bg-red-500" };
    if (bmi >= 35) return { category: "비만", color: "bg-red-700" };
  };

  const bmiCategory = bmi !== null ? getBmiCategory(bmi) : null;

  return (
    <div className="bg-[#86B6F6] w-[28%] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
      {bmi === null && (
        <>
          <Image
            src="/bmi/basic.png"
            width={200}
            height={200}
            alt="기본 이미지"
          />
          <p className="font-bold">입력란을 작성해주세요</p>
        </>
      )}
      {bmi !== null && bmiCategory && (
        <div className="w-full flex flex-col justify-center">
          <div className="w-full flex justify-center">
            <Image
              src={`/bmi/${bmiCategory.category}.png`}
              width={200}
              height={200}
              alt="bmi 이미지"
            />
          </div>
          <div className="mt-4 p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold">당신의 BMI는: {bmi}</h2>
            <div className="w-full flex items-center mt-4">
              <div className="w-[85%] h-8 rounded-full overflow-hidden bg-gray-300">
                <div
                  className={`h-full ${bmiCategory.color}`}
                  style={{ width: `${(bmi / 40) * 100}%` }}
                ></div>
              </div>
              <span className="w-[15%] ml-4 font-semibold">
                {bmiCategory.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
