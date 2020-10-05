const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

let applicantObj={}

function applicant(fname, lname, email, phone){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
}    

var next = new applicant(`${this.fname}, ${this.lname}, ${this.email}, ${this.phone}`);


function addone(){
    applicant(next)
}

applicantObj.push(next);

app.get('/', (req, res)=>{
    res.render("home.ejs")
})

app.post('/submit', (req, res)=>{
    //res.send("hi")
    res.render("submit.ejs")
})

console.log(applicantObj)

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))