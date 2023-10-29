// store.js
import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './Slices/restaurantSlice';

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});
