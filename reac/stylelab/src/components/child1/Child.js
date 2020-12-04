import React from 'react'

const divStyle = {
    border: 'solid blue 5px',
}
const pStyle = { color: 'blue' }

class Child1 extends React.Component{
    
    render(){
        return (
            <div style={divStyle}>
             <p style={pStyle}>I am the Child component</p>
        </div>
        )
    }
}
  


export default Child1;
