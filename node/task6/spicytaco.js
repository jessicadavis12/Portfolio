var readlineSync = require('readline-sync');
spice = ['spicy', 'very spicy', 'so spicy, you won\'t be able to feel your face'],
index = readlineSync.keyInSelect(spice, "How spicy would you like your tacos?")

if (readlineSync.keyInYN(spice[index] , + 'Are you sure')){
    console.log('Ok, we will have your order right away.');
} else {
    console.log('What\'s the matter?  Can\'t  handel the heat?')
}



// change = ['yes', 'no']
// i = readlineSync.keyInSelect(change, spice[index]+ ", are you sure?" )
// if (i = 'yes'){
//    console.log( 'Ok, we will have your order right out.')
// } else {
//    console.log('What\'s the matter?  Can\'t  handel the heat?')
// }