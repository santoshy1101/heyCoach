import React, { useEffect, useState } from 'react'
import List from './List'
import { useSelector, useDispatch } from 'react-redux'
import { deleteRestaurant } from '../Redux/Slices/restaurantSlice'
import UpdateRestaurant from './UpdateRestaurant'

const RestaurantLists = () => {
  const restaurants = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()

  const handleDelete = (item) => {
    dispatch(deleteRestaurant(item.id))
    setUpdateShow(false)
  }
  const [updateShow, setUpdateShow] = useState(false)
  const [id, setId] = useState('')

  const handleEdit = (item) => {
    setUpdateShow(true)
    setId(item.id)
  }

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Restaurant Name
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Contect
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((item, ind) => (
            <List
              key={ind}
              index={ind}
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <div
        className={`fixed top-1/2 ${
          updateShow ? 'left-1/2' : 'left-[-50%]'
        }  transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900 rounded-2xl w-1/2 m-auto duration-1000`}
      >
        {' '}
        <UpdateRestaurant setUpdateShow={setUpdateShow} id={id} />
      </div>
    </div>
  )
}

export default RestaurantLists
