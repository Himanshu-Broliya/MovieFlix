import { useEffect, useState } from "react"
import { movieData } from "../Constant/MovieData"
import { MovieCard } from "./MovieCard"
import { useDispatch, useSelector } from "react-redux"
import { getNewMovies } from "../redux/CheckBoxSlice"

export const HomeMain = () => {

  const [movieId, setMovieId] = useState(null)
  const dispatch = useDispatch()
  const [newMovies, setNewMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([])

  const checkBoxValues = useSelector(store => store?.checkbox?.checkBoxValue)


  const fiterMovies = () => {
    checkBoxValues.map((value) => {
      const filtered = movieData.filter(movie => movie.moviegenres.includes(value) || movie.movielanguages.includes(value) || movie.moviecountries.includes(value))
      setNewMovies([...newMovies, ...filtered])
      setFilteredMovies([...newMovies, ...filtered])
      dispatch(getNewMovies([...newMovies, ...filtered]))
    })
  }


  useEffect(() => {
    if (checkBoxValues) {
      fiterMovies();
    }
  }, [checkBoxValues])

  


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center md:gap-10 px-16 lg:px-28 pt-32  md:pt-20">
        {
          newMovies.length > 0 ?
            newMovies?.map((item, i) =>
              <div className="" onClick={() => setMovieId(item.imdbmovieid)}>
                <MovieCard movie={item} />
              </div>
            )
            :
            movieData?.map((item, i) =>
              <div className="" onClick={() => setMovieId(item.imdbmovieid)}>
                <MovieCard movie={item} />
              </div>
            )
        }
      </div>
      
    </>
  )
}
