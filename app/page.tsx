'use client'

import { Movie, ResponseData } from '@/interface'
import { useEffect, useState } from 'react'

import MovieData from './Movie'

export default function Home() {
  const [movieList, setMovieList] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchMovieList = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      const data: ResponseData = await res.json()

      if (data?.results) {
        setMovieList(data?.results)
        setLoading(false)
      }
    } catch (error) {
      if (error) setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovieList()
  }, [])

  return (
    <main>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div className="grid grid-cols-fluid gap-10 p-10">
          {movieList.map((movie) => (
            <MovieData key={movie.id} params={movie} />
          ))}
        </div>
      )}
    </main>
  )
}
