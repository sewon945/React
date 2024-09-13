import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const App2 = () => {
    /*
        1) index.html에 (리액트카카오맵 Tutorial) script 태그 추가 -> 발급받은 key 넣기
        2) TERMINAL => install : npm install react-kakao-maps-sdk
        3) import => Map, MapMaker

        - Map : 지도 생성
            center => 지도 중심 위치 / 위도(lat) , 경도(lng)
            style => 지도 크기 조절 가능
        - MapMarker : 마커 생성
            position => 마커 위치 / 위도(lat) , 경도(lng)
    */


    return (
        <div>
            <Map center={{ lat : 33.5563, lng : 126.79581 }}
                style={{ width : '100%', height : '360px' }}
            >
                <MapMarker position={{ lat : 33.55635, lng: 126.795841 }}>
                    <div style={{ color : '#000' }}>Hi</div>
                </MapMarker>
            </Map>
        </div>
    )
}

export default App2