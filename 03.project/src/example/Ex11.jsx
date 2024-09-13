import React, { useState } from 'react'
import { TodoContext } from '../context/Ex11TodoContext'
import List from '../components/Ex11/List'
import AddItem from '../components/Ex11/AddItem'
import '../style/ex11.css'

// 1. 상위요소에서 하위요소로 전달해주는 개념 - props
// 2. 전역적으로 데이터를 보관해서 내가 월할 때 사용하는 개념 - context
// 3. 상태를 감지하여 렌더링에 관여하는 개념 - useState
// 4. 시점에 따른 변화에 대한 개념 - useEffect



const Ex11 = () => {
  // useState 초깃값 = 배열
  const [todos, setTodos] = useState([
    { text: '오늘 해야할 일', completed: false, key: 1 }
  ])

  // 할 일 추가하기, state 생성
  const [newTodo, setNewTodo] = useState('')

  // 새로운 newTodo 데이터를 todos 배열에 추가하는 함수 생성  내가 새로 작성한 text(newTodo)가 ADD를 눌렀을 시 setTodos 함수를 통해 
  const handleNewTodoAddition = () => {
    console.log('handleNewTodoAddition', newTodo);

    // newTodo 추가하기 - setTodos 활용
    // setTodos도 배열로 해주기
    setTodos([
      ...todos,   // 스프레드 문법 : 내가 보관하고 있던 이전까지의 데이터 유지시킨 후 그 뒤에 데이터 연결
                  // ...todos : 기존에 배열이 있다면 , 유지시킨 후 새로운 데이터 추가
      { // 객체
        text: newTodo, 
        completed: false,
        key: todos[todos.length - 1].key + 1
        // 내가 가지고 있는 가장 마지막에 있는 배열의 key 값이 +1 되어야 한다
      }
    ])
    // 텍스트 칸에서 ADD 버튼 클릭 시 마지막에 쓴 값 없애주기(AddItem 안에 input태그 안에서 value값 설정해줘야함)
    setNewTodo('')
  }

  // 삭제 함수 만들기(delkey-삭제할키)
  const handleTodoDelete = (delkey) => {   // 매개변수로 전달 받고 있음
    console.log('handleTodoDelete', delkey);

    // filter 함수 사용해서 데이터 걸러주기
    const filterList = todos.filter((item) => item.key !== delkey)
    // filter 함수를 사용하여 item이라는 키값을 delete한 값을 제외한 나머지 키값들이 
    setTodos(filterList)  // setTodos함수를 통해 todos에 담긴다
  }

  // 키값이 잘 넘어오는 지 ckkey라는 매개변수 사용
  const handleTodoToggle = (ckkey) => {
    console.log('handleTodoToggle', ckkey);

    // find 배열 함수 사용
    const targetTodo = todos.find((item) => item.key === ckkey)  // 비교식을 통해서 내가 체크한 키와 똑같은 지 찾아내는 함수
    console.log('targetTodo', targetTodo);

    if(targetTodo) { // targetTodo 존재 여부 확인 -> 참일 경우 중괄호 실행
      targetTodo.completed = !targetTodo.completed   // not연산자를 사용해서 내가 누른 값인 completed 값을 반대로 대입돼서 변경하겠다
      setTodos([...todos])   // setTodos안에 기존에 내가 한 할 일들 넣어주기
    }
  }


  return (
    <TodoContext.Provider value={{ todos, newTodo, setNewTodo, 
        handleNewTodoAddition, handleTodoDelete, handleTodoToggle 
    }}>  
      <div className='todo-container'>
        <h1>🍦 TODO LIST 🍦</h1>
        {/* List, AddItem 컴포넌트 가져오기 */}
        <List />
        <AddItem />
      </div>
    </TodoContext.Provider>
  )
}

export default Ex11