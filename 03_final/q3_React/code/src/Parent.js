import React, { useState } from 'react'
//importing the Child components 
import Child from './Child'

//functional component 
const Parent = () => {
//name state Object or getter, setName is a setter, or the function that updates the state object.  We have accesss to these when we use stateful hooks
  const [name, setName] = useState('')
 // when the event occurs(typing in the child input field) the setter is updating the stateObject to the value in the input field
  const handleChange= (event)=>{
    setName(event.target.value)
  } 
 
//returning the H1 tag with the input from stateObject Name
//we are passing the prop handleNameChange to the child component 
  return (
    <div>
      <h1>Hello {name}</h1>
      <Child handleNameChange={handleChange}/>
    </div>
  )
}
//exporting the parent component to the index.js 
export default Parent