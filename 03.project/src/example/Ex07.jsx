import React, {useState} from 'react'
import data from '../json/ex06data.json'

const Ex07 = () => {

    // filter 함수: 배열의 각 요소에 대해서 주어진 함수의 결과값이 참인 요소들만 모아서 새로운 배열로 반환하는 함수 
    
    console.log('data : ', data.result[0].birthYear);

    const [newArr, setNewArr] = useState(
        data.result.filter(item => item.birthYear <= 1994)
        // item.birthYear <= 1994 : 비교식 (조건이 참인 애들만 걸러져서 그 값이 state 함수에 들어감) => birthYear이 1994보다 많거나 같은 속성값만 분리해줌(아이유, 수지)
    );

  return (
    <div>
        <h1>1994년생과 나이가 같거나, 그보다 나이가 많은 사람들만 출력하시오</h1>
        {/* map 함수 사용하기 */}
        {/* newArr에 내가 조건을 준 값이 초기값으로 들어감 , h3에 key값 지정해줘야 콘솔창에서 오류 안 뜸 */}
        {newArr.map(item => 
            <h3 key={item.title}>{item.title}</h3>
        )}
    </div>
  )
}

export default Ex07