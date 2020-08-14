const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.use(express.static('public'))

const PORT = process.env.PORT || 30005

//https://api.lyrics.ovh/v1/artist/title

let endpoint = 'https://api.lyrics.ovh/v1'

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/lyricResults', (req, res)=>{
    let url = `${endpoint}/${req.query.artist}/${req.query.title}`
    fetch(url)
    .then(response=> {
        if(!response.ok){
            throw Error('issue mf')
        }
        return response.json()
    })
    .then(data=>{
        //console.log(data)
        res.render('lyricResults.ejs', {newlyrics: data})
    })
    .catch(err => console.log('I am the error: ', err))
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))
