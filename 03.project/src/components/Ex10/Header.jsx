// import React, { useContext } from 'react'
// import { ThemeContext } from '../../context/Ex10ThemeContext'


// const Header = () => {
//     const {isDark} = useContext(ThemeContext);
//   return (
//     <header
//         className='header'
//         style={{
//             // 삼항연산자 사용
//             backgroundColor : isDark ? 'black' : 'skyblue',
//             color : isDark ? 'white' : 'black'
//         }}
//     >
//         <h1>스마트인재개발원</h1>
//     </header>
//   )
// }

// export default Header

import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Ex10ThemeContext'


const Header = () => {
  const { isDark } = useContext(ThemeContext)
  return (
    <header
      className='header'
      style={{
        // 삼항연산자 사용
        // isdark가 트루면 검정, 펄스면 하늘색
        backgroundColor: isDark ? 'black' : 'skyblue',
        color: isDark ? 'white' : 'black'
      }}
    >
      <h2>스마트인재개발원</h2>
    </header>
  )
}

export default Header