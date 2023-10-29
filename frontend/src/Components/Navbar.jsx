import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HeyCoach
          </span>
        </Link>
        <div className="flex space-x-5 md:order-2">
          <Link to="/">
            <button
              type="button"
              className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Show List
            </button>
          </Link>

          <Link to="/add-restaurant">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center h-10 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              Add Restaurant
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
