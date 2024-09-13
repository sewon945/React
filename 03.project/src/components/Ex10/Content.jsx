import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Ex10ThemeContext'


const Content = () => {
    const {isDark} = useContext(ThemeContext);
  return (
    <div
        className='content'
        style={{
            // 삼항연산자 사용
            backgroundColor : isDark ? 'black' : 'white',
            color : isDark ? 'white' : 'black'
        }}
    >
        <h1>지각하지 않기! 결석하지 않기!</h1>
    </div>
  )
}

export default Content