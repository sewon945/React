import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
    /*
        async / await(어싱크/어웨잇) : 비동기 통신 함수를 동기 코드처럼 작성할 수 있는 JavaScript 문법
        fetch : JavaScript의 내장 HTTP 요청 함수로, Promise를 반환
        axios : HTTP 요청 외부 라이브러리 (자동으로 JSON 데이터 처리)
        ajax (jQuery) : jQuery에서 제공하는 HTTP 요청 함수 

        async 키워드
        : 함수 앞에 붙여서 우리가 사용할 함수를 비동기 처리 하겠다!

        await 키워드
        Promise가 해결될 때까지 함수의 실행을 일시 정지
        await는 오직 async 함수 안에서만 사용 가능
    */
    const api_key = "INZONHz2apOLne7m9WWoNk89x5polhghKtO7ZMor";
    const url = `https://api.nasa.gov/planetary/apod?` +
         `start_date=2024-06-13&api_key=${api_key}`;

    const [ dataList, setDataList ] = useState([]);

    const nasaApiCall = async () => {   // 통신의 응답 , async - 선언문과 동일
        try{
            const res = await axios.get(url);  // await - 응답 받을 때까지 기다리겠다(함수 실행을 잠깐 멈추겠다)
            console.log(res.data);
            setDataList(res.data)
        }
        catch(error){   // 통신의 오류(에러)
            console.error('데이터 로딩 오류 : ', error);
        }
    }

    useEffect(() => {
        nasaApiCall();
    }, [])  // 첫화면에서만 뜨게 하고 싶을 때 빈배열 넣기

    return (
        <div
            style={{
                display : 'flex',   // flex : 세로를 가로로 전환
                flexDirection : 'column'
            }}
        >
            {/* img 속성 안에 src가 고유하기에 img 태그 써서 key와 src 속성 넣기 */}
            {dataList.map((item) => (
                <img key={item.date} src={item.url}></img>
            ))}
        </div>
    );
}

export default App;
