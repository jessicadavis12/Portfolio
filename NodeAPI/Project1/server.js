const express = require('express')
const app = express()
const fetch = require('node-fetch')
const { response } = require('express')

app.use(express.static('public'))
const PORT = process.env.PORT || 30005

let endpoint ='https://api.coindesk.com/v1/bpi/currentprice.json'

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/priceResults', (req, res)=>{
    let url = '${endpoint}'///append radio button selection and keys
    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw Error('Excuse me, there seems to be a problem')
        }
        return response.json()
    })
    .then(data=>{
        //console.log(data)
        res.render('priceResults.ejs', {newprice: data} )
    })
    .catch(err => console.log('I am the error: ', err))
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))