//foundation 
const express = require('express')
const app = express()
const PORT = process.env.PORT|| 3005

const zoo = [
    {
        name: "Tik-tok",
        breed: 'alligator',
        size: 'large',
        isPet: false,
        country: 'Neverland',
        owner: {
            fname: 'Peter',
            lname: 'Pan',
            phone: '999-HOOK'
        }
    },
    {
        name: "Melman",
        breed: 'giraffe',
        size: 'x-large',
        isPet: false,
        country: 'Madagascar',
        owner: {
            fname: 'Vitaly',
            lname: 'Zaragoza',
            phone: '512-RICO'
        }
    },
    {
        name: "Mickey",
        breed: 'mouse',
        size: 'x-small',
        isPet: true,
        country: 'U.S.',
        owner: {
            fname: 'Walt',
            lname: 'Disney',
            phone: '555-EARS'
        }
    },
    {
        name: "Bruce",
        breed: 'hyena',
        size: 'medium',
        isPet: true,
        country: 'U.S',
        owner: {
            fname: 'Harleen',
            lname: 'Quinzel',
            phone: '12J-OKER'
        }
    },
    {
        name: "Squeak",
        breed: 'bat',
        size: 'small',
        isPet: true,
        country: 'Transylvania',
        owner: {
            fname: 'Vlad',
            lname: 'Tempus',
            phone: 'TR6-5000'
        }
    },
    {
        name: "Francis",
        breed: 'lady bug',
        size: 'x-x-small',
        isPet: false,
        country: 'Your Backyard',
        owner: {
            fname: 'P.T.',
            lname: 'Flea',
            phone: 'BUG-LIFE'
        }
    }
]

//route handeling 
app.get('/',(req, res)=>{
    res.send('I made it')
})
app.get('/home',(req, res)=>{
    res.render('home.ejs', {zoo})
})
app.get('/about',(req, res)=>{
    res.render('about.ejs', {zoo})
})
app.get('/contact',(req, res)=>{
    res.render('contact.ejs', {zoo})
})


//listner
app.listen(PORT,()=>console.log(`App listening on port ${PORT}`))