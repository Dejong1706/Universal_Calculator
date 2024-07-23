"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { exchangeRateData, exchangeRateName, nationalFlag } from "@/data/data";
import CountrySelectionModal from "./CountrySelectionModal";
import FirstCountry from "./FirstCountry";

type Props = {
  isSelectValue: (value: number, country: string) => void;
};

export default function CountrySelection({ isSelectValue }: Props) {
  const [isSelectCountryModal, setIsSelectCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // const [rateData, setRateData] = useState(exchangeRateData);
  // const [rateDataName, setRateDataName] = useState(exchangeRateName);

  // async function fetchData(url: string) {
  //   try {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   const url = `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY}/latest/USD`;
  //   fetchData(url);
  // }, []);

  const openSelectCountryModal = () => setIsSelectCountryModal(true);
  const closeSelectCountryModal = () => setIsSelectCountryModal(false);

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsSelectCountryModal(false);
  };

  const handleCountryChange = () => {
    setSelectedCountry("");
    openSelectCountryModal();
  };

  const handleSubmit = (value: number) => {
    if (selectedCountry) {
      isSelectValue(value, selectedCountry);
    }
  };

  return (
    <div className="w-full h-full flex justify-center">
      {!selectedCountry && (
        <div
          className="w-[30rem] h-[15rem] bg-[#F5F7F8] hover:bg-[#edf3f7] flex justify-center items-center border-4 border-dotted border-blue-500
          hover:cursor-pointer"
          onClick={openSelectCountryModal}
        >
          <p>기준 국가를 선택하세요(click!!)</p>
        </div>
      )}
      {selectedCountry && nationalFlag[selectedCountry] && (
        <>
          <FirstCountry
            selectedCountry={selectedCountry}
            onClick={handleCountryChange}
            onSubmit={handleSubmit}
          />
        </>
      )}

      <CountrySelectionModal
        isOpen={isSelectCountryModal}
        onClose={closeSelectCountryModal}
        onSelect={handleCountrySelect}
      />
    </div>
  );
}
