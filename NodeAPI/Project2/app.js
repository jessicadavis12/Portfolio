const express = require('express')
const app = express()
const fetch = require('node-fetch')
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
const {CONFIG} = require ("./config");
const { response } = require('express');


//endpoint

app.get('/', (req, res)=>{
    res.render("index.ejs")
})

app.get('/search', (req, res)=>{
    const endpoint = `https://api.themoviedb.org/3`;
    const apiKEY = `api_key=${CONFIG.TMDB_KEY}`;
    let url2 = `${endpoint}/movie/now_playing?${apiKEY}`
    fetch(url2)
    .then(response =>{
        if (!response.ok){
        throw Error("we seem to have a problem");
    }
    return response.json();
    }) 
    .then(data => res.render('results.ejs', {data:data.results}))  
    .catch(error => console.error("We seem to have problems", error))
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))

