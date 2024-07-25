import { createSlice } from "@reduxjs/toolkit";

type Sale = {
  id: number;
  amount: string;
  headcount: string;
  feePercentage: number;
  fee: number;
};

type State = {
  saleArray: Sale[];
};

type UpdateSaleAction = {
  payload: {
    id: number;
    field: keyof Sale;
    value: string | number;
  };
};

const initialState = {
  saleArray: [{ id: 1, amount: "", headcount: "", feePercentage: 0, fee: 0 }],
  discountPCBang: false,
  discountTopClass: false,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSalesInput(state) {
      const newId = state.saleArray.length + 1;
      state.saleArray.push({
        id: newId,
        amount: "",
        headcount: "",
        feePercentage: 0,
        fee: 0,
      });
    },
    updateSale(state: State, action: UpdateSaleAction) {
      const { id, field, value } = action.payload;
      const sale = state.saleArray.find((sale) => sale.id === id);
      if (sale) {
        (sale[field] as string | number) = value;
      }
    },
    removeSalesInput(state, action) {
      state.saleArray = state.saleArray.filter(
        (sale) => sale.id !== action.payload
      );
    },
    toggleDiscountPCBang(state) {
      state.discountPCBang = !state.discountPCBang;
    },
    toggleDiscountTopClass(state) {
      state.discountTopClass = !state.discountTopClass;
    },
  },
});

export const {
  addSalesInput,
  updateSale,
  removeSalesInput,
  toggleDiscountPCBang,
  toggleDiscountTopClass,
} = salesSlice.actions;
export default salesSlice.reducer;
