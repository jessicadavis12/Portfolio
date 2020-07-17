

// document.querySelector("#hide").addEventListener("click", 
// function(){
//     if (document.querySelector("#hide").checked){
//         document.querySelector("#soup").style.display="none"
//     }else{
//         document.querySelector("#soup").style.display = "initial"
//     }

// })

// var name = 'Bob';
// var age = 36;
// var speak = 'woof';

// var text = `Fred said, "${name}'s real age is ${age} and his dog said '${speak}'!"`;
// console.log(text);

// const f1 = ()=>{
//     console.log("This is where stuff happens");
// }

// const double = arg => 
//     `This is the double: (` + arg * + 2 +`)`;

// console.log(double(2););

// function buyBeer(age){
//     let message = age > 21 ? 'You can buy alcohol' : 'You are too young';
//     console.log(message )
// }
// buyBeer(25);

// let areYouLying = answer =>{
//      answer ? 'Guilty' : 'Innocent!';
// }
// console.log(areYouLying(true));

// const buyBeer = age =>(
//     age>21?
//     'You can buy beer':
//     'You are too young'

// )
//  console.log(buyBeer(18));

// var theBody = document.querySelector("body");
// var isOrange = false;

// setInterval(() => {
//     theBody.style.background = isOrange ? 'blue' : 'orange';
//     isOrange = !isOrange;

// }, 500);

// const mySchool = { name : "ACC",
//                     place : "Austin",
//                     food: "Fries"
// //                  }
// // let {place} = mySchool;
// // let {name} = mySchool;
// // let {food} = mySchool;

// let { place, name, food } = mySchool;

// console.log(place);

//var a, b, rest;
// [a,b]= [10,20];

// console.log(a);
// console.log(b);

//[a, b, ...rest]= [10, 20, 30, 40, 50];
//console.log (rest);

var theName = document.getElementById("name")
var thePassword = document.getElementById("password")
var error=[];

document.querySelector("form").
addEventListener("submit", function (){
    if(theName.value === null || theName.value === ""){
        errors.push("Please enter a name");
    }

    if(thePassword.value.length<=6{
        error.push("Passwords must be greater than 6 char");
    })
    if(error.length >0){
        //Display error messages
        event.preventDefault();
        document.querySelector("#wrapper").style.border = "1px solid red";
    }
});


// function testName(name){
//     let Message = " "? "    " : "Please enter a name"
//     document.message.innerhtml.p\
//     testPassword();
// }
// function testPassword(password) {
//     let Message2 = password.length=6? "    " : "Password must be greater than 6 characters."
    
// }
