const express = require('express()');
const app = express();

const cors = require('cors');
app.use(cors())

const logger = require('morgan')
app.use(logger('dev'))

const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000;

const {CONFIG} = require('./config.js');
const movie_API_KEY = CONFIG.TMDB_KEY;

const url = `https://api.themoviedb.org/3/search/movie?api_key=${movie_API_KEY}&query=`;

app.get('/search/:title', (req, res)=>{
    fetch(`${url}${req.params.title}`)
    .then(response => {return response.json()})
    .then(results=>{res.send(results)})
    .catch(err=> {console.log(err)})
})

app.listen(PORT, ()=> {
    console.log(`Listening on port:' ${PORT}`)
})