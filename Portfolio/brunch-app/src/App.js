import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './Components/Home'
import Menu from './Components/Menu'
import Catering from './Components/Catering'

import './App.css';

function App() {
    return (
     <Router>
       <Route exact path='/' component={Home}/>
       <Route path='/menu' component={Menu}/>
       <Route path='/catering' component={Catering}/>
     </Router>
    );
}
export default App;