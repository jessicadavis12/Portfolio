const express = require('express')
const app = express();

const recipeScraper = require('recipe-scraper')

const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000;
//future template literal for different users
const db = 'MealPrep'
const url = 'mongodb://localhost:27117/'+db

mongoose.connect(url, 
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    })
.then(()=>console.log(`Mongo db ${db} is running`))
.catch((error)=>console.log(`error connecting to ${db} database`, error))

async function getRecipe(){
    let recipe = await recipeScraper('https://www.allrecipes.com/recipe/20144/banana-banana-bread/')
}

recipeScraper('https://www.allrecipes.com/recipe/20144/banana-banana-bread/')
.then(recipe=>{
    //do something with recipe
    console.log(recipe)

}).catch(error =>{
//do something with error 
});



app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))