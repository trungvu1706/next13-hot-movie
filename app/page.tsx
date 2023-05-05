import { ResponseData } from '@/interface'
import MovieData from './Movie'

async function getMovieList() {
  const res = await fetch(`${process.env.BASE_URL}=${process.env.API_KEY}`, {
    next: { revalidate: 60 },
  })
  const data: ResponseData = await res.json()
  return data
}

export default async function Home() {
  const data = await getMovieList()

  return (
    <main>
      <div className="grid grid-cols-fluid gap-10 p-10">
        {data.results.map((movie) => (
          <MovieData key={movie.id} params={movie} />
        ))}
      </div>
    </main>
  )
}
