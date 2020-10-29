import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link}
from 'react-router-dom'

import './App.css'

import Home from './HomeComponent';
import About from './ AboutComponents';
import Contact from './ContactComponents';


class App extends Component {
  render(){
    return(
      <Router>
      <div className="App">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <hr/>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
