import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'


const ProductList = ({ list, setList }) => {
    // porps로 데이터 전달받기
    console.log('list', list);

    useEffect(() => {
        // React의 public 폴더는 서버와 통신하고 있는 폴더 - bestList.json 적어주면 경로 설정 완료
        let url = 'http://localhost:3000/bestList.json'
        axios
            .get(url)
            .then((res) => setList(res.data.list))   // 위 경로에서 받아오는 매개변수(res)를 setlist에 넣어줌
    }, [])

    return (
        <div className='list-container'>
            {/* 
                map함수 사용해서 ProductItem에 보내기
                ProductItem으로 이동 - props를 활용해서 값 보내기
                item, idx(index 번호) => 속성 이름 동일하게 지정해서 넘겨주기
                ** key값 설정 - no(number)로 설정 **
            */}
            {/* map,find, 필터 등의 함수를 쓸 때에는 소괄호()로 작성하면 묵시적으로 return이 소괄호 안에 적혀있다
            만약 중괄호{}로 적고 싶다면 return을 적어줘야 한다 */}
            {list.map((item, idx) => (
                <ProductItem key={item.no} item={item} idx={idx} />
            ))}
        </div>
    )
}

export default ProductList