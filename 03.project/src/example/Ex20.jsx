import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/ex20.css'

const Ex20 = () => {
    const [city, setCity] = useState('gwangju');
    const [temp, setTemp] = useState('0');
    const [icon, setIcon] = useState('');
    const [cloud, setCloud] = useState('');

    // onClick 이벤트 안에 getCity라는 함수를 넣어 매개변수로 전달하여 인수로 넣어줌
    const getCity = (cityName) => {
        console.log(cityName);
        setCity(cityName)   // 버튼 누를 때마다 지역이 바뀜
    }

    // url 주소값 함수 (city -> state값 적용해서 내가 원하는 도시 데이터를 가져올 수 있게 함)
    const getData = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=603aa562f93c1b6e5fb4e7596aa820d5`

        // Axios
        /*  
            비동기 작업을 쉽게 처리할 수 있는 promise 기반의 구조
            요청과 응답 데이터를 자동으로 JSON 형식으로 변환
            브라우저와 Node.js 환경에서 모두 사용 가능
            => 결론, HTTP 요청을 보다 효율적이고 간편하게 처리할 수 있다.
        */

        axios
        .get(url)   // url 주소값 요청하기
        .then((res) => {   // res - 날씨 api에서 url 주소값을 요청했을 때 나한테 응답해주는 데이터
            console.log(res);

            // console.log를 활용하여 구름의 양 출력(객체 속성에 접근)
            console.log('weather res : ', res.data.clouds.all);

            // 켈빈 온도 - 273 = 섭씨 온도 (정수형태로 바꿔주기)
            setTemp(parseInt(res.data.main.temp - 273))

            // 아이콘 세팅(날씨 데이터 안에 배열 데이터를 인덱스로 표현)
            setIcon(
                 `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
            )

            // 구름의 양 비교(조건문 안에 비교식을 위의 res.data.clouds.all 사용)
            // 90보다 크면 매우 흐림
            // 60보다 크면 흐림
            // 30보다 크면 약간 흐림
            // 위 조건이 다 아니면 맑음
            if(res.data.clouds.all > 90) {
                setCloud("매우 흐림")
            } else if (res.data.clouds.all > 60) {
                setCloud("흐림")
            } else if (res.data.clouds.all > 30) {
                setCloud("약간 흐림")
            } else {
                setCloud("맑음")
            }
            
        })
    }

    // useEffect - city 변경될 때마다 getData 함수 가져와서 데이터 변경
    useEffect(() => {
        getData()
    }, [city])   // 배열 안에 city 넣어준 이유 - city값이 바뀔 때마다 이 함수 가져올 것이다

    return (
        <div className='weather-container'>
            <div className='weather-item'>
                <h1>날씨 정보</h1>

                <div className='weather-data'>
                    {/* 내가 가져온 state들을 활용하여 출력(아이콘, 온도, 도시, 구름) */}
                    <img src={icon} width='100px'></img>
                    <h1>{temp}˚C</h1>
                    <h3>{city}</h3>
                    <h4>{cloud}</h4>
                </div>
                <div>
                    <button
                        onClick={() => {
                            getCity('GWANGJU')
                        }}
                    >
                        광주
                    </button>
                    <button
                        onClick={() => {
                            getCity('SEOUL')
                        }}
                    >
                        서울
                    </button>
                    <button
                        onClick={() => {
                            getCity('BUSAN')
                        }}
                    >
                        부산
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Ex20