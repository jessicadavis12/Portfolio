import React, { Component } from 'react';
import './App.css';
import Nform from './form'

class App extends Component() {
render(){
  return (
    <div className="App">
     <form>
                <label>
                    First Name:
                    <input type="text"/>
                </label>
                <label>
                    Last Name:
                    <input type="text"/>
                </label>
                <input>
                    Email:
                    <input type="text"/>
                </input>
                <input>
                    Phone:
                    <input type="number"/>
                </input>
                <input>
                    Message:
                    <input type="textarea"/>
                </input>
                <input type="submit" value="Submit"/>
            </form>
    </div>
  );
}
}

export default App;
