import React from 'react'

//props of handleNameChange passed down from parent
//when there is a change in the text box, the event passes the prop back to the parent envoking the handleChange event=> which then calls the setName setter , updateing the state object name.  When state obbject name changes, the page rerenders 
const Child = (props) => {
    return (
        <>
            <input 
            type="text" 
            onChange={(e)=>{props.handleNameChange(e)}}
            placeholder="Please Enter Your Name"/>
        </>
    )
}

export default Child