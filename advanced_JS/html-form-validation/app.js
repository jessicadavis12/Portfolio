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

var next = new applicant(`${fname}, ${lname}, ${email}, ${phone}`);

applicantObj.push(next);

console.log(applicantObj)


app.get('/', (req, res)=>{
    res.render("home.ejs")
})

app.post('/submit', (req, res)=>{
    //res.send("hi")
    res.render("submit.ejs")
})

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))