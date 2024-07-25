import React from "react";

interface SaleButtonProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
  title: string;
}

export default function SaleButton({
  label,
  isChecked,
  onChange,
  title,
}: SaleButtonProps) {
  return (
    <div className="flex items-center justify-between w-[40rem] bg-[#EEF2E6] p-4 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <label htmlFor="discountPCBang" className="text-gray-700 font-bold">
        {title}
      </label>
      <label className="cursor-pointer">
        <div className="relative w-11 h-6 bg-gray-200 rounded-full">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            id="label"
            checked={isChecked}
            onChange={onChange}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
        </div>
      </label>
    </div>
  );
}
