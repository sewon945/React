import React, { useState } from 'react'

const Ex03 = () => {

    // state 2개 활용 => 내가 누른 숫자 , 랜덤한 숫자
    const [num, setNum] = useState(0);
    const [ran, setRan] = useState(0);

    // 버튼을 클릭할 때 함수가 호출된다 => 함수명은 btnCk
    // 매개 변수에 (event, e) *이벤트 객체*를 넣어서 확인
    // 랜덤 수 구하기 => Math.random()

    const btnCk = (event) => {
        // parseInt : 강제 형 변환(문자->정수) =>  parseInt를 안 해줄 경우 -> 자료형이 달라서 === 해줘야 함  
        setRan(parseInt(Math.random() * 3 + 1));
        console.log(parseInt(event.target.innerText)); // button에 있는 1, 2, 3의 숫자만 보여주고 싶을 때
        setNum(parseInt(event.target.innerText));

        // let number = event.target.innerText
        // setNum(number)
        // setRan(random)
    }

    // 1. 랜덤한 수 뽑아주기
    // 범위 1 ~ 3
    // 2. 누른 버튼의 숫자를 랜덤한 숫자와 비교
    // 3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면 => 정답, 다르면 => 땡
    // if(ran == num) {
    //     console.log('정답!');
    // } else {
    //     console.log('땡!');
    // }

    return (

        <div>
            <div>
                <button onClick={btnCk}>1</button>
                <button onClick={btnCk}>2</button>
                <button onClick={btnCk}>3</button>
            </div>

            <div>
                내가 입력한 숫자 : {num}
                <br/>
                랜덤한 숫자 : {ran}
                <br/>
                {/* 정답인지 오답인지 출력할 수 있는 로직 작성 */}
                {/* 삼항연산자 활용 (정답이냐 아니냐) */}
                {num === ran ? <p>정답!</p> : <p>땡!</p>}

            </div>
        </div>
    )
}

export default Ex03