const express=require('express');
const app=express();


const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))