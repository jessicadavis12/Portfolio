import React, { useState } from 'react'


const Parent = () => {

  const [name, setName] = useState('')

  const handleChange= (event)=>{
    setName(event.target.value)
  } 
 
  return (
    <div>
      <h1>Hello {name}</h1>
      <input type="text" onKeyPress={handleChange} name="name" placeholder="Please Enter Your Name"/>
    </div>
  )
}

export default Parent