import React from 'react';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const initialState = {
    url:""
    }


function Addrecipe(){
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
        .then(response=>{
            resetFields()
        })
        .catch(err => console.log('Error: ', err))
    }
    let {url}=formData

        return(
            <div className="AddRecipe">
                <Form onSubmit = {handleSubmit}>
                <Label for = "url"> Enter URL of recipe to ad</Label>
                <Input type="url" name="recipeurl" value={recipeurl} onChange={handleChange}/>
                <Button className='btn-success' style={{background: "darkgreen"}}> Submit</Button>
                <Button className='btn-success'
                    type='reset'
                    style={{background:"darkred"}}>Reset</Button>
                </Form>
            </div>
        )
    }

export default Addrecipe;