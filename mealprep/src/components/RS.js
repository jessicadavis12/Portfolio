import React, { Component} from 'react'
import {Link} from 'react-router-dom'

function RecipeCheck(){
//displays the recipe resuts next to the user requested URL 
//for east of  compariston from the orginal to scrapped. 
}
function RecipeCalculation(){
    //loop through the ingredients to determing dish's nut content
//after api- before being stored Should this do to the server?
// totalNut: ()=>{for(i=0; i>ingredients.length; i++){
//     TCalories: TCalories + ingredients.Calories[i]
//     TFat: TFat+ ingredients.Fat[i]
//     TCarbs: TCarbs+ ingredients.Fat[i]
//     TProtien: TProtien+ ingredients.Fat[i]
// }},
}


class NewRecipe extends Component{
 //component that gets the recipe from user input 
  constructor(props){
      super(props);
      this.state = {value: ''};

      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
      this.setState({value: event.target.value});
  }
  handleSubmit(event){
      //call recipe scraper function. 
      async function getRecipe(){
          let url=`${nRecipe.value}`
        let recipe = await recipeScraper(url)
    }
    
    recipeScraper('url')
    .then(recipe=>{
        //do something with recipe
        console.log(recipe)
        //return the scraped recipe with an option for the user to QA the ingredients 
        //RecipeCheck(recipe)
        
    }).catch(error =>{
    //do something with error 
    });
  }

render(){
 return(
     <div>
     <div>
         <h1>Enter URL of the recipe you want to add to your collection</h1>
         <form onSubmit={this.handleSubmit}>
             <label for="nRecipe">URL</label>
             <input type="url" name="nRecipe" id="nRecipe" value={this.state.value} onChange={this.handleChange}/>
            <button type='submit'value="Submit">Submit</button>
         </form>
     </div>
        <div></div>
        <div></div>
     </div>
 )}
}