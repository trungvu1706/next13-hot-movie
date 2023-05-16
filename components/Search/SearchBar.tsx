'use client'

import React, { ChangeEvent } from 'react'

interface SearchBarProps {
  value: string
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeValue,
}) => {
  return (
    <div className="w-full">
      <input
        className="custom-input bg-gray-300 h-10"
        placeholder="Search movie..."
        onChange={onChangeValue}
        value={value}
      />

      {/* <button className="text-gray-300 capitalize ml-2 bg-indigo-700 rounded-md text-sm p-2.5 cursor-pointer hover:text-gray-50 hover:bg-indigo-500">
        search
      </button> */}
    </div>
  )
}
