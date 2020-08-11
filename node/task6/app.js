var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
var userFood = readlineSync.question("What is your favorite food?")
var userDrink = readlineSync.question('What is your favorite drink?')
console.log('Hi ' + userName + ', your favorite food is ' + userFood+ ' and your favorite drink is '+userDrink+ '.');
