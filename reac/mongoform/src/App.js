import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import { response } from 'express';

const baseUrl = (process.env.NODE_ENV==='development')?
    'http://localhost:3001': process.env.PUBLIC_URL;

const initialState = {
    fname: "",
    lname:"",
    email:"", 
    phone:"", 
    message: ""
}

function App () {
    const [formData, setFormData] = useState(initialState)
    const handleChange = (event)=>{
        setFormData({
            ...formData, 
            [event.target.name] : event.target.value 
        })
    }
    const resetFields = () =>{
    setFormData({...initialState})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post(`${baseUrl}/new`, {...formData})
        .then(response => {
            resetFields()
        })
        .catch(err => console.log('Error: ', err))
    }

    //destruturing
    let { fname, lname, email, phone, message} = formData

  return (
    <div className="App">
     <Form onSubmit={handleSubmit} autoComplete="off">
         <FormGroup>
            <label for="fname">First Name:  </label>
            <input type="text" name="fname" id="fname" onChange={handleChange}/>
         </FormGroup>
         <FormGroup>
            <label for="fname">Last Name:  </label>
            <input type="text" name = "lname" id="lname" onChange={handleChange}/>
         </FormGroup>
        <FormGroup>
            <label for='email'> Email: </label>
            <input type="text" name='email' id="email" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <label for='message'> Message: </label>
            <input type="textarea" name='message' id="message" onChange={handleChange}/>
        </FormGroup>
        <Button className='btn-success' style={{background: "darkgreen"}}> Submit</Button>
         <Button className='btn-success'
                    type='reset'
                    style={{background:"darkred"}}>Reset</Button>
            </Form>
    </div>
  );
}


export default App;
