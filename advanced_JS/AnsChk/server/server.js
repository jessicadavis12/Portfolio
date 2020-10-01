const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000
// const answerKey = require('./ANS')
// const ansSTU1 = require('./Exams')

// app.use(express.static('public'));

//route routing
app.get('/', (req, res)=>{
    console.log(answerKey, ansSTU1);
    examGrade(answerKey, ansSTU1);
    res.send("server built")
})

const answerKey = ["A", "C", "B", "D", "B", "C"]
const ansSTU1 = ["D", "C", "", "A", "B", "C"]



function examGrade (answerKey, ansSTU1){
    let Score = 0;
    let max = answerKey.length;
    for (let index = 0; index < max; index++) {
        let points = 0;
        if (answerKey[index]==ansSTU1[index]){
            points= 4
            Score=Score + points
        } else{
            if (ansSTU1[index]===""){
                points = 0
            } else {
                points=-1
                Score = Score + points
            }
        } 
        console.log(Score)
    }
}



//Listener
app.listen(PORT, ()=>console.log(`App is listerning on port ${PORT}`))

