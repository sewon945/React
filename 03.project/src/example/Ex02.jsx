import React, { useState } from 'react'
import pic from '../img/img1.gif'
// import '../style/ex02.css'

const Ex02 = () => {
/* React에서 이미지 경로를 설정하는 방법

    방법 1) src 폴더에서 이미지를 import 하기 => import 이미지 변수(pic) from '경로'
    => <img src={이미지 변수}/>

    방법 2) css에서 background-image 사용하기 => background-image : url(경로)
*/

    // 실습 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
    //         '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요'로 변경

    // 2. '좋아요' 버튼 클릭 시, 비어있는 하트가 꽉 찬 하트로 변경
    //    '좋아요 취소' 버튼 클릭 시, 꽉 찬 하트가 비어있는 하트로 변경

    // state 활용 => 만들어야 할 state는 총 2개(하트, 좋아요)
    const [likeEmoji, setLikeEmoji] = useState('♡');
    const [likeNum, setLikeNum] = useState(0);

    {/* handLike 함수 만들기 */}
    const handleLike = () => {
        // 조건식으로 로직 작성(state 값으로 조건식 설정)
        if(likeEmoji == '♡') {
            setLikeEmoji('♥');
            setLikeNum(1);
        } else if(likeEmoji == '♥') {
            setLikeEmoji('♡');
            setLikeNum(0);
        }
    }

  return (
    <div className='post'>
        <img width='300px' src={pic}></img>
        <p>
            <span onClick={handleLike}>
                {/* state 활용 */}
                {likeEmoji}
            </span>
            <span>
                {/* 좋아요 {state 활용} 개 */}
                좋아요 {likeNum}개
            </span>
        </p>
    </div>
  )
}

export default Ex02