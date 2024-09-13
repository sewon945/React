import React, { useState, useEffect } from 'react'
import '../style/ex18.css'

const Ex18 = () => {

    const [computerNumber, setComputerNumber] = useState(0);
    const [userNumber, setUserNumber] = useState('');
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);

    // 1. 랜덤 수 만들기
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 10) + 1;   // 1에서 10사이의 랜덤한 정수 반환
    }

    // 2. handleInputChange 선언부 만들기
    const handleInputChange = (e) => {
        setUserNumber(e.target.value);
    }

    // 3. handelCheckClick 선언부 만들기
    const handleCheckClick = () => {
        // 조건문을 활용해서 정답 출력
        const num = parseInt(userNumber);   // string타입이기에 정수 형태로 변환시키기
        if (num === computerNumber) {
            setMessage('정답입니다!')
            setGameOver(true);
        } else {
            setMessage('틀렸습니다. 다시 시도해보세요.')
            setUserNumber('')   // setUserNumber를 비워주면 버튼 클릭 시 입력한 값 사라짐
        }
    }


    const handleRestartClick = () => {
        // 비교대상 만들기 - restart할 때 초기로 바꿔주기
        setComputerNumber(generateRandomNumber());
        setUserNumber('')
        setMessage('')
        setGameOver(false);
    }

    // useEffect 
    useEffect(() => {
        // 화면이 처음 렌더링 됐을 때만 computerNumber의 랜덤 수 난수 넣어줌
        setComputerNumber(generateRandomNumber())
    }, [])




    return (
        <div className='number-game-container'>
            <h1>숫자 맞추기 게임</h1>
            {/* gameOver의 반대값 가져와서 정답이면 게임끝 */}
            {!gameOver ? (
                <div className='game-content'>   
                    <p>1에서 10 사이의 숫자를 맞춰보세요.</p>
                    <input 
                    type="number" 
                    // 내가 입력한 값이 위 handleInputChange 함수의 value값으로 넘어오게 됨
                    value={userNumber}
                    onChange={handleInputChange}
                    />
                    <button onClick={handleCheckClick}>확인</button>
                    <p className='message'>{message}</p>
                </div>
            ) : (
            <div className='game-content'>
                <p className='message'>{message}</p>
                <button onClick={handleRestartClick}>재시작</button>
            </div>
        ) }              
        </div>
    )
}

export default Ex18