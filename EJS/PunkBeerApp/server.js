//require and define express- to use 
const express = require('express');
const app = express();

//node that assists in the use of rocketman and other cross platform intergration
const cors = require('cors')
app.use(cors());

//makes requests - require and define 
const fetch= require('node-fetch')
//parses the data stream to a usable format 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//use mongoose database to store fav list 
const mongoose = require('mongoose');
//name of the database
const DB = "favbeerlist"
const url = `mongodb://localhost:27017/${DB}`
//connecting to the Database 
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
//positive confirmation that we are connected to the DB 
.then(()=> console.log(`Connected to ${DB} `))
.catch(()=>{
    console.log('Issue connecting to the database')
    mongoose.disconnect()
})

//Blueprint for the Schema and Model
const favbeerSchema = new mongoose.Schema({
  Name : String,
  Description : String, 
})

const FavbeerModel = mongoose.model('favbeers', favbeerSchema)

//enables express to utilize the public folder 
app.use(express.static('public'))
//defines port to be used 
const PORT = process.env.PORT || 3000
//returns the entire beer selecion

app.get('/', (req, res)=>{
  //API endpoint 
    fetch("https://api.punkapi.com/v2/beers")
    .then((response)=>{
        //check for errors if found console log this error
        if (!response.ok){
          throw Error(response.statusText)
        }
        // If there are no errors return the response a JSON format
        return response.json()
      })
      //then take the data from the JSOn and pass to Index EJS to display new drink
      .then(data=>{

      res.render('index.ejs', {data: data})
      })
      .catch(error=>
      console.error('Error from network: ', error))
  })
//specific beer look up
  const lookup = "https://api.punkapi.com/v2/beers?beer_name"
app.get('/nameSearch', (req, res)=>{
  let url = `${lookup}=${req.query.beer_name}`;
  //console.log(url)
  fetch(url)
  .then((response)=>{
    //check for errors if found console log this error
    if (!response.ok){
      throw Error(response.statusText)
    }
    // If there are no errors return the response a JSON format of beer that match the search term 
    return response.json()
  })
  //then take the data from the JSOn and pass to Index EJS to display new beer meeting the search criteria
  .then(data=>{
  res.render('index.ejs', {data: data })
  })
  .catch(error=>
  console.error('Error from network: ', error))
}) 

app.post('/createfav', (req, res)=>{
  //write fav beer to DB
    FavbeerModel.create(
      {
        Name: `$(this.name)`,
        Description: `$(this.description)`,
      },
      (err, favbeer)=>{
        err?
            console.log('Error', err)
            :console.log(favbeer)
        }
    )})

//renders the beer that the user checked as favorite 
app.get('/favorite', (req, res)=>{
  //display the collection of FavBeers
  FavbeerModel.find({}, (err, favbeers)=>{
    err?
    console.log('Errors:', err)
    : res.render('index.ejs', {data: favbeers})
    })
})
//listens for the call on the port assigned to PORT
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))