import React, { Component } from 'react';
import Feelings from './Feelings'
class Garfield extends Component {
    render() {
        return(
            < div className = "theimage">
            < h1 className= "name">Life</ h1>
            <img src="https://i.imgur.com/F67Eq7J.jpeg" alt="#"></img>
            <h3>How does he feel?</h3>
            < Feelings />
            </div>
        );
    }
}
export default Garfield; 