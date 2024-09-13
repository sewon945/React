import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// 비동기 방식을 위한 axios import
import './movie.css'

const MovieList = () => {
  let nav = useNavigate()

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const API_KEY = '99602eec8f34493a47e14712e5db6850'; // 여기 YOUR_TMDB_API_KEY를 실제 API 키로 대체하세요
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    axios
      .get(URL)
      .then(res => {
        console.log(res)
        setMovies(res.data.results)
        console.log(movies);
      })
  }, [])

  return (
    <div className='movie-list'>
      <h1>Popular Movies</h1>
      <button onClick={() => { nav('/') }}>HOME</button>
      <div className='movies'>
        {/* map 함수 사용 */}
        {movies.map((item, idx) => (
          <div className='movie' key={idx}>
            <Link to={`/movie/${idx}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              /> <br />
            </Link>
            {item.original_title} <br />
            Rating: {item.vote_average}

          </div>
        ))}
      </div>

    </div>
  )
}

export default MovieList