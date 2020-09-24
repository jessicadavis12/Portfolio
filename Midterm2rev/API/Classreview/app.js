const express = require('express')
const app = express()

const fetch = require('node-fetch')
const request = require('request')

const PORT = process.env.port || 3000;

const URL = "http://numbersapi.com/random/year?json";

app.get('/', function(req, res){
    res.send('root');
})

app.get('/number', (req, res)=>{
    fetch(URL)
    .then(response=>{ // Big response that the return response is buried in 
        return response.json()  //parse data 
    })
    .then((data)=>{  //passed data from the first them
       // console.log(data)
       res.render('example.ejs', {cat: data.type})//  this is where we can restrict the data we send  to call this variable use the tag cat in the ejs 
        res.send(data.text)
    })
    .catch(error => console.log('My error: ' , error))
})

app.get('/number', (req, res)=>{
    request(URL, (err, response, body)=>{ 
        let parsedData = JSON.parsed(body)
        res.render('example.ejs', { cat: parsedData.type})
    })

})



app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))