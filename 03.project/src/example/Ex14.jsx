import React, { useRef } from 'react'

const Ex14 = () => {

    const divRef = useRef()

    
    const changeSize = (size) => {   
        console.log(divRef.current.className);
        // useRef를 활용하여 반환되는 데이터 타입이 객체
        divRef.current.style.width = `${size}px`
        divRef.current.style.height = `${size}px` 
        //  divRef.current.style.? : div 태그안의 ref라는 속성을 사용할 수 있게끔 작성
    }

    // ckBtn 함수 선언문 만들기 - 버튼 클릭할 때마다 사이즈 바꾸기
    const ckBtn = (e) => {
        console.log(e);
        console.log('ck', e.target.innerText);

        // 조건문을 사용하여 크기 변경
        if(e.target.innerText == '작게') {    // e.target.innerText 이게 작게라면
            changeSize(100)                   // 내가 변경 시키고 싶은 changeSize에 100이라는 값 넣어주기
        } else if(e.target.innerText == '원본') {
            changeSize(200)
        } else {
            changeSize(300)
        }
    }

    let divStyle = {
        marginTop : '3%',
        backgroundColor : 'skyblue',
        width : '200px',
        height : '200px'
    }

    return (
        <div>
            <div>
                <button onClick={ckBtn}>작게</button>
                <button onClick={ckBtn}>원본</button>
                <button onClick={ckBtn}>크게</button>
            </div>

            {/* 버튼을 클릭할 때마다 내가 만든 div로 바로 접근할 수 있게끔 하기 */}
            <div style={divStyle} ref={divRef}></div>
        </div>
    )
}

export default Ex14