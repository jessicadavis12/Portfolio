//foundation
const express = require('express')
const app = express ()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

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

app.get('/todo', (req, res)=>{
    res.send({toDoArray})
});

app.post('/todo', (req, res)=>{
    res.send(toDoArray.push({id:"4", descripton:"Buy more stuff", isComplete: false}))
});

app.delete('/todo/:todoid', function(req, res){
    // Get the requestedToDoId from the req.params
    var requestedToDoId = parseInt(req.params.todoid);
    //Find the index of the requested todo in the toDoArray
    //The findIndex function loops over the toDoArray
    var requestedToDoIndex = toDoArray.findIndex(function(todo){
        return todo.id === requestedToDoId;
    });
    // remove the requested todo from the toDoArray
    toDoArray.splice(requestedToDoIndex, 1)
    //send the toDoArray as a confirmation
    res.send(toDoArray);
});
app.put("/todo/:todoid", function(req, res){
    let requestedToDoId = parseInt(req.params.todoid);
    //find the todo in the array that matches the todoId passed in
    var requestedToDo = toDoArray.find(function(todo){
        return todo.id === requestedToDoId
    });
    //toggle the completion status
    requestedToDo.isComplete = !requestedToDo.isComplete;
    res.status(200).send(requestedToDo);
});




app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))