//foundation
const express = require('express')
const app = express()
const PORT = process.env.PORT||30005
//route routing
app.get('/', (req, res)=>{
    res.send('made it')
})
app.get('/home', (req, res)=>{
    res.render('home.ejs')
})
app.get('/about', (req, res)=>{
    res.render('about.ejs')
})
app.get('/contact', (req, res)=>{
    res.render('contact.ejs')
})
//listner
app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))
