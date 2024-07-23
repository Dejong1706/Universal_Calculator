"use client";
import Calculator from "@/components/Calculator";
import CountryFirstSelection from "@/components/CountryFirstSelection";
import CountrySecondSelection from "@/components/CountrySecondSelection";
import { useState } from "react";

export default function Home() {
  const [selectValue, setSelectValue] = useState(0);
  const [firstCountry, setFirstCountry] = useState("");

  const isSelectValue = (value: number, country: string) => {
    setSelectValue(value);
    setFirstCountry(country);
  };

  return (
    <div className="w-full h-[90vh] flex justify-around items-center">
      <div className="w-[45%] flex justify-center">
        <Calculator />
      </div>
      <div className="w-[45%] flex flex-col justify-center items-center">
        <div className="w-full h-full mb-16">
          <CountryFirstSelection isSelectValue={isSelectValue} />
        </div>
        <div className="w-full h-full">
          <CountrySecondSelection
            firstRate={selectValue}
            firstCountry={firstCountry}
          />
        </div>
      </div>
    </div>
  );
}
