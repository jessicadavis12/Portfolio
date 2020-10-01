const express = require('express');
const app = express();

const fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))