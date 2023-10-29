// restaurantSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    restaurant_name: 'Rasoi',
    address: 'Bhiwadi',
    contact: '9935421236',
  },
  {
    id: 2,
    restaurant_name: 'Rao',
    address: 'Samtal Mod',
    contact: '9079496767',
  },
];

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      state.push(action.payload);
    },
    updateRestaurant: (state, action) => {
      const { id, restaurant_name, address, contact } = action.payload;
      const existingRestaurant = state.find((restaurant) => restaurant.id === id);
      if (existingRestaurant) {
        existingRestaurant.restaurant_name = restaurant_name;
        existingRestaurant.address = address;
        existingRestaurant.contact = contact;
      }
    },
    deleteRestaurant: (state, action) => {
      return state.filter((restaurant) => restaurant.id !== action.payload);
    },
  },
});

export const { addRestaurant, updateRestaurant, deleteRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
