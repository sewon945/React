import React, {useState} from 'react'
// useState 사용할 준비 완료 - import 해준 것

const Ex01 = () => {
    // const [변수이름, state를 변경시켜주는 함수] = useState(저장할 수 있는 데이터 타입-string,number,boolean,array,object)
    // const [state, setState] = useState(초기값)
    // setState : 새로고침 없이 콘솔창에서 이어가는 것
    const [num2, setNum2] = useState(0);


    // event라고 매개변수에 넣어주면 onClick이라는 event의 정보가 F12 콘솔에 넘어옴
    const ck = (event) => { 
        console.log(event.target.innerText); // event 따로 확인
        // event.target - 어디에 event를 주고 있느냐 => button 안에 있는 내용 출력됨
    }

    let num = 0; // 전역 변수 지정
    const increase = () => {
        console.log('숫자 1씩 증가');
        // num = num + 1; 
        // console.log(num);
        setNum2(num2 + 1) // setNum2라는 함수 안에 num2를 +1을 해주기
    }

    const decrease = () => {
        console.log('숫자 1씩 감소');
            if(num2 > 0) 
            setNum2(num2 - 1)        
    }

  return (
    <div>
        <div>
            <p>{num2}</p>
            <button onClick={ck}>클릭!</button>
            <br></br>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    </div>
  )
}
// => 여기까지가 컴포넌트 - 화면이 렌더링 되고 있다 (화면이 변하고 있다)
// 콘솔에는 출력이 잘 되지만 화면에는 계속 초기화되고 있음
// index.js 

export default Ex01