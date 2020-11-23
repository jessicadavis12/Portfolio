import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const baseUrl = (process.env.NODE_ENV==='development')?
    'http://localhost:3002': process.env.PUBLIC_URL;

    const initialState = {
    name: "",
    ingredients: [],
    instructions: [],
    tags: [],
    servings: "",
    image: "",
    time: {
      prep: "",
      cook: "",
      active: "",
      inactive: "",
      ready: "",
      total: ""
}}

function Checkrecipe(){
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

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post(`${baseUrl}/new`, {...formData})
        TouchEvent(response => {
            resetFields()
        })
        .catch(err => console.log('Error:' , err))
    }
    
        return(
            <div className="Checkrecipe">
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label for="title"> Title:  </label>
                    <input type="text" name="title" id="title" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <label for="title"> Title:  </label>
                    <input type="text" name="title" id="title" onChange={handleChange}/>
                </FormGroup>
                </Form>
            </div>
        )
    }

