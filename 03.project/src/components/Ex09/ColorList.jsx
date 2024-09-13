import React, {useContext} from 'react'   // 전역적으로 사용할 수 있는 useContext도 임폴트 해주기
import { ColorContext } from '../../context/Ex09ColorContext'  // 내가 만든 컬러보관함을 임폴트 해야함

const ColorList = () => {
    const { setChoiceColor } = useContext(ColorContext);
    // const { 내가 value 안에 넣은 값 }
    let color = ['tomato', '#FF8C00', 'yellow', 'darkgreen', '#191970'];

    const ck = (e) => {
        console.log('ck', e.target.style.backgroundColor);
        setChoiceColor(e.target.style.backgroundColor); // 색상 변경
    }

  return (
    <div style={{display : 'flex'}}>
        {color.map((item) => ( // map이라는 함수를 통해서 방문하겠다 item이라는 매개변수는 ['tomato', '#FF8C00', 'yellow', 'darkgreen', '#191970'] 전부를 뜻함
            <div 
                onClick={ck}   // => 클릭할 때마다 ck 호출
                key={item}
                style={{
                    width : '100px',
                    height : '100px',
                    backgroundColor : `${item}`   // => item은 내가 설정한 5개의 색상
                }}
            ></div>
        ))}
    </div>
  )
}

export default ColorList