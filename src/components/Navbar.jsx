import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                User Registration
              </Link>
            </li>
            <li>
              <Link
                to="/theme"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Theme Settings
              </Link>
            </li>
            <li>
              <Link
                to="/message"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                User Messages
              </Link>
            </li>
            <li>
              <Link
                to="/info"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Company Info
              </Link>
            </li>
            <li>
              <Link
                to="/heading"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Web Heading
              </Link>
            </li>
            <li>
              <Link
                to="/setting"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Web Settings
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
