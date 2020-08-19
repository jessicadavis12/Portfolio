const express = require('express');
const app = express()
const request = require('request');
const { query, response } = require('express');

const PORT = process.env.PORT || 3005

let url = 'https://www.metaweather.com/api/location/2357536/';

app.use(express.static('public'));
 
app.get('/', (req, res)=>{
    res.render('index.ejs')})

app.get('/results', (req, res)=>{
    let location = req.query.location
    request(`{$url}/search/?query=${location}`, (error, response, body)=>{
        if(!error && response.statisCode == 200){
            let data = JSON.parse(body);
            let newURL = data.length >0 ? `/results/${data[0].woeid}`:`/error`
            res.redirect(newUrl);
        }
    })
});



app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))