import React, { useState } from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'

const MarkerEvent = ({ item }) => {
    // 마커를 화면에 보여줄 건지 결정하는 state 생성
    const [isVisible, setIsVisible] = useState(false)

    return (
        // <div>  content 자체에 하나하나 div태그가 있기에 지워주기
        // </div>

        /*
            마우스를 올렸을 때 => onMouseOver
            마우스를 내렸을 대 => onMouseOut
        */
        <MapMarker
            onMouseOver={() => {setIsVisible(true)}}
            onMouseOut={() => {setIsVisible(false)}}
            position={item.latlng}
            // isVisible이 참이면 item.content를 보여주겠다
        >{isVisible && item.content} 
        </MapMarker>
    )
}

export default MarkerEvent