//foundation
const express = require('express')
const app = express ()

const morgan = require('morgan')

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

app.use(morgan('dev'));


let toDoArray = [
    {
        id:1,
        descripton: "Call Mom", 
        isComplete: false
    },
    {
        id:2,
        descripton: "Buy groceries", 
        isComplete: false
    },
    {
        id:3,
        descripton: "Go to movies", 
        isComplete: false
    }
]

app.get('/', (req, res)=>{
    res.send("made it!!")
})

app.get('/toDos', (req, res)=>{
    res.send({toDoArray})
})

app.post('/toDos', (req, res)=>{
    res.send(toDoArray.push({id:"4", descripton:"Buy more stuff", isComplete: false}))
} )

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))