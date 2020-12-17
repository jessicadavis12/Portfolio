import React, { Component } from 'react';
import NavBar from './components/navbar'
import { BrowserRouter as Router, Route, Link}
from 'react-router-dom'

import Recipebook from './components/recipebook';
import Shoppinglist from './components/shoppinglist';
import IngredientCounter from './components/manual'
//import Addrecipe from './components/addrecipe'
import Newmenu from './components/newmenu'
import Search from './components/search'
import './App.css';

class App extends Component {
  render(){
    return(
      <Router>
      <div className="App">
        <div className="container">
          <ul>
            <li><Link to="/Recipebook">Recipebook</Link></li>
            <li><Link to="/Shoppinglist">Shoppinglist</Link></li>
            <li><Link to="/Newmenu" >Newment</Link></li>            
            <li><Link to="/manual">IngredientCounter</Link></li>            
          </ul>
          <Route path="/Recipebook" component={Recipebook} />
          <Route path="/Shoppinglist" component={Shoppinglist} />
          <Route path="/Newmenu" component={Newmenu}/>
          <Route path="/Search" component={Search}/>
          <Route path="/IngredientCounter" component={}/>

          <hr/>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
