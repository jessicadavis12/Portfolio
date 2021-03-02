import React, { useEffect, useState } from "react"
import './App.css';

const App =() => {

  const APP_ID = "c46959a1"; 
  const APP_KEY= "4d277033bff98ead28c8cfdf54513b7";
  const [recipies, setRecipies] = useState([]);

  useEffect( ()=> {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data);
  };


  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type ="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
