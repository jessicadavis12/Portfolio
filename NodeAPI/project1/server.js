//foundation
const express = require('express');
const app = express();

const PORT = process.env.PORT ||30005

const fetch= require("node-fetch");
const { response } = require('express');

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

//Root Route
app.get('/', (req, res)=>{
    //res.send('made it') verify server foundation
    res.render('index.ejs')
})

app.get('/price', (req, res)=>{
    fetch(url) //static file where data is 
    .then(response => {
        if (!response.ok){
            throw Error('problem')
        }
        return response.json();
    })
    .then(data =>{
        res.render('index.ejs', {data})
    })
    .catch(error =>{
        console.error("Error ", error)
    } )
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))

