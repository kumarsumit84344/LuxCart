import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlicer';
import productSlicer from './features/productSlicer';
import cartslicer from './features/cartslicer';
import checkoutSlicer from './features/checkoutSlicer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    product :productSlicer,
    cart: cartslicer,
    checkout:checkoutSlicer
  },
});

export default store;