import React, { useState, useRef } from 'react'
import '../style/ex12.css'
/* 
    useRef란?
    
    1. 저장 공간으로 사용 가능
    useState와의 차이점 : useRef는 재 렌더링 발생하지 않고, 변수들의 값이 유지됨

    2. DOM 요소에 접근할 때
    기존에 JS에서는 메서드를 통해 DOM요소에 접근
*/

const Ex12 = () => {
    // 렌더링 된다 => 화면이 바뀐다
    // 함수형 컴포넌트가 실행시킬 때 먼저 렌더링이 돼서 출력
    // State Up 버튼을 누를 때마다 콘솔 렌더링 숫자 올라감 
    // => 버튼을 클릭할 때마다 state함수를 실행시키기에 count 숫자도 올라가면서 화면도 렌더링되고 콘솔 렌더링 숫자도 바뀜
    console.log('렌더링!!');
    const [ count, setCount ] = useState(0)

    // 초기값 0이 current 값의 속성 안에 들어감 (초기값을 1로 바꿔주면 콘솔의 current값도 1로 바뀜)
    const countRef = useRef(0)
    console.log(countRef);

    // 버튼을 클릭할 때마다 호출되는 함수
    const increaseCountState = () => {
        // 버튼 누를 때마다 +1
        setCount(count + 1)   
    }

    // 버튼 onClick 이벤트에 써준 거 함수 만들어주기?
    const increasCountRef = () => {
        // 버튼 누를 때마다 +1
        // countRef.current에 1을 넣어서 다시 대입해주겠다
        countRef.current += 1
        console.log(countRef.current);
    }

    return (
        // ex12.css의 className 불러주기
        <div className='container'> 
            <div className='counter-box'>
                {/* count를 불러줘야 함수 호출되어서 클릭할 때마다 +1씩 됨 */}
                <p className='count-text'>State : { count } </p>
                <p className='count-text'>Ref : { countRef.current } </p>
                <button className='count-button' onClick={increaseCountState}>State Up</button>
                <button className='count-button' onClick={increasCountRef}>Ref Up</button>
            </div>
        </div>
    )
}

export default Ex12