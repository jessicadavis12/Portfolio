
function quiz(){
person = prompt("Tell me your name", "") ;
first = prompt("Give me a number", "");
second = prompt("Give me another number", "");

function greetings(){  
    var hello =
    ("You are going to have a wonderful day, " + person + ".  ");
    document.write (hello.fontsize(96));
}

function sum(){
    var x = +first + +second;
    var answer =  ("The sum of your numbers is " + x);
     document.write (answer.fontsize(96));
};
greetings(person);
sum();
}