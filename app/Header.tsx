import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleInfo,
  faCircleUser,
  faHome,
} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="p-5 border-b-2 border-gray-600">
      <ul className="flex items-center justify-end">
        <Link
          href="/"
          className="mr-5 cursor-pointer text-gray-300 hover:text-gray-500">
          <FontAwesomeIcon
            icon={faHome}
            style={{ fontSize: 20, marginRight: 5 }}
          />
          Home
        </Link>
        <Link
          href="/about"
          className="cursor-pointer text-gray-300 hover:text-gray-500 mr-5">
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ fontSize: 20, marginRight: 5 }}
          />
          About
        </Link>

        <li>
          <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: 30 }} />
        </li>
      </ul>
    </div>
  )
}

export default Header
