//mongoose db
const mongoose = require('mongoose')

let recipeSchema = new mongoose.Schema({
       name: String,
       ingredients:
           [{number:Number,
           measure:String,
           item:String,
           Calories:Number,
           Fat:Number,
           Carbs:Number,
           Protien:Number}],
   
       instructions: [String],
       servings: Number,
       image: "String",
       time: {
         prep: Number,
         cook: Number,
         active: Number,
         inactive: Number,
         ready: Number,
         total: Number
       }
  
})
 
//names/creates new enteries Recipe[_id] be entered using the var RecipeModel
module.exports = mongoose.model("Recipe", recipeSchema )
