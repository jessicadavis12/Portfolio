const express = require('express')
const app= express();
const BP = require('body-parser')
const cors = require('cors')

app.use(cors(),
    BP.urlencoded({extended: false}),
    BP.json(),
    )

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('root')

})

app.post('/new', (req, res)=>{
    console.log('I am the new POST ')
    res.end()
})

app.listen(PORT,  ()=> console.log(`App listening on port ${PORT}`))
