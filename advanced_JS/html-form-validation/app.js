const express = require('express');
const app = express();
const bp=require('body-parser')
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bp.json({ type: 'application/*+json' }))
app.use(bp.urlencoded({ extended: false }))


app.get('/', (req, res)=>{
    res.render("home.ejs")
})


app.post('/submit', (req, res)=>{
   console.log(req.body)
  
    res.render("submit.ejs", {data:req.body} )
})



app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))