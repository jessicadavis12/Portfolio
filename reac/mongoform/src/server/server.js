const express = require('express');
const app =  express();
const cors= require('cors');
const BP = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose')
const chalk = require('chalk')
const logger = require('morgan')


app.use(cors(),
    BP.urlencoded({extended: false}),
    BP.json,
    logger('dev')
    )

const PORT = process.env.PORT || 3000;

//connection to mongoose
mongoose.connect(
    "mongodb://localhost:27017/formdb", 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)
.then(()=>{console.log(`Connected to the formdb database`)})
.catch((error)=>{console.log(`Error connecting to formdb`, error)})

//blueprints
let formSchema = new mongoose.Schema({
    fName: {
        type:String,
        required:[true, "Please enter first name"]
    } ,
    lName: {
        type: String,
        required:[true, "Please enter last name"]
    }, 
    email:{
        type:String,
        required:[true, "Please provide email address"]
    }, 
    phone: Number, 
    Message:{
        type: String, 
        required:[false, "No message submited"]

    }
})

let FormModel = mongoose.model("Form", formSchema )

app.get('/', (req, res)=>{
    res.send('root')
})

app.post('/', (req, res)=>{
    req.body.message = req.body.message ? 
                        req.body.message
                            :undefined;
FormModel.create(
    {...req.body}, 
    (err, result) => {
        err?
        console.log('Error: ', (err.message), ()=>{
            res.status(400).json(err)
        })
        :res.status(201).json(result);
    }
)
})

app.listen(PORT, ()=>console.log(`App listening on ${PORT} port`))