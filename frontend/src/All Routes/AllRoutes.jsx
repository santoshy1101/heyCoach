import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RestaurantLists from '../Components/RestaurantLists'
import AddRestaurant from '../Components/AddRestaurant'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestaurantLists />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
    </Routes>
  )
}

export default AllRoutes
