import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

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
            //console.log(response)
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
            <Label for="fname">First Name:  </Label>
            <Input type="text" name="fname" id="fname" value={fname} onChange={handleChange}/>
         </FormGroup>
         <FormGroup>
            <Label for="lname">Last Name:  </Label>
            <Input type="text" name = "lname" id="lname" value={lname} onChange={handleChange}/>
         </FormGroup>
        <FormGroup>
            <Label for='email'> Email: </Label>
            <Input type="text" name='email' id="email" value={email} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <Label for='phone'> phone: </Label>
            <Input type="number" name='phone' id="phone" value={phone} onChange={handleChange}/>
        </FormGroup> 
        <FormGroup>
            <Label for='message'> Message: </Label>
            <Input type="textarea" name='message' id="message" value={message} onChange={handleChange}/>
        </FormGroup>
        <Button className='btn-success' 
        style={{background: "darkgreen"}}
        > Submit
        </Button>
         <Button className='btn-success'
                    type='reset'
                    style={{background:"darkred"}}>Reset</Button>
            </Form>
    </div>
  );
}


export default App;
