//foundation
const express = require('express');
const app = express();

const PORT = process.env.PORT ||30005

const fetch= require("node-fetch");

app.use(express.static("public"));


let rate = '0.00'
let symbol = '$'

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

//Root Route
app.get('/', (req, res)=>{
    //res.send('made it') verify server foundation
    res.render('index.ejs',{rate, symbol});
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
        symbol = data.bpi[req.query.Country].symbol;
        rate =  data.bpi[req.query.Country].rate;
        res.render('index.ejs', {symbol, rate})
    })
    .catch(error =>{
        console.error("Error ", error)
    } )
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))

