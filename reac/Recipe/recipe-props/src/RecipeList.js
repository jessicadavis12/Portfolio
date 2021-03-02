import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
          {
            title: "Buffalo Chicken Cauliflower Instant Pot ",
            instructions: ["Add cauliflower, chicken, seasonings, hot sauce, butter and blue dressing to the Instant Pot and combind until ingredients are coated.",
            "Cook using the manual setting for 5 minutes. Allow the Instant Pot to release pressure.", 
            "Open and immediately stir in cream cheese. Once fully combined, add cheddar. Stir.",
            "Heat on KEEP WARM for 10 minutes.",
            "Serve drizzled with buffalo sauce and some green onion."],
            ingredients: ["pasta", "8 oz water", "1 box spaghetti"],
            img: "https://i.imgur.com/2q2OgnC.jpg"
          },
          {
            title: "Lobster Macaroni and cheese",
            instructions: "Combine lobster and macaroni.  Blend until creamy",
            ingredients: ["1 large lobster", "8 oz of macaroni"],
            img: "https://i.imgur.com/cUvCIrl.jpg"
          },
          {
            title: "Bacon Wrapped Filet Mignon",
            instructions: "Wrap filet mignon in bacon.  Add salt, oil, and pepper to taste.",
            ingredients: ["1 slice of bacon", "1 tbs olive oil", "1 pinch salt", "pepper"],
            img: "https://i.imgur.com/zdkqhsb.jpg"
          }
        ]
      }
      static propTypes = {
          recipes: PropTypes.arrayOf(PropTypes.object).isRequired
      }
    render(){
        const recipes = this.props.recipes.map((r, index)=>(
            <Recipe key={index}{...r}/>
        ));
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}
export default RecipeList;