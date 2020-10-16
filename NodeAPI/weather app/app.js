const express = require('express')
const app = express()
const request = require('request')
let endpoint ='https://www.metaweather.com/api/location/2487956/';
const PORT = process.env.PORT || 30005

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/results', (req, res)=>{
  request(endpoint, function(error, response, body){
      //Middleware API endpoint , error, request.Response, req.body 
      if(!error && response.statusCode ==200){
        let parsedData = JSON.parse(body);
        console.log(parsedData)
        res.render("results.ejs", {data:parsedData})

      }
  })  
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))
// can you do this 5 days out in cards and pretty, then add another city
