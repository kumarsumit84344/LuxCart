// features/checkoutSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingInfo: {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  },
  billingInfo: {
    sameAsShipping: true,
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  },
  paymentInfo: {
    cardNumber: "",
    expiry: "",
    cvv: "",
  },
  orderSummary: {
    items: [],    // you can fill from cartItems on checkout
    subtotal: 0,
    shippingCharge: 0,
    total: 0,
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    setBillingInfo: (state, action) => {
      state.billingInfo = action.payload;
    },
    setPaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
    setOrderSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
    resetCheckout: () => initialState,
  },
});

export const {
  setShippingInfo,
  setBillingInfo,
  setPaymentInfo,
  setOrderSummary,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
