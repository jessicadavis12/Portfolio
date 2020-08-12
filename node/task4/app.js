var casual = require ('casual')


var name = casual.name
var counrty = casual.country
var city = casual.city
var phone = casual.phone
var addy= casual.address
var month = casual.month_name

console.log('Hello '+ name +' !')
console.log('How was your trip to '+ counrty+'?')
console.log('Did you get to visit '+  city  +'?')
console.log('I sure do hope you had a wonderful time.  Is your number still '+phone+ '?')
console.log('I will try to give you a call sometime.  By the way, I want to send you a fresh load of bread. Is your address still ' + addy+ '?')
console.log('Well, I will see you soon.  I will be visiting sometime before ' +month+ '.')
console.log('Until then, farewell!')