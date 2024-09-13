import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex11TodoContext'
import ListItem from './ListItem';

const List = () => {
  // useContext 사용하기 useContext(내가 만든 컨텍스트 이름)
  const { todos } = useContext(TodoContext)
  console.log('todos', todos);
  return (
    <div>
      <table>
        <tbody>
          {/* map 함수 사용!
          todos -> 활용
          ListItem -> 도착점
          고유한 식별 속성 이름은 key = item.key
          내가 넘겨줄 데이터의 속성 이름은 todo */}
          {/* map 함수 쓰는 이유 : 객체 데이터를 배열(매개변수)에 담아 한 번에 넘겨주기 위해 사용 */}
          {todos.map((item) => <ListItem key={item.key} todo={item} />)}
          
        </tbody>
      </table>
    </div>
  )
}

export default List