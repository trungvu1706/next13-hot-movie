'use client'

import React, { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleInfo,
  faCircleUser,
  faHome,
} from '@fortawesome/free-solid-svg-icons'

import { SearchBar } from '@/components'

function Header() {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
  }

  return (
    <div className="bg-zinc-900 box-shadow-1 p-4">
      <ul className="flex items-center justify-between">
        <div>
          <SearchBar value={searchValue} onChangeValue={handleSearchValue} />
        </div>
        <div className="flex justify-between items-center">
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
        </div>
      </ul>
    </div>
  )
}

export default Header
