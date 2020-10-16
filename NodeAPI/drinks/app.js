const express = require('express');
const app = express();
const { response } = express()
const fetch = require('node-fetch')
const BP = require('body-parser')
app.use(BP.json())

const PORT = process.env.PORT || 3000
//API for Random Drink
let randomdrink=('https://www.thecocktaildb.com/api/json/v1/1/random.php')

const init = {
  idDrink: "13162",
  strDrink: "Afternoon",
  strCategory: "Coffee / Tea",
  strAlcoholic: "Alcoholic",
  strGlass: "Collins Glass",
  strInstructions: "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
  strInstructionsDE: "In ein passendes Glas geben, ohne Eis. Auf Wunsch mit Sahne überziehen. Direkt serviert.",
  strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
  strIngredient1: "Kahlua",
  strIngredient2: "Baileys irish cream",
  strIngredient3: "Frangelico",
  strIngredient4: "Coffee",
  strIngredient5: "Cream",
  strMeasure1: "1 cl ",
  strMeasure2: "1 cl ",
  strMeasure3: "1 1/2 ",
  strMeasure4: "4 cl hot ",
  strMeasure5: "to taste"
}


app.get('/', (req, res)=>{
  res.render('index.ejs', {data:init})
});

//when the ranbtn is pressed on the index page, this is invoked
app.get('/getRandom', (req, res)=>{
//fetch the API for a random drink
    fetch(randomdrink)
    //take the Response Object 
    .then((response)=>{
      //check for errors if found console log this error
      if (!response.ok){
        throw Error(response.statusText)
      }
      // If there are no errors return the response a JSON format
      return response.json
    })
    //then take the data from the JSOn and pass to Index EJS to display new drink
    .then(data=>{
      let parsedData = BP(data)
     console.log(parsedData)
    res.render('index.ejs', {data: drinks[0] })
    })
    .catch(error=>
    console.error('Error from network: ', error))
})

app.listen(PORT, ()=>console.log(`App listening on ${PORT}.`));