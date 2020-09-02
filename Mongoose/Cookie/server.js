const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connection
mongoose.connect(
    'mongodb://localhost:27017/jessica', //jessica is db name
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=>console.log('Mongo db running'))
//Blueprints
//schema and model 
let userSchema = new mongoose.Schema({
    cookie: String,
    price: Number, 
    tasty: Boolean, 

})
let UserModel = mongoose.model("User", userSchema)

const PORT = process.env.PORT || 3000

UserModel.create(
    {
    cookie: "Sugar",
    price: 1.99, 
    tasty: true
    },
     (error, result)=>{
        error
            ?console.log('Error:', error)
            :console.log('Her is your new user', result);
    }
);

app.get('/',  (req, res)=>{
    res.send("madeit");
})

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
} );