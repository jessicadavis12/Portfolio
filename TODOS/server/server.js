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

//note: how to convert to mongoose
// 1.build a connection
// install mongose
// connect
const mongoose = require('mongoose');
const db = 'jd_todo_list'
const url = 'mongodb://localhost:27017/'+ db

mongoose.connect(url, 
{useNewUrlParser: true, 
useUnifiedTopology:true})
//
//
.then(()=>console.log(`Mongo db  ${db} running`))
.catch((error)=>console.log(`error connecting to ${db} database`, error))

//2) Build blueprints
// schema
//model

let todoSchema = new mongoose.Schema({
    description: {
        type:String, 
        required: [true, 'Must have a description']
    }, 
    isComplete: {
        type: Boolean,
        default: false
    }
    }
)

let TodoModel = mongoose.model('todos', todoSchema)

//3) build queries - crud
//a read with mongoose-> .find()
//b create with mongoose->  .created() or .save()
//c delete with mongose -> .findByIdandDelete()
//d update with mongoose -> .findById() and .save()


app.get("/", function(req, res){
    res.send("THE APP IS WORKING!!!!!");
});

//Read data
app.get("/todos", function(req, res){
    TodoModel.find({}, (error, results)=>{
        if(error){
            console.log('Error finding documents from database', error)
        }else{
            console.log('My Results:', results)
            res.json(results);
        }
    })
    
});

//Create data
app.post("/todos", function(req, res){
    let newTodo = new TodoModel({
        description: req.body.description,
    })
    newTodo.save((error, results=>{
        if(error){
            console.log('Error save docment to db:', error)
        }else{
            res.status(201).json(newTodo)
        }
    }))
})
    

//delete data
app.delete("/todos/:id", function(req, res){
    // get the requestedToDoId from req.params and ensure it is a number
    let requestedToDoId = parseInt(req.params.id);
    TodoModel.deleteOne({description:requestedToDoId}, function(req, res){
        if (err){
        console.log(err);
        return res.status(500).send();
        }
    return res.status(200).send();
    })
})


// use the findIndex() method to find the index of the requested
// todo in the toDoArray
//     let requestedToDoIndex = toDoArray.findIndex(function(todo){
//         return todo.id === requestedToDoId;
//     });

//     if(requestedToDoIndex >= 0){

//     // use splice method to remove the requested todo from the toDoArray
//     toDoArray.splice(requestedToDoIndex, 1)

//     //send the toDoArray as a confirmation only,
//     //front end will not need the actual data for anything 
//     res.status(201).send(toDoArray);
//     } else{
//         //if no index is found, let the front end know
//         res.status(400).send('Id does not exist for deletion')
//     }
// });

//update

//create and save a new decord to the db
//use findOneandupdate 
app.put("/todos/:id", function(req, res){
  // get the requestedToDoId from req.params and ensure it is a number
    let requestedToDoId = parseInt(req.params.id);
    TodoModel.findOne({_id: requestedToDoId}, function(err,foundObject){
        if (err){
            console.log(err);
            res.status(500).send()
        } else {
            if(!foundObject){
                res.status(404).send();
            }else {
                if(req.body.isComplete){
                requestedToDo.isComplete = !requestedToDo.isComplete;

                }
            }
        }
    })
})
    //find the todo in the array that matches the todoId passed in
//     let requestedToDo = toDoArray.find(function(todo){
//         return todo.id === requestedToDoId;
//     });

//     if(requestedToDo !== undefined){

//     //toggle the completion status
//     requestedToDo.isComplete = !requestedToDo.isComplete;

//      // return the toggled todo as confirmation only
//     // data not needed for anything
//     res.status(200).send(requestedToDo)
//     } else{

//         //if no element is found, let the front end know
//         res.status(666).send('ID does not exist for updating')
//     };
// });

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
})