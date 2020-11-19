const express= require('express')
const app = express();

const fetch = require('node-fetch');

const cors= require('cors');
app.use(cors());

const recipeScraper = require('recipe-scraper')

const morgan = require('morgan')
app.use(morgan("dev"));

const BP = require('body-parser');
app.use(BP.json());

const PORT = process.env.PORT || 3000

app.use(express.static('public'))


//write a put and then use an update 
app.get('/', (req, res)=>{
recipeScraper('https://www.allrecipes.com/recipe/264086/keto-beef-egg-roll-slaw/?internalSource=hub%20recipe&referringId=22959&referringContentType=Recipe%20Hub&clickId=cardslot%2011')
.then(recipe=>{
 console.log(recipe)
 
})
.catch(error => {
});
})



//post routing to create a new recipe after checked and calculated 
app.post('/', (req, res)=>{
    req.body.message = req.body.message ? 
                        req.body.message
                            :undefined;
RecipeModel.create(
    {...req.body}, 
    (err, result) => {
        err?
        console.log('Error: ', (err.message), ()=>{
            res.status(400).json(err)
        })
        :res.status(201).json(result);
    }
)
})



app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))