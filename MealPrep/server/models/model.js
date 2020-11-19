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
