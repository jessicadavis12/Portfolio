const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const fetch = require('node-fetch');
const {response}=require('express');

app.use(express.static("public"));

let rate = '0.00'
let symbol = '$'

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

app.get("/", function(req, res){
    res.render("index.ejs", {rate, symbol});
})


app.get('/price', (req, res)=>{
fetch(URL)
.then(response => {
    if (!response.ok){
        throw Error('Json error')
    }
    console.log(response)
    return response.json();
})
.then(data =>{
    console.log(data)
   symbol = data.bpi[req.query.country].symbol;
    rate = data.bpi[req.query.country].rate;
    res.render('index.ejs', {symbol, rate})
    // res.end()
})
.catch(error =>{
    console.log("error", error)
})
})


app.listen(PORT, ()=>console.log(`App listning on port ${PORT}`))