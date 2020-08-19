//Foundation
const express = require('express')
const app = express()

    

//Route handlers
app.get('/',function(req, res){
    res.send('I made it')
})

setInterval{

}
// app.get('/cat', function(req, res){
//     res.send('I like cats')
// })

// app.get('/dog', function (req, res){
//     res.send('Dog Lover')})

// app.get('/dog/woof', function (req, res){
//         res.send('Dog Woof')})

app.get('/:account/:name/:amount/:somenumber', (req, res)=>{
    //if the nimv is >1000 send back 'Hello :name, can Iborrow some money'  esle send back "you living on the edge"
    //console.log(req)
     //`I like these ${req.params.animal}`)
     //'Hello ${req.parmas.name}. You have ${req.params.somenumber}`
  res.send(`Hello ${req.params.name}. You have ${req.params.somenumber}dollars`)
   //res.send = (`${req.params.amount}>500? 'Hello ${req.params.name}, can I borrow some money': 'You like living on the edge?'`)
})

//Listner
app.listen(3000, function(){
    console.log('App listening on port 3000')
})