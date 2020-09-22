const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

const casual = require('casual')

const mongoose = require('mongoose');
const { string } = require('casual');

//Connection
const url = 'mongodb://localhost:27017/clients'
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
.then(()=> console.log('Connected to DB'))
.catch(()=>{
    console.log('Issue connecting to the database')
    mongoose.disconnect()
})

//Blueprints - Schema and Model
const customerSchema = new mongoose.Schema({
    fName: String,
    lName: String, 
    phone: String
})

const CustomerModel = mongoose.model('customers', customerSchema)


//Write a query


app.get('/', function(req, res){
    res.render('index.ejs')
})

app.get('/createPage',(req, res)=>{
    res.render('create.ejs')
})

app.get('/createData', (req, res)=>{
    //create fake data
    // let data = {
    //     fName: casual.first_name,
    //     lName: casual.last_name,
    //     phone: casual.phone

    // }
    CustomerModel.create(
        {
            fName: casual.first_name,
            lName: casual.last_name,
            phone: casual.phone
        }, 
        (err, customer)=>{
            err?
                console.log('Error', err)
                :res.render('results.ejs', {data: customer})
                console.log(customer)
        },
     
    )
   
})

app.get('/readPage',(req, res)=>{
    CustomerModel.find({}, (err, customers)=>{
        err?
        console.log('Errors:', err)
        : res.render('readPage.ejs', {data: customers})
    })
    // db.customers.find()
   //res.render('readPage.ejs')
})

app.listen(PORT, ()=>console.log( `App listening on port ${PORT} `))