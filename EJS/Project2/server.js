//foundation
const express = require('express')
const app = express()
const PORT = process.env.PORT || 30005

var messages = [
    {name: "Jim", message: "I am a cartoonist"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Garry", message: "I like my pasta with butter"}
]

//route routing
app.get('/', (req, res)=>{
    res.send('made it')
})
app.get('/messages', (req, res)=>{
    res.render('messages.ejs', {messages})
})
//listner
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))