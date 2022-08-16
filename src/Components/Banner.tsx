import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../../constants/movie"
import { Movie } from "../../typings"
import { FaPlay } from "react-icons/fa"

interface Props {
    netflixOriginals: Movie[]
}

export const Banner = ({netflixOriginals}:Props) => {
    const [movie,setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

  return (
    <div>
        <div className="absolute -z-10 top-0 left-0 h-[95vh] w-screen">
            <Image
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                layout="fill"
                objectFit="cover" 
                alt="bg"/>
        </div>

        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
            {movie?.overview}
        </p>

        <div>
            <button className="bannerButton bg-white text-black">
                <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>Play</button>
            <button className="bannerButton">More Info</button>
        </div>
    </div>
  )
}
