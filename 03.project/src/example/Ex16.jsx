import React, { useState, useEffect } from 'react'

const Ex16 = () => {
    // Life Cycle, useEffect : 생명주기
    // useEffect(() => { 구현 로직 }, []) 
    // : 화면이 렌덩링 되자마자 화면에 처음 보여져야 할 데이터를 다룸

    console.log('a. 함수 초기화'); // 컴포넌트를 실행시킬 때(렌더링될 때) 가장 먼저 출력됨

    // 초기값 0을 감지해서 버튼 클릭하지 않아도 한 번씩 다 출력되어 있음
    const [num, setNum] = useState(0);

    const btnCk = () => {
        setNum(num + 1);
    }

    // useEffect (빈배열)
    // useEffect(() => {}, []) 화면이 제일 처음 렌더링 됐을 때만 콘솔로그 출력
    // API Call
    useEffect(() => {
        console.log('c. Mount');   // c.Mount라는 화살표 함수 자체가 계속 렌더링
    }, [])   // 빈 배열[]을 넣어주면 함수 초기화라는 출력문만 렌더링
    // 빈 배열이라 처음 렌더링 될 때만 출력


    // useEffect (배열 안에 값 넣어주기)
    // useEffect(() => {}, [변화를 감지할 대상])
    useEffect (() => {
        console.log('update!');
    }, [num])
    // state값 감지해서 버튼 누를 때마다 출력됨

    return (
        <div>
            {/*  */}
            {console.log('b. rendering')}  
            <h1>FUNCTION COUNTER : {num}</h1>
            <button onClick={btnCk}>+1</button>
        </div>
    )
}

export default Ex16