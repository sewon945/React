import React from 'react'
import {Button, Card} from 'react-bootstrap'
import data from '../json/ex06data.json'
import '../style/ex06.css'

const Ex06Map = ({item}) => {
    console.log(data)
  return (
    <Card key={item.title} style={{ width: '18rem' }}>
        {/* src 속성은 ex06data.json의 경로 가져옴 */}
      <Card.Img variant="top" src={item.imgSrc} height='350px' />
      <Card.Body>
        <Card.Title>
            {item.title} {item.birthYear}년생
        </Card.Title>
        <Card.Text>
          {item.content}
        </Card.Text>
        {/* <a href = 'url(경로)'>내가 쓰고 싶은 말</a> => '내가 쓰고 싶은 말'을 선택 시 내가 지정한 'url(경로)' 경로로 이동 */}
        <a href={item.SNS}>
            <Button variant="primary">Instagram</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Ex06Map