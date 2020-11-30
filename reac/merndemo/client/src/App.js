import './App.css';
import axios from "axios";
import {useState} from 'react'
import { response } from 'express';

function App() {
  const initialState={
    fname:"", 
  }
  const [formData, setFormData] = setState(initialState)
  
  const handleClick = () => {
    console.log("I am the handle click ")
    axios
    .get('/test')
    .then((response)=> console.log(response.data.message))
    .catch(err =>console.log(err))
    .finally(()=> console.log('I am always here '))
  };
 
  const handleChange = (event=>{
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  })

  const handleSubmit = (event) =>{
  event.preventDefault()
  axios.post('/new', formData)
  .then(response => console.log('Response data', response.data))
  .catch(err => console.log('Error: ', err))
  }

  return (
    <div>
      <h1>Mern DEMO</h1>
     <button onClick={handleClick}> Click Me</button> 
     <form onSubmit={handleSubmit}>
       <label htmlFor="fname">First Name: </label>
       <input type="text" name="fname" id="fname" 
            onChange={handleChange}/>
       <button type="submit">SUBMIT</button>
    </form>
   </div>
  );
}

export default App;
