const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//parse application json
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 3000;

let toDoArray = [
    {id:1, description: "Call mom", isComplete: false},
    {id:2, description: "Buy groceries", isComplete: false},
    {id:3, description: "Go to movies", isComplete: false}
];

let num = 4

app.get("/", function(req, res){
    res.send("THE APP IS WORKING!!!!!");
});

//Read data
app.get("/todos", function(req, res){
    //sends back the current toDoArray as json.
    res.json(toDoArray);
});

//Create data
app.post("/todos", function(req, res){
    //array of hard-coded data for testing purposes
    // let newTodo = {
  //   id: 4,
  //   description: "Buy more Stuff",
  //   isComplete: false
  // };
  // NOTE: allows for real application where user inputs todo and 
  // auto-increment of id
    let newTodo = {
        id: num++,
        description: req.body.description,
        isComplete: false
    }
    // append the new todo object to toDoArray array
    toDoArray.push(newTodo);
    // displaying in Terminal for testing/debugging purposes
    console.log(toDoArray);
    //set status to 201 which is successful
    //send back json version of newTodo object
    //no need to send whole array back, just the new todo item
    res.status(201).json(newTodo);
});

//delete data
app.delete("/todos/:id", function(req, res){
    // get the requestedToDoId from req.params and ensure it is a number
    let requestedToDoId = parseInt(req.params.id);
   
    // use the findIndex() method to find the index of the requested
   // todo in the toDoArray
    let requestedToDoIndex = toDoArray.findIndex(function(todo){
        return todo.id === requestedToDoId;
    });

    if(requestedToDoIndex >= 0){

    // use splice method to remove the requested todo from the toDoArray
    toDoArray.splice(requestedToDoIndex, 1)

    //send the toDoArray as a confirmation only,
    //front end will not need the actual data for anything 
    res.status(201).send(toDoArray);
    } else{
        //if no index is found, let the front end know
        res.status(400).send('Id does not exist for deletion')
    }
});

//update
app.put("/todos/:id", function(req, res){
  // get the requestedToDoId from req.params and ensure it is a number
    let requestedToDoId = parseInt(req.params.id);

    //find the todo in the array that matches the todoId passed in
    let requestedToDo = toDoArray.find(function(todo){
        return todo.id === requestedToDoId;
    });

    if(requestedToDo !== undefined){

    //toggle the completion status
    requestedToDo.isComplete = !requestedToDo.isComplete;

     // return the toggled todo as confirmation only
    // data not needed for anything
    res.status(200).send(requestedToDo)
    } else{

        //if no element is found, let the front end know
        res.status(666).send('ID does not exist for updating')
    };
});

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});