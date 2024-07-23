"use client";

import React, { useEffect, useState } from "react";
import { exchangeRateData, exchangeRateName, nationalFlag } from "@/data/data";
import CountrySelectionModal from "./CountrySelectionModal";
import SecondCountry from "./SecondCountry";

type Props = {
  firstRate: number;
  firstCountry: string;
};

export default function CountrySecondSelection({
  firstRate,
  firstCountry,
}: Props) {
  const [isSelectCountryModal, setIsSelectCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [conversion, setConversion] = useState<number | null | string>(null);

  useEffect(() => {
    if (firstCountry && selectedCountry) {
      const firstCountryRateName = exchangeRateName[firstCountry];
      const secondCountryRateName = exchangeRateName[selectedCountry];

      const conversionRate =
        (firstRate / exchangeRateData[firstCountryRateName]) *
        exchangeRateData[secondCountryRateName];

      setConversion(conversionRate.toFixed(2));
    }
  }, [firstCountry, selectedCountry, firstRate]);

  const openSelectCountryModal = () => setIsSelectCountryModal(true);
  const closeSelectCountryModal = () => setIsSelectCountryModal(false);

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsSelectCountryModal(false);
  };

  const handleCountryChange = () => {
    setSelectedCountry(null);
    openSelectCountryModal();
  };

  return (
    <div className="w-full h-full flex justify-center">
      {!selectedCountry && (
        <div
          className="w-[30rem] h-[15rem] bg-[#F5F7F8] hover:bg-[#edf3f7] flex justify-center items-center border-4 border-dotted border-blue-500
          hover:cursor-pointer"
          onClick={openSelectCountryModal}
        >
          <p>환율을 확인할 국가를 선택하세요(click!!)</p>
        </div>
      )}
      {selectedCountry && nationalFlag[selectedCountry] && (
        <>
          <SecondCountry
            selectedCountry={selectedCountry}
            onClick={handleCountryChange}
            conversion={conversion}
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
