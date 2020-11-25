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

//enables express to utilize the public folder 
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
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
         // console.log(data)
          //renders the specified data fom the data json
      res.render('index.ejs', {data: data})
      })
      .catch(error=>
      console.error('Error from network: ', error))
  })

  const lookup = "https://api.punkapi.com/v2/beers?beer_name"
app.get('/nameSearch', (req, res)=>{
  let url = `${lookup}=${req.query.beer_name}`;
  console.log(url)
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


function addMe(){
console.log('i fired')
var checkbox=docuemnt.getElementbyID('favorite');
if(checkbox.checked = true){
favArray.push(this.data.name, this.data.description, this.data.image_url)
}
console.log(favArray)
}


app.get('/favorite', (req, res)=>{
      res.render('index.ejs', {data: favArray})
})
//listens for the call to the port assigned to PORT
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))