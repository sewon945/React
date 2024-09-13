import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header-container'>
            <div className='link-container'>
                <Link to='/'>Idus</Link>
            </div>
            <div className='link-container'>
                <Link to='/'>Main</Link>
                <Link to='/list'>List</Link>
            </div>
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/join'>Join</Link>
            </div>
        </div>
    )
}

export default Header