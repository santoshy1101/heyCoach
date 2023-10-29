import React from 'react'

const List = ({ index, item, handleEdit, handleDelete }) => {
  return (
    <tr
      className={` border-b ${
        index % 2 === 0 ? 'dark:bg-gray-800' : 'dark:bg-gray-900'
      }  dark:border-gray-700`}
    >
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item.restaurant_name}
      </td>
      <td className="px-6 py-4">{item.address}</td>
      <td className="px-6 py-4">{item.contact}</td>

      <td
        href="#"
        className="flex py-4 font-medium text-blue-600 gap-x-10 dark:text-blue-500 "
      >
        <span
          className="cursor-pointer hover:underline "
          onClick={() => handleEdit(item)}
        >
          Edit
        </span>
        <span
          className="cursor-pointer hover:underline "
          onClick={() => handleDelete(item)}
        >
          Delete
        </span>
      </td>
    </tr>
  )
}

export default List
