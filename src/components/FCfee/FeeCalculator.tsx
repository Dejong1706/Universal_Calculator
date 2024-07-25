"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SalesInput from "./SalesInput";
import {
  addSalesInput,
  toggleDiscountPCBang,
  toggleDiscountTopClass,
} from "@/lib/features/sales/salesSlice";
import SaleButton from "./SaleButton";

interface SaleArray {
  id: number;
  amount: string;
  headcount: string;
  feePercentage: number;
  fee: number;
}

interface SalesType {
  sales: {
    saleArray: SaleArray[];
    discountPCBang: boolean;
    discountTopClass: boolean;
  };
}

const FeeCalculator = () => {
  const sales = useSelector((state: SalesType) => state.sales.saleArray);
  const discountPCBang = useSelector(
    (state: SalesType) => state.sales.discountPCBang
  );
  const discountTopClass = useSelector(
    (state: SalesType) => state.sales.discountTopClass
  );
  const dispatch = useDispatch();

  const handleAddSalesInput = () => {
    dispatch(addSalesInput());
  };

  const handleToggleDiscountPCBang = () => {
    dispatch(toggleDiscountPCBang());
  };

  const handleToggleDiscountTopClass = () => {
    dispatch(toggleDiscountTopClass());
  };

  const calculateFee = (sale: SaleArray) => {
    console.log(sale);
    if (sale.amount && Number(sale.amount) > 0) {
      const baseFeePercentage = 40; // 기본 수수료 40%
      const initialFee = (Number(sale.amount) * baseFeePercentage) / 100;
      let finalFee = initialFee;

      if (sale.feePercentage !== 0) {
        const couponDiscountRate = sale.feePercentage / 100;
        finalFee -= initialFee * couponDiscountRate;
      }

      if (discountPCBang) {
        finalFee -= initialFee * 0.3; // PC방 수수료 30% 할인
      }

      if (discountTopClass) {
        finalFee -= initialFee * 0.2; // TopClass 수수료 20% 할인
      }

      return Number(sale.amount) - finalFee;
    }
    return 0;
  };

  const calculateTotalSaleAmount = () => {
    let totalSaleAmount = 0;
    sales.forEach((sale) => {
      if (sale.headcount === "") {
        const saleAmount = calculateFee(sale);
        totalSaleAmount += saleAmount;
      } else {
        const headcount = parseInt(sale.headcount, 10);
        const saleAmount = calculateFee(sale) * headcount;
        totalSaleAmount += saleAmount;
      }
    });
    return totalSaleAmount;
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-[#227a51]">FCONLINE </span>수수료 계산기
        </h1>
        <div className="text-2xl font-semibold mb-4 flex justify-end text-gray-800">
          총 판매 금액 :{" "}
          <b className="text-[#227a51]">
            {new Intl.NumberFormat("ko-KR").format(calculateTotalSaleAmount())}
          </b>
          BP
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {sales.map((sale) => (
          <SalesInput
            key={sale.id}
            id={sale.id}
            amount={sale.amount}
            headcount={sale.headcount}
            feePercentage={sale.feePercentage}
          />
        ))}
      </div>
      <div className="h-[22rem] flex justify-center items-center flex-col rounded-lg">
        <div className="flex justify-center my-8">
          <button
            className="bg-[#3D8361] hover:bg-[#3b7d5d] w-[40rem] text-white px-4 py-2 rounded-lg font-bold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
            onClick={handleAddSalesInput}
          >
            판매 입력창 추가
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex-col space-y-4">
            <SaleButton
              label="discountPCBang"
              isChecked={discountPCBang}
              onChange={handleToggleDiscountPCBang}
              title="프리미엄 PC방 30% 할인"
            />
            <SaleButton
              label="discountPCBang"
              isChecked={discountTopClass}
              onChange={handleToggleDiscountTopClass}
              title="TopClass 수수료 20% 할인"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;
