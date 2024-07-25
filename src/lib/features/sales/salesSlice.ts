import { createSlice } from "@reduxjs/toolkit";

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
    updateSale(state, action) {
      const { id, field, value } = action.payload;
      const sale = state.saleArray.find((sale) => sale.id === id);
      if (sale) {
        sale[field] = value;
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
