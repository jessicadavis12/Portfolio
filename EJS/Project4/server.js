//foundation
const express = require('express')
const app = express()
const PORT = process.env.PORT || 30005
const people  = require('./data')


//route routing
app.get('/', (req, res)=>{
    res.send('Made it')
})

app.get('/home', (req, res)=>{
    res.render('home.ejs', {people})

})

//Listener
app.listen(PORT, ()=>console.log(`App is listerning on port ${PORT}`) )