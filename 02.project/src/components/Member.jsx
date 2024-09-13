import React from 'react'

const Member = (props) => {
  
  let boxStyle = {
      backgroundColor : 'gray',
      color : 'white',
      border : '2px solid navy',
      textAlign : 'center',
      marginTop : '10px',
      padding : '30px',
      borderRadius : '10px'
  }

  return (


    <div>
        <div style={boxStyle}>
            {props.teamName}{props.memberName}
        </div>
    </div>
  )
}

export default Member