import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>게시글 목록</h1>
            <hr />
            <Link to='/product/1?best=true'>정보처리기사 스터디 모집</Link>
            <hr />
            <Link to='/product/2'>리액트 스터디 모집</Link>
            <hr />
            <Link to='/product/3'>엄마 생일 선물을 뭘 드려야 할까?</Link>
            <hr />
        </div>
    )
}

export default About