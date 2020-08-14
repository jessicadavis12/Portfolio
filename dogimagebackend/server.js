const express = require ('express')
const app = express()
const fetch = require('node-fetch')

const PORT = process.env.PORT || 30005


let url = 'https://dog.ceo/api/breeds/image/random'
let defaultImg = "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg"

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index.ejs', {image: defaultImg})
})

app.get('/getImage', (req, res)=>{
   fetch(url)
   .then((response)=>{
       if (!response.ok){
         throw Error('Jessica is not working')
        //return response.json()
       }
       return response.json()
   })
   .then((data)=>{res.render('index.ejs', {image:data.message})})
   .catch((err)=>
   {console.log('catch error:', err)
   res.end()
})
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))
