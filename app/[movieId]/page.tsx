import {
  faPlay,
  faShare,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { imagePath } from '@/constant'
import { MovieDetail } from '@/interface'

type MovieDetailProps = {
  params: {
    movieId: string
  }
}

async function getMovieDetail(movieId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_DETAIL}/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data: MovieDetail = await res.json()
  return data
}

export default async function MovieDetail({
  params: { movieId },
}: MovieDetailProps) {
  const data = await getMovieDetail(movieId)

  if (!data.id) return notFound()

  return (
    <div className="flex p-3 gap-5">
      <div className="w-1/2">
        <Image
          src={imagePath + data.poster_path}
          width={1000}
          height={1000}
          alt="image post"
          priority
        />
      </div>

      <div>
        <h3 className="font-normal text-xl text-gray-300 mb-1">{data.title}</h3>
        <p className="font-thin text-sm text-gray-500 capitalize">
          release date: {data.release_date}
        </p>

        <div className="mt-3">
          <span className="font-thin text-sm text-gray-300 capitalize mr-1">
            status:
          </span>
          <span className="mr-2 rounded-md p-1 text-xs text-gray-300 bg-green-600">
            {data.status}
          </span>
        </div>

        <div className="mt-3">
          <span className="font-thin text-sm text-gray-300 capitalize mr-1">
            genre:
          </span>
          {data.genres?.map((genre) => (
            <span
              key={genre.id}
              className="mr-2 border border-gray-400 rounded-md p-1 text-xs text-gray-300 hover:text-gray-50 cursor-pointer">
              {genre.name}
            </span>
          ))}
        </div>

        <div className="mt-3">
          <p className="font-thin text-sm text-gray-300 leading-normal">
            {data.overview}
          </p>
        </div>

        <div className="mt-3">
          <span className="font-thin text-sm text-gray-300 capitalize mr-1">
            product companies:
          </span>
          {data.production_companies?.map((company) => (
            <span
              key={company.id}
              className="font-thin text-sm text-gray-300 capitalize mr-1 after:content-[',']">
              {company.name}
            </span>
          ))}
        </div>
        <div className="mt-3">
          <span className="font-thin text-sm text-gray-300 capitalize mr-1">
            Country:
          </span>
          {data.production_countries?.map((country, index) => (
            <span
              key={index}
              className="font-thin text-sm text-gray-300 capitalize mr-1 after:content-[',']">
              {country.name}
            </span>
          ))}
        </div>
        <div className="mt-3">
          <span className="font-thin text-sm text-gray-300 capitalize mr-1">
            language:
          </span>
          {data.spoken_languages?.map((language, index) => (
            <span
              key={index}
              className="font-thin text-sm text-gray-300 capitalize mr-1 after:content-[',']">
              {language.name}
            </span>
          ))}
        </div>

        <div className="flex items-center mt-4">
          <div className="flex items-center rounded-md p-2 cursor-pointer mr-4 bg-indigo-700">
            <FontAwesomeIcon icon={faPlay} style={{ fontSize: 20 }} />
            <span className="font-normal text-gray-300 text-base capitalize ml-2 hover:text-gray-50">
              watch movie
            </span>
          </div>
          <div className="flex items-center border border-gray-400 rounded-md p-2 cursor-pointer mr-4">
            <FontAwesomeIcon icon={faVideoCamera} style={{ fontSize: 20 }} />
            <span className="font-normal text-gray-300 text-base capitalize ml-2 hover:text-gray-50">
              watch trailer
            </span>
          </div>
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faShare} style={{ fontSize: 20 }} />
            <span className="font-normal text-gray-300 text-base capitalize ml-2 hover:text-gray-50">
              share
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
