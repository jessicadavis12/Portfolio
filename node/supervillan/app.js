var marvel = require('marvel-characters')
let marvelArray=[]
list = require('marvel-characters/characters.json')

//random character
console.log(marvel())
//console.log(marvel.characters)

//characters in the db
console.log(list.length)

// let test = marvel().substring(0,3) 
// console.log(test)

// //display characters match man- else error 
//     for(let i=0; i<list.length; i++){
//         if (list[i].match(/Man/g))
//             console.log(list[i]);
//             }

// list.forEach(matchMan)
// function matchMan(element, index) {
//     if (element.substring(0,3)=="Man"){
//           matchMan.push(element)
//         console.log(element.string)
//     }
//   }


// let names = marvel.characters.filter(function(el){
//                         return el.substring(0,3)=='Man'
// })
// console.log(names)

let bat = marvel.characters.filter(el=>{
    return el=='Batman'
})
//console.log(bat)
let result = bat.length != 0 ? bat:'No Match Found'
console.log(result)