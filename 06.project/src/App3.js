import React, { useState } from 'react'
import { Map } from 'react-kakao-maps-sdk'
import MarkerEvent from './MarkerEvent'

const App3 = () => {
    /*
        마커 여러 개 띄우기 => state 생성
    */

    // 지도의 중심 위치를 나타내는 state 생성
    const [centerLat, setCenterLat] = useState(33.450705)
    const [centerLng, setCenterLng] = useState(126.570677)
    const [level, setLevel] = useState(3)   // 지도 레벨(크기) 초기값 3

    // 배열 안에 객체 사용 - 배열 안에 객체(데이터) 덩어리가 총 4개 있다는 뜻
    const [data, setData] = useState([
        {
            content: <div>카카오</div>,
            latlng: { lat: 33.450705, lng: 126.570677 }
        },
        {
            content: <div>생태연못</div>,
            latlng: { lat: 33.450936, lng: 126.569477 }
        },
        {
            content: <div>텃밭</div>,
            latlng: { lat: 33.450879, lng: 126.56994 }
        },
        {
            content: <div>근린공원</div>,
            latlng: { lat: 33.451393, lng: 126.570738 }
        }
    ])

    const smhrdMarker = () => {
        // 지도 중심 위치 이동(변경) : 35.149896 126.9197772
        // setState 함수 사용
        setCenterLat(35.149896)
        setCenterLng(126.9197772)
        // 마커 띄울 때 setState 활용
        // 스인재 동구점 -> lat: 35.149896 lng: 126.9197772
        // 스인재 남구점 -> lat: 35.110479 lng: 126.877456
        setData([
            {
                content: <div>스인재 동구점</div>,
                latlng: { lat: 35.149896, lng: 126.9197772 }
            },
            {
                content: <div>스인재 남구점</div>,
                latlng: { lat: 35.110479, lng: 126.877456 }
            }
        ])
        setLevel(8)

    }


    return (
        <div>
            <Map
                // 지도 중심 좌표
                center={{ lat: centerLat, lng: centerLng }}
                // 지도의 크기 => style
                style={{ width: '100%', height: '450px' }}
                // 지도의 확대 레벨
                level={level}
            >
                {/* data라는 state변수 사용해서 map함수 사용하기
                    전달할 위치는 MarkerEvent
                    전달할 데이터는 
                    1. state 안에 있는 전체 데이터 = item
                    2. position 
                    3. content
                    4. key => 위도
                */}
                {data.map((item) => <MarkerEvent
                    item={item}
                    position={item.latlng}
                    content={item.content}
                    key={item.latlng.lat}
                ></MarkerEvent>
                )}

            </Map>
            <button onClick={smhrdMarker}>스마트인재개발원</button>
        </div>
    )
}

export default App3