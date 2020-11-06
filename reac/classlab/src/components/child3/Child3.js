import React from 'react';
import styled from 'styled-components'

const StyleDiv = styled.div`border: yellow solid 2px;`;

class Child3 extends React.Component{
    
    render(){
        return (
            <StyleDiv>
             <p>I am the Child 3 component</p>
        </StyleDiv>
        )
    }
}
  


export default Child3;