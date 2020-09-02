const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connection
mongoose.connect(
    'mongodb://localhost:27017/jessica',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=>console.log('Mongo db running'))
//Blueprints
//schema and model 
let userSchema = new mongoose.Schema({
    
    name: String,
    age: Number, 
    email: String, 

})
let UserModel = mongoose.model("User", userSchema)

// var User = new UserModel({
//     name: "Jerry",
//     age: 45,
//     email: "jerryseinfield.gmail.com"

// })

// var User = new UserModel({
//     name : "Kramer", 
//     age: "47", 
//     email: "KramerCosmo@Gmail.com"
// })

//write queries 
// User.save(function (error, result) {
//     if(error){
//         console.log('There was an error saving to db')
//     } else {
//         console.log("Data was saved", result)
//     }
// })

UserModel.create(
    {
    name: "elane",
    age: 39, 
    email: "Elane@gmail.com"
    },
     (error, result)=>{
        error
            ?console.log('Error:', error)
            :console.log('Here is your new user', result);
    }
);




const PORT = process.env.PORT || 3000

app.get('/',  (req, res)=>{
    res.send("madeit");
})

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
} );