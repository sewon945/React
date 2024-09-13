import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ item, idx }) => {
    // props 데이터 전달 받기
    console.log(item);
    // console.log(idx);
    let nav = useNavigate();

    return (
        <div
            className='product-container'
            onClick={() => {  // 익명함수
                // detail로 경로 설정하고 / 1, 2, 3   useParams 숫자는 인덱스 사용

                nav(`/detail/${idx}`)
            }}
        >
            {/* 이미지 출력 후 width 100px */}
            <img src={item.src} width='200px'/>
            <p>{item.title}</p>
            <p>{item.price}원</p>
        </div>
    )
}

export default ProductItem