const express = require('express')
const app = express()
const request = require('request')
let endpoint ='https://www.metaweather.com/api/location';
const PORT = process.env.PORT || 30005

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/results', (req, res)=>{
    //make the call
    let location = req.query.location;
    let url = `${endpoint}/search/?query=${location}`
    request(url, function(error, response, body){
    console.log(response)
    let parsedData = JSON.parse(body);
    console.log (parsedData);
    res.render('results.ejs', {data: parsedData})
    })
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))
// can you do this 5 days out in cards and pretty, then add another city
