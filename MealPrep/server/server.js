const express= require('express');
const app = express();
require('dotenv').config() ;
const fetch = require('node-fetch');
const cors= require('cors');
const morgan = require('morgan');
const recipeScraper = require('recipe-scraper');
const BP = require('body-parser');

app.use(cors(),
    BP.urlencoded({extended: false}),
    BP.json(),
    morgan("dev")
)
 
const PORT = process.env.PORT || 3001;
 
app.use(express.static('public'))


//mongoose db
const mongoose = require('mongoose')
//defining the process port
//future template literal for different users
const db = 'MealPrep'
const url = 'mongodb://localhost:27017/'+db
 
mongoose.connect(url,
   {
       useNewUrlParser:true,
       useUnifiedTopology:true
   })
.then(()=>console.log(`Mongo db ${db} is running`))
.catch((error)=>console.log(`error connecting to ${db} database`, error))
 //need another structure for meal plans
 // need structure for shoping list 
//blueprints- for the stored recipes
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
let RecipeModel = mongoose.model("Recipe", recipeSchema )


//write a put and then use an update
app.post('/new', (req, res)=>{
recipeScraper(`${recipeurl}`)
.then(recipe=>{
    let NewRecipe = { ...recipe}
    console.log(NewRecipe)
})
.catch(error => {
});
})
 
 

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))

