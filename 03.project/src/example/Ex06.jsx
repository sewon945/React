import React from 'react'
import data from '../json/ex06data.json'
import Ex06Map from '../components/Ex06Map'

const Ex06 = () => {
  
  return (

    <div>
        <h1>Map 실습</h1>
        <div className='map-container'>
        {data.result.map((item) => (
            <Ex06Map key={item.title} item={item}/>
        ))}
        <br/>
        </div>
    </div>
  )
}

export default Ex06