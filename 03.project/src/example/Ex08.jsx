import React, {useState} from 'react'
import Ex08SubItem from '../components/Ex08SubItem'

const Ex08 = () => {
    /* 
        컴포넌트끼리 값 전달하기
        Ex08.jsx - 상위(부모)요소 => 하위 컴포넌트인 Ex08SubItem.jsx 파일 만들어주기
        02.project에서 App.js랑 비슷(참고)
    */
    // state변수-inputTitle
    const [inputTitle, setInputTitle] = useState('');
    const [rcTitle, setRcTitle] = useState('');

    const changeData = (e) => {   // 내가 만든 함수를 컴포넌트에 전달하기
        setRcTitle(e.target.value)
        // console.log(e.target.value);  // 브라우저 콘솔에 뜨는 지 확인
    }

  return (
    <div>
        <h2>컴포넌트끼리 값 전달을 해보자~!</h2>
        <p>
            1-1. 상위에서 입력 : {" "}
            <input
                type='text'
                onChange={(e) => {   // value값을 보내는 함수
                    // console.log(e.target.value); // 브라우저 콘솔에 뜨는 지 확인
                    setInputTitle(e.target.value)   // 이 함수가 inputTitle에 들어감
                }}
            />
        </p>
        <Ex08SubItem title={inputTitle} changeData={changeData}/>  
        {/* 그래서 setInputTitle(e.target.value) => inputTitle로 들어간 거니까 inputTitle이라는 변수만 써주기 */}
        <span>2-2. 상위에서 입력 받은 값은 {rcTitle} 입니다.</span>
    </div>
  )
}

export default Ex08