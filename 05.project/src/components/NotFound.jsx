import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <div className='notfound-container'>
            <h1>404</h1>
            <p>페이지를 찾을 수 없습니다!</p>
            <Link to='/' className='home-link'>홈으로 돌아가기</Link>
        </div>
    )
}

export default NotFound