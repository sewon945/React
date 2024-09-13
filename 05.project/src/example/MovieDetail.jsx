import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './movie.css'

const MovieDetail = () => {

  const [movie, setMovie] = useState({})
  let nav = useNavigate()
  let { num } = useParams();

  useEffect(() => {
    const API_KEY = '99602eec8f34493a47e14712e5db6850';
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    axios
      .get(URL)
      .then(res => {
        setMovie(res.data.results[num])

        console.log(res);
      })

  }, [])




  return (
    <div className='movie-detail'>
      <div>
        <button onClick={()=>{nav('/')}}>HOME</button>
        <button onClick={()=>{nav('/movies')}}>MOVIE LIST</button>
      </div>
      <p>{movie.original_title} </p>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      />
      <p>{movie.release_date}</p>
      <p>Rating : {movie.vote_average}</p>
      <p>{movie.overview}</p>

    </div>
  )
}

export default MovieDetail