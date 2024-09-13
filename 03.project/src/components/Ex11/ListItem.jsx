import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex11TodoContext'

const ListItem = ({ todo }) => {   // List 컴포넌트의 ListItem태그에서 가져온 todo
  // useContext를 통해서 handleTodoDelete 가져오기
  // + EX11.jsx에서 value 안에 넣었던 handleTodoToggle 가져오기
  const { handleTodoDelete , handleTodoToggle } = useContext(TodoContext)

  // props로 todo 전달 받기
  return (
    // tr태그를 만든 이유 : List.jsx에서 table를 써줬기에
    // table태그 안에 들어가는 태그 : tr , td
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            checked = {todo.completed}    
            // todo.key : value값 안에 있는 함수 가져오고 그 요소의 키값을 활용해서 매개변수에 넣어서 토글이라는 함수를 사용할 때마다 사용됨
            onChange={ () => {handleTodoToggle(todo.key)} } 
          />
        </td>
        <td>
          {/* 디자인하려고 label태그 만듦 */}
          <label
            style={{
              textDecoration : todo.completed ? "line-through" : "none"
            }}  //  todo.completed 불리언 값이 담겨있어서 삼항연산자 사용 
          >   
            <span className='todo-text'>
              {/* 객체 형태로 들어가 있음 */}
              {todo.text}  
            </span>
          </label>
        </td>
        <td>
                          {/* 함수의 소괄호 안에 있는 데이터(인자)가 매개변수(Ex11.jsx의 handleTodoDelete)로 전달이 됨 
                          -> 익명 함수로 처리해주기()=> */}
          <button onClick={() => handleTodoDelete(todo.key)}>DELETE</button>
        </td>
      </tr>
    </>
  )
}

export default ListItem