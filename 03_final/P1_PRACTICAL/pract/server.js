const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors());

const fetch= require('node-fetch')

const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(express.static('client'))

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
      res.render('index.ejs', {data: data})
      })
      .catch(error=>
      console.error('Error from network: ', error))
  })

  const lookup = "https://api.punkapi.com/v2/beers"
app.get('/nameSearch', (req, res)=>{
  let url = `${lookup}${req.query.title}`;
  console.log(url)
  fetch(url)
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
  res.render('index.ejs', {data: data })
  })
  .catch(error=>
  console.error('Error from network: ', error))
}) 


app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))