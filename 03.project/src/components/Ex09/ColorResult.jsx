import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex09ColorContext'

const ColorResult = () => {
    // context를 사용하겠다 -> import 완료 -> value 안에 있는 값 가지고 오기
    const {choiceColor} = useContext(ColorContext) // 내가 만들어 놓은 ColorContext를 사용하겠다, const {내가 전역적으로 사용하는 value값}
    console.log('choice Color : ' + choiceColor); // ColorList에서 변경한 색상 바꾸기

  return (
    <div>
        {/* 색상 변경하기에서 내가 원하는 색상을 클릭할 때마다 내가 선택한 색상에 내가 클릭한 색상이 뜸 */}
        <div
            style={{
                width : '100px',
                height : '100px',
                backgroundColor : `${choiceColor}`
            }}  
        ></div>
    </div>
  )
}

export default ColorResult