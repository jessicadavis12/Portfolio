const express = require('express')
const app = express()
const fetch = require('node-fetch')
let currency = `${("currencyOptions:checked").val}`;


app.use(express.static('public'))

const PORT = process.env.PORT || 30005

let endpoint ='https://api.coindesk.com/v1/bpi/currentprice.json'

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/priceResults', (req, res)=>{
    let url = '${endpoint}/${req.params.bpi.code}';
    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw Error('Excuse me, there seems to be a problem')
        }
        return response.json()
    })
    .then
        res.render('priceresults.ejs', {newprice: `data.bpi.${currency}.rate`})
        console.log(currency)
    .catch(err => console.log('I am the error: ', err))
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))