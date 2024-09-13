import React from 'react'

const Ex05 = () => {

    // map() 함수 : 기존에 있던(만들었던) 배열을 새로운 배열 형식으로 바꿔주는 함수
    // map() 함수에서 매개변수는 주로 item 으로 씀

    // 배열 생성
    let food = ['샐러드', '도시락', '컵누들'];
    console.log(food);

    // let newFood = food.map((item) => <p> {item} </p>)
    let newFood = food.map((item) => <button key={item}> {item} </button>)

    // 새로운 배열 생성
    let numList = [1, 2, 3, 4, 5];
    console.log(numList);
    // 위의 numList를 활용하여 화면에 2, 4, 6, 8, 10 이라는 버튼 생성하기
    let newNumList = numList.map((item) => <button key={item}> {item*2} </button>)
    console.log(newNumList);   

  return (

    <div>
        {newFood}
        <br/><hr/>
        {newNumList}
    </div>
  )
}

export default Ex05