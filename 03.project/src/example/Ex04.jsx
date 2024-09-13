import React from 'react'

const Ex04 = () => {
    let students = [
        { name: '오세원', age: 24, bloodType: 'O'},
        { name: '코난', age: 7, bloodType: 'AB'},
        { name: '짱구', age: 5, bloodType: 'A'}
    ]
    // map() 함수를 써서 한 번에 다 불러오기(내가 푼 방식)
    // let newStudents = students.map((item) => <p key={item.name}>안녕하세요 제 이름은 {item.name}입니다. 제 나이는 {item.age}살 이고, 제 혈액형은 {item.bloodType}형 입니다.</p>)

  return (
    <div>
        <h3>Case 1 : 객체의 값을 하나하나 출력</h3>
        <p>
            안녕하세요 제 이름은 {students[0].name}입니다. 저는 {students[0].age}살, {students[0].bloodType}형 입니다.
        </p>
        <p>
            안녕~! 내 이름은 {students[1].name}!! {students[1].age}살, {students[1].bloodType}형 이죠.
        </p>
        <p>
            안녕~~! 내 이름은 {students[2].name}!!!! {students[2].age}살, {students[2].bloodType}형 이죠.
        </p>

        <h3>Case 2 : Map 함수를 이용해서 출력</h3>
        {/* 선생님이 풀어준 방식 */}
           {students.map((item) =>
            <p key={item.name}>
            안녕하세요. 제 이름은 {item.name}입니다. 
            제 나이는 {item.age}살이고, 제 혈액형은 {item.bloodType}형 입니다.
            </p>            
        )}
    </div>
  )
}

export default Ex04