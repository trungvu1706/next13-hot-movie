import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Movie } from '@/interface'
import { imagePath } from '@/constant'

type MovieProps = {
  params: Movie
}

export default function Movie({ params }: MovieProps) {
  return (
    <div>
      <div className="py-5 mb-2">
        <h3 className="font-normal text-lg w-64 truncate text-gray-300 mb-1">
          {params.title}
        </h3>
        <p className="font-thin text-sm text-gray-500 capitalize">
          Release Date: {params.release_date}
        </p>
      </div>

      <Link href={`/${params.id}`} className="cursor-pointer">
        <Image
          src={imagePath + params.poster_path}
          width={1000}
          height={1000}
          alt="image post"
        />
      </Link>
    </div>
  )
}
