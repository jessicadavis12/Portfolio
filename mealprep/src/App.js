import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home'
import RS from './components/RS'
import RecipeBook from './components/RecipeBook'
import Menu from './components/Menu'
import './App.css';

function App() {
  return(
    <Router>
      <Route exact path='/' component={Home}/>
      <Route path ='/RS' component={RS}/>
      <Route path ='/RecipeBook' component={RecipeBook}/>
      <Route path ='/Menu' component={Menu}/>
    </Router>
  );
}
export default App;