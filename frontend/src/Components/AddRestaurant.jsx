import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addRestaurant } from '../Redux/Slices/restaurantSlice'
import { useNavigate } from 'react-router-dom'

const initState = {
  restaurant_name: '',
  address: '',
  contact: '',
}
const AddRestaurant = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const restaurants = useSelector((state) => state.restaurant)


  const [formData, setFormData] = useState(initState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addRestaurant({...formData,id:restaurants.length+1}))
    // Reset the form
    setFormData(initState)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 w-[80vw] m-auto ">
        <div>
          <label
            htmlFor="restaurant_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {' '}
            Restaurant name
          </label>
          <input
            name="restaurant_name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Taj"
            value={formData.restaurant_name}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mumbai"
            value={formData.address}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact Number
          </label>
          <input
            type="number"
            name="contact"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1234567802"
            value={formData.contact}
            required
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddRestaurant
