//foundation
const express = require('express')
const app = express()
const PORT = process.env.PORT || 30005

var pizza = 'I like my pizza with extra pineapple'
var cappuccino = 'I like my cappuccino to be extra sweet'
var fries = 'I like my fries with extra salt'

//route handeling
app.get('/', (req, res)=>{
    res.send('I made it')
})
app.get('/home',(req, res)=>{
    res.render('home.ejs', {pizza})
})
app.get('/about',(req, res)=>{
    res.render('about.ejs', {cappuccino})
})
app.get('/contact',(req, res)=>{
    res.render('contact.ejs', {fries})
})

//listner
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))