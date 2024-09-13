import React, {useState} from 'react'
import { ColorContext } from '../context/Ex09ColorContext'
import ColorList from '../components/Ex09/ColorList'
import ColorResult from '../components/Ex09/ColorResult'

const Ex09 = () => {
    // Context란? : 리액트 컴포넌트에서 값을 전역적으로 공유할 수 있게 하는 기능

    // Q. props로만 데이터를 전달했을 때 발생할 수 있는 문제
    // A. 깊은 위치에 있는 컴포넌트 데이터를 전달해야 할 때 문제가 될 수 있음
    // 연달아서 props 설정 해줘야하는데 실수할 가능성 있음 => props drilling(연달아서 props 설정)

    const [choiceColor, setChoiceColor] = useState('tomato');

    return (
    /* value 안에 state 변수와 state를 변하게 하는 함수 둘 다 넣어주기.. 
    왜? ColorResult에서 내가 만들어 놓은 ColorContext를 사용하겠다
    위 const [choiceColor, setChoiceColor]가 value의 choiceColor로 들어감 */
    <ColorContext.Provider value={{ choiceColor, setChoiceColor }}> 
        <div>
            <h1>색상 변경하기</h1>
            <ColorList/>
            <br />
            <hr></hr>
            <h1>내가 선택한 색상</h1>
            <ColorResult/>
        </div>
    </ColorContext.Provider>
  )
}

export default Ex09