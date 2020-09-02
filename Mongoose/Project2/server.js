const mongoose = require("mongoose")


//connection
mongoose.connect(
    "mongodb://localHost:27017/app_users",
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=> {console.log(`Connected to app_user database`)})
.catch((error)=> {console.log(`Error connecting to app_user DB`, error)})

//blurprints
let memberSchema = new mongoose.Schema({
    username: String,
    age: Number, 
    favorite_pizza: String,
    Mem:{
        type:Boolean, 
        required:[true, "Must have an entry for member status"]
    }, 
    created: {
        type: Date, 
        default: Date.now
    }
})

let Member = mongoose.model("Member", memberSchema)

//Queries

// Member.create(
//     {
//         username: "Nancy",
//         age: 23,
//         favorite_pizza: "Pepperoni"
//     }, 
//     (error, result)=>{
//         error
//         ?console.log('Error:', error)
//         :console.log("New user created", result)
//     }
// );

Member.create(
    {
        username: "Tommy",
        favorite_pizza: "Veggie",
        Mem: true
    }, 
    (error, result)=>{
       error
        ?console.log('Error:', error)
        :console.log("New user created", result)
         }
);

