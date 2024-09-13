// rafce => 화살표함수 안에 return문을 가지고 있는 구조가 나옴 => 컴포넌트 생성 완료
import React from 'react'

// props = object 
const MenuBox = (props) => {
    console.log('전달받는 데이터', props);
    // 전달받은 데이터가 객체 형태(props)로 전달받고 있음 

    // MenuBox라는 컴포넌트 안에 넣기
    return (  
        
        // 전달받는 데이터에서 object 형태로 name(key)과 price(value)라는 속성을 전달받음
        <tr>
          <td>{props.temp}{props.name}</td>
          {/* temp라는 속성을 props에서 전달받음 */}
          <td>{props.price}</td>
          {/* 매개변수.속성 */}
        </tr>
        // 이렇게 작성해주면 App.js에서 MenuBox에 적은 키와 값이 전달받은 데이터 출력
)
}

export default MenuBox