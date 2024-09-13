import React from 'react'

const Ex08SubItem = ({title, changeData}) => { 
    // 구조 분해 할당 : 중괄호 안에 props를 쓰는 게 아니라 속성값을 변수처럼 사용
    // 02.project의 MenuBox.jsx 참고

  return (
    <div>
        <p>1-2. 하위 컴포넌트에서 입력 받은 값은 {title} 입니다.</p>
        <p>2-1. 하위에서 입력 : <input type='text' onChange={changeData}/></p>
        {/* onChange 이벤트가 발생할 때마다 changeData 함수도 같이 실행됨 */}
    </div>
  )
}

export default Ex08SubItem