var animals = require('animals');
var Log = require("log.pets")
list = require('animals/words.json')
//item 2 
//console.log(animals())
//item3
//log.lion()

//item 4
Log.zoo(animals(), animals(), animals())
//number of animals in the generator 
console.log(list.length)

//find all of the G enteries 


// for (let i=0; i<list.length; i++){
//     if (list[i].charAt(0) ==='g')
//     console.log(list[i]);
// }

let gLen = list.charAt(0, el=>{
    return el =='b'
})
let result = gLen.length !=0? result:"No Match Found"
console.log(result)


