import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex11TodoContext'


const AddItem = () => {
  // useContext 사용해서 값 전달 받기 - newTodo, setNewTodo, handleNewTodoAddition (Ex11.jsx에 넣어준 것들)
  const { newTodo, setNewTodo, handleNewTodoAddition } = useContext(TodoContext)

  return (
    <div>
      <input
      value={newTodo}   // 내가 적고 있던 문자를 ADD라는 버튼 클릭 시 빈칸으로 만들어줌
      type="text"
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      {/* onChange 이벤트 연결 -> 
      이벤트 객체 사용해서 내가 작성한 값을 setNewTodo에 넣기 */}

      <button onClick={handleNewTodoAddition}>ADD</button>
      {/* onClick 이벤트 연결 ->
        사용자가 버튼 클릭 시, 함수(handleNewTodoAddition) 호출 */}

    </div>
  )
}

export default AddItem