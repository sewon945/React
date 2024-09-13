import React from 'react'
import { useNavigate } from 'react-router-dom'
import './movie.css'

const Home = () => {
    let nav = useNavigate();
    return (
        <div className='home'> 
            <div className='home-content'>
                <h1>Welcome to the Movie App</h1>
                <button onClick={()=>{
                    nav('/movies')

                }}>search</button>
            </div>
        </div>
    )
}

export default Home