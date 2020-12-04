const express= require('express');
const app = express();
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
 
const PORT = process.env.PORT || 5000;
 
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



//write a put and then use an update
// app.post('/new', (req, res)=>{
// recipeScraper(`${recipeurl}`)
// .then(recipe=>{
//     let NewRecipe = { ...recipe}
//     console.log(NewRecipe)
// })
// .catch(error => {
// });
// })
 
 

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))

