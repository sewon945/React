import React, { useState } from 'react'
import Header from '../components/Ex10/Header'
import Content from '../components/Ex10/Content'
import Footer from '../components/Ex10/Footer'
// 전역적으로 사용할 수 있는 ThemeContext 임폴트하기
import { ThemeContext } from '../context/Ex10ThemeContext'
import '../style/ex10.css'

const Ex10 = () => {

    const [isDark, setIsDark] = useState(false);   // 초기값으로 false라는 불리언 값을 넣어주기(삼항연산자)

  return (
    // Provider를 넣어주므로써 전역시켜주겠다?
    <ThemeContext.Provider value={{ isDark, setIsDark }}> 
        <div className='page'> 
            {/* 컴포넌트 세 개 다 가져와서 임폴트 해주기 */}
            <Header/>
            <Content/>
            <Footer/>
        </div>
    </ThemeContext.Provider>
  )
}

export default Ex10