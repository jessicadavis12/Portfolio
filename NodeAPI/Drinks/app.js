const express = require ('express')
const fetch = require('node-fetch');


const app = express();

app.use(express.static('public'))

const PORT = process.env.PORT || 3000;

const initDrink = {
    strDrink: "Tipperary",

    strInstructions: "Stir over ice. Strain into chilled glass. Cut a wide swath of orange peel, and express the orange oils over the drink. Discard orange twist.",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/b522ek1521761610.jpg",
    strIngredient1: "Irish Whiskey",
    strIngredient2: "Sweet Vermouth",
    strIngredient3: "Green Chartreuse",
    strMeasure1: "2 oz",
    strMeasure2: "1 oz",
    strMeasure3: "1/2 oz",
    imgSrc1:"https://www.thecocktaildb.com/images/ingredients/Irish%20Whiskey-Small.png",
    imgSrc2: "https://www.thecocktaildb.com/images/ingredients/Sweet%20vermouth-Small.png",
    imgSrc3:"https://www.thecocktaildb.com/images/ingredients/Green%20Chartreuse-Small.png"
}



let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


app.get('/', (req, res)=>{
    //res.send("Here")
    res.render("index.ejs", {data: initDrink})

});

app.get('/getRandom', (req, res)=>{
    fetch(url)
    .then((response)=>{
        if (!response.ok){
            throw Error('There is an errror')
        }
        return response.json()
    })
    .then(data=>{res.render('index.ejs', {data:drinks[0]})})
    .catch((err)=>
    console.log('catch error:', error))
})
app.listen(PORT, ()=>{console.log(`App is listening on port ${PORT}`)});