import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    /* Link 컴포넌트
        - 웹페이지에서 링크를 이동하는 태그는 => a 태그 사용
        - a 태그는 클릭 시 새로운 페이지를 불러오기 때문에 SPA React 접합하지 않는다.
        - Link 컴포넌트 사용 시 새로운 페이지를 불러오지 않는다.
        - 브라우저 주소의 경로만 바꿔서 진행한다.
        - index.js에서 BrowserRout로 <App />을 감싸줬기에 사용 가능
        - to 라는 속성이 필요하다.
    */

    // 1) useNavigate 사용
    // const 변수 = useNavigate()
    // 페이지 이동이 필요할 때 변수('경로')   ex. ('/mypage')
    const nav = useNavigate()

    // 2) 로그인 상태 나타내는 변수 만들기
    let auth = true 
    // let auth = false 

    return (
        <div>
            Main

            <br/>
            {/* <Link> : History API를 통해 브라우저 주소의 경로만 바꿔주는 역할 (a 태그와 비슷) */}
            <Link to='/about'>About 페이지로 이동</Link>
            <br />
            <Link to='https://smhrd.or.kr'>SMHRD로 이동</Link>
            <br />
            {/* 1) useNavigate 불러옴 */}
            {/* <button onClick={() => {nav('/mypage')}}>마이페이지</button> */}
            <button onClick={() => {
                // 2) auth가 true이면 mypage, false이면 about
                auth ? nav('/mypage') : nav('/about')
            }}>
                마이페이지
            </button>

        </div>
    )
}

export default Main