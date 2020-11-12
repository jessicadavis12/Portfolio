//foundation
const express = require('express')
const app = express();

const PORT = process.env.PORT || 30005
const person = require('./data')

app.use(express.static('public'));

//route routing
app.get('/', (req, res)=>{
    res.render('home.ejs', {data: person})
})

//Listener
app.listen(PORT, ()=>console.log(`App is listerning on port ${PORT}`))

