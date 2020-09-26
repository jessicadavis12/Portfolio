// require needed modules
var express = require('express');
var app = express();
// DESIGNATE port 3000 or the process enviorment port 
const port = process.env.PORT || 3000;
//require fetching module to get api's
const fetch = require("node-fetch");
// for use of our public folder 
app.use(express.static('public'));
//basic api access point that will be augmented with user feedback
let endpoint = "https://swapi.dev/api/people";

// render home page
app.get('/', function(req, res) {
    res.render('home.ejs');
});

// render results
app.get('/results', function(req, res) {
    //define dynamic url that will change based on user input
    let number = parseInt(req.query.userNumber)
    let url = `${endpoint}/${number}/`;
    //use node-fetch to fetch resources 
    fetch(url)
        .then(response =>{
            //check if the data is ok
            if (!response.ok){
                throw Error(response.statusText);
            } //if ok 
            return response.json();
        })
        .then(data => {
            console.log(data)
            res.render("results.ejs", {data:data})
        })
        .catch(error =>{
            console.error("Error from network", error);
            res.render("error.ejs", { message: "No matches found."});
        });
    

});

app.listen(3000, function() {
    console.log("Star Wars backend running on port 3000");
});