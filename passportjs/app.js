const express = require('express');
const app = express();
//submiting a post request 
const BP = require ('body-parser');
app.use ( BP.urlencoded({extended: true}),
            BP.json());

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose')

//mongoose db
const mongoose = require('mongoose')
//defining the process port
//future template literal for different users
const db = 'passport_Demo'
const url = 'mongodb://localhost:27017/'+db
 
mongoose.connect(url,
   {
       useNewUrlParser:true,
       useUnifiedTopology:true
   })
.then(()=>console.log(`Mongo db ${db} is running`))
.catch((error)=>console.log(`error connecting to ${db} database`, error))
let User = require('./models/user')

app.use(require('express-session')({
    secret: "Blah blah blah",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("home.ejs")
})
const isLoggedIn=(req, res, next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}

app.get('/signup', (req, res)=>{
    res.render('signup.ejs')
})

app.post('/signup', (req, res)=>{
    let newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err)
            res.render('signup.ejs')
        }else{
            passport.authenticate('local')(req, res, ()=>{
                res.redirect('/newsfeed')
            })
        }
    })
})

app.get('/login', (req, res)=>{
    res.render('login.ejs')
})

app.post('/login', 
    passport.authenticate("local", 
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }))

app.get('/newsfeed',isLoggedIn, (req, res)=>{
    res.render('newsfeed.ejs')
})

app.get('/logout', (req, res)=>{
    req.logOut()
    res.redirect('/')
})

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))