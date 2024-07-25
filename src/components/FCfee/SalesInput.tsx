"use client";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { updateSale, removeSalesInput } from "@/lib/features/sales/salesSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

interface SaleArray {
  id: number;
  amount: string;
  headcount: string;
  feePercentage: number;
}

const SalesInput = ({ id, amount, headcount, feePercentage }: SaleArray) => {
  const dispatch = useDispatch();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSale({ id, field: "amount", value: e.target.value }));
  };

  const handleHeadcountChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSale({ id, field: "headcount", value: e.target.value }));
  };

  const handlePercentageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateSale({
        id,
        field: "feePercentage",
        value: parseInt(e.target.value, 10),
      })
    );
  };

  const handleRemoveButtonClick = () => {
    dispatch(removeSalesInput(id));
  };

  return (
    <div className="inline-flex flex-col justify-center mb-4 bg-white w-[25rem] h-[15rem] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl">
      <div className="flex mb-4 ml-6">
        <input
          type="text"
          className="p-2 border border-gray-300 mr-2 w-[22rem]"
          placeholder="BP"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="flex items-center ml-6">
        <input
          type="text"
          className="p-2 border border-gray-300 mr-4 w-[15rem]"
          placeholder="명"
          value={headcount}
          onChange={handleHeadcountChange}
        />
        <select
          className="p-2 border border-gray-300 w-[6rem]"
          value={feePercentage}
          onChange={handlePercentageChange}
        >
          {[0, 10, 15, 20, 25, 30, 35, 40, 50].map((percentage) => (
            <option key={percentage} value={percentage}>
              {percentage}%
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mt-8 mr-4">
        <button
          className="w-[6rem] h-[2rem] bg-black rounded-md text-white font-bold py-2 flex justify-center"
          onClick={handleRemoveButtonClick}
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};

export default SalesInput;
