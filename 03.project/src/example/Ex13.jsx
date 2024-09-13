import React, { useRef } from 'react'
import '../style/ex13.css'

const Ex13 = () => {
    // useRef라는 함수를 사용하여 inputRef라는 곳에 담을 것임
    const inputRef = useRef();

    // 아래 button 태그에서 호출했으니까 여기서 handleButtonClick 함수 선언해줘야함
    const handleButtonClick = () => {
        // 버튼을 클릭할 때마다 current라는 속성 안에 input 호출
        console.log(inputRef);
        // value -> input 태그 안에 있는 값을 가져옴
        // alert 창에 내가 입력한 값 출력하기 - 변수랑 텍스트 같이 출력하기 위해서 `변수처리 후 문자열` 사용함
        alert(`Input Value : ${inputRef.current.value} `)
        // 입력 필드 초기화(Show Input 눌렀을 때 input 태그 안에 글자(값) 지워주기)
        inputRef.current.value = '';
    }


    return (
        <div className='container'>
            <header className='header'>
                <h1>UseRef Example</h1>
                {/* 위의 const inputRef에 접근하려고 ref로 이벤트를 줌 */}
                <input type='text' ref={inputRef} placeholder='Enter something' />
                <button onClick={handleButtonClick}>Show Input</button>
            </header>
        </div>
    )
}

export default Ex13