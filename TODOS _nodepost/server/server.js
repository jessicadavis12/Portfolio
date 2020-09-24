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

app.use(express.static('client'))

const { Client }=require('pg');

const dbConnectionDetails  = {
    host:'pgdb.accsoftwarebootcamp.com',
    port:5432, 
    user:'acc', 
    password: 'accrocks',
    database: 'accsoftwarebootcamp'
}
const dbconn = new Client(dbConnectionDetails);

dbconn.connect()
        .then(function(){
        console.log(`Connected to ${dbconn.database} db on port ${dbconn.port}`)
        }) 
        .catch(function(err){
        console.log(`error connecting to db with ${err.stack}`)
        }) 

app.get("/", function(req, res){
    res.send(`This is the todos api running on port ${port}`)
});

//Read data 
app.get("/todos", function(req, res) {
    let query = `SELECT id as _id, * FROM todos.todos`;
    dbconn.query(query, function(err, data){
        if(err) {
            res.status(400).send({status: 400, error :err})
        }
        res.json(data.rows);
       
    })
});

//create data 
app.post("/todos", function(req, res) {
    let description = req.body.description;
    let query = `
    INSERT INTO todos.todos(
        description, 
        iscomplete, 
        user_id
    ) VALUES (
        '${description}', 
        false, 
        5
) RETURNING id as _id, *
    `
    dbconn.query(query)
    .then(function(data){
        res.json(data.rows[0])
    })
    .catch(function(err){
        res.json({code: 400, message: err.stack, err})
    })
})

//delete
app.delete("/todos/:id", function(req, res){
    let requestedToDoId = parseInt(req.params.id);
    let query = `
    DELETE FROM todos.todos
    WHERE id = ${requestedToDoId} `;
    //console.log(requestedToDoId)
    //console.log(query)
    dbconn.query(query, function(err, result){
        if(err){
            res.status(400).send('Id does not exist for deletion')
        } else {
            res.status(201).send(result)
        }
    })
});

//update
app.put("/todos/:id", function(req, res){
    let query = `
    UPDATE todos.todos
    SET iscomplete =  NOT iscomplete
    WHERE id = ${req.params.id} 
    RETURNING *;
    `
    //console.log('query is : ', query)  
    dbconn.query(query, function(err, result){
        if (err){
            res.status(660).send('Id does not exist for updating')
        } else {
            res.send(result.rows)
        }
    })
});


app.listen(port, () => {
    console.log(`Listen on port ${port}`);
})