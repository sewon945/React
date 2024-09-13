import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {
    /*  
        useParams
        - url의 파라미터 정보를 가져올 수 있다.
        - useParams는 하나만 사용 가능하다(고유하다).
        - 상품의 고유 번호, 회원 번호, 학번, 사번
    */

    /*  
        useSearchParams
        - 라우터 사용 시 QueryString 정보를 가져와서 관리하고 싶을 때 사용
        - url 뒤에 속성=값&속성=값
        - 검색기능 / 인기글, 신규글 => 카테고리화 할 수 있다
    */
    let {num} = useParams();
    console.log('게시물 번호', num);

    const [query, setQuery] = useSearchParams()
    console.log('인기글 여부 파악', query.get('best'));


    return (
        <div>
            {num}번 째 게시물입니다.
        </div>
    )
}

export default Product