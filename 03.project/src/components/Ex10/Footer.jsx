import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Ex10ThemeContext'


const Footer = () => {
    
    // Ex10.jsx파일에서 value 안에 넣어준 value={{ isDark, setIsDark }} 값과 const에 들어가는 값과 동일함
    const { isDark, setIsDark } = useContext(ThemeContext);   
    const toggleTheme = () => {   // toggleTheme() : 버튼 누를 시 토클테마 함수 실행
        setIsDark(!isDark);   // 부정
    }

  return (
    <div>
        <footer
            className='footer'
            style={{
                backgroundColor : isDark ? 'black' : 'lightgray'   // 삼항연산자-백그라운드 컬러가 isDark인데 참이면 블랙 거짓이면 회색
            }}
        >
            <button className='button' onClick={toggleTheme}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
        </footer>
    </div>
  )
}

export default Footer