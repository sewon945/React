import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = ({ list }) => {

    let { num } = useParams();
    // useParams 때문에 idx가 num으로 전달됨
    // div를 클릭할 때마다 Item파일의 nav(`/detail/${idx}`) 인덱스 번호가 list[num]에 전달됨 
    console.log('productDetail : ', list[num]);


    return (
        <div className='list-container'>
            <div className='detail-item'>
                {/* 배열 안의 객체를 가져와야 해서 [num] */}
                <h3>{list[num].title}</h3>
                <p>
                    <span>가격 : {list[num].price}원</span>
                    <br />

                    {/* 삼항연산자를 사용하여 배달비가 무료면(상품의 가격들이 다 다르기에 무료인 free를 사용해서 비교하기) */}
                    {list[num].delivery === 'free' ?
                        <span>배송비 : Free</span>
                        :
                        <span>배송비 : {list[num].delivery}원</span>}
                </p>
                <img src={list[num].src} width='300px' height='300px' />
                <br />

                {/* Link 안에 리스트로 돌아가게끔 처리하기 */}
                <Link to='/list' style={{ textDecoration: 'none', color: 'black' }}>목록으로 이동</Link>
            </div>
        </div>
    )
}

export default ProductDetail