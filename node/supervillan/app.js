var marvel = require('marvel-characters')
let marvelArray=[]
list = require('marvel-characters/characters.json')

//random character
console.log(marvel())
//console.log(marvel.characters)

//characters in the db
console.log(list.length)

//display characters match man- else error 
let man = []
    
    for(let i=0; i<list.length; i++){
        var vil = list[i].str.match(/man/g);
        console.log(vil);
        man.push.vil;}

    //if ( man.length=0)
    //console.log('No chaacters met the reqest')
