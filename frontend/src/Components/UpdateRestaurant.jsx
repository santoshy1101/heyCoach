import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateRestaurant } from '../Redux/Slices/restaurantSlice'
import { MdCancel } from 'react-icons/md'

const initState = {
  restaurant_name: '',
  address: '',
  contact: '',
}

const UpdateRestaurant = ({ id, setUpdateShow }) => {
  const dispatch = useDispatch()
  const restaurant = useSelector((state) =>
    state.restaurant.find((r) => r.id === id),
  )

  const [formData, setFormData] = useState(initState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      updateRestaurant({
        id: restaurant.id,
        ...formData,
      }),
    )
    setUpdateShow(false)
  }

  useEffect(() => {
    id ? setFormData(restaurant) : setFormData(initState)
  }, [id])
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative p-10 mb-6 ">
        <span
          onClick={() => setUpdateShow(false)}
          className="absolute top-2 left-[93%] text-slate-50 cursor-pointer"
        >
          <MdCancel size={30} />
        </span>
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
            required
            onChange={handleChange}
            value={formData.restaurant_name}
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
            required
            onChange={handleChange}
            value={formData.address}
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
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            onChange={handleChange}
            value={formData.contact}
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

export default UpdateRestaurant
