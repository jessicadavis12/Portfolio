const express = require('express')
const app = express()
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

//endpoint

app.get('/', (req, res)=>{
    res.render("index.ejs")
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))

