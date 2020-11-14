const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors());
const PORT = process.env.PORT || 3000;

const morgan = require('morgan')
app.use(morgan("dev"));

const bodyParser = require('body-parser')

//parse application/x-www-form-urlencoded  req.body in the response object 
app.use(bodyParser.urlencoded({extended: false}));
//parse application/json


app.use(express.static('client'))

const mongoose = require('mongoose')
const db = 'jd_todo_list'
const url = 'mongodb://localhost:27017/' + db

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology:true
})
.then(()=>console.log(`Mongo DB ${db} is running`))
.catch((error)=>console.log(`error connecting to ${db} database`, error)
)
//schema
let todoSchema = mongoose.Schema({
    description:{
        type:String, 
        required:[true, 'Must have a description']
    },
    isComplete:{
        type:Boolean, 
        default : false
    }
})
//model
let TodoModel = mongoose.model('todo', todoSchema)

// var toDoArray = [
//     {id: 1, description: "Call mom", isComplete:false},
//     {id: 2, description: "Make Cookies", isComplete:false},
//     {id: 3, description: "Return video to blockbuster", isComplete:false},
// ]

// app.get('/', function(req, res){
//     res.send('You have reached my TODO API')
// });

//read data
app.get('/todos', function(req, res){
  TodoModel.find({}, function(error, results){
      if(error){
          console.log('Error finding documents from database', error)
      } else {
          console.log('My Results:', results)
          res.status(220).json(results);
      }
  })
}); 

app.post('/todos', function(req, res){
    //create new todo object based on the data received by this API
    console.log(req.body)
    let newTODO = new TodoModel({
        description: req.body.description
    })
    newTODO.save(function(error, result){
        if(error){
            console.log('Error: ', error)
            res.status(400).send({code:400, message: error.message})
            //mongoose.disconnect()
        } else {
            console.log('saved new todo:', result)
            res.status(201).json(result)
        }
    })
});

app.delete('/todos/:id', function(req, res){
    //Get the requestedtoDoId from the req.params
    let requestedToDoId = req.params.id;
    console.log(requestedToDoId)
    TodoModel.findByIdAndDelete(requestedToDoId, function(error, result){
        if(error){
            res.status(400).send("Id does not exist for deletion")
        } else {
            res.status(201).send(result)
        }
    })
});

//update 
app.put('/todos/:_id', function(req, res){
    //we use parseInt this param, because it looks like a string 
    let requestedToDoId = req.params._id;
    TodoModel.findById(requestedToDoId, function(error, result){
        if(error){
            res.status(666).send('Id does not exist for updating')
        } else {
            result.isComplete = !result.isComplete
            result.save(function(err, updatedTodo){
                if(err){
                    res.status(667).send('Cannot update document')
                } else {
                    res.status(202).send(updatedTodo)
                }
            })
        } 
    })
})

app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))